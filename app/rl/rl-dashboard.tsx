"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * QLearningDashboard
 * ------------------
 * Standalone Q-learning grid-world dashboard as a React/TSX component.
 * No external dependencies — works in any React 18+ app (Next.js, Vite, CRA).
 *
 * Drop into a HeroUI page:
 *   import QLearningDashboard from "@/components/QLearningDashboard";
 *   export default function Page() { return <QLearningDashboard />; }
 *
 * Theming: override the CSS variables on `.rl-dashboard` from your global
 * stylesheet to match HeroUI tokens. See bottom of file.
 */

const ROWS = 6;
const COLS = 6;
const GOAL: [number, number] = [5, 5];
const TRAPS: [number, number][] = [
  [1, 3],
  [3, 1],
  [2, 4],
  [4, 2],
];
const ACTIONS: [number, number][] = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
];
const ARROWS = ["↑", "↓", "←", "→"];
const HARD_CAP = 500;

type Cell = [number, number, number, number];
type QTable = Cell[][];

interface RunState {
  Q: QTable;
  agent: [number, number];
  episode: number;
  steps: number;
  totalReward: number;
  lastReward: number;
  episodeRewards: number[];
  episodeOutcomes: number[];
  converged: boolean;
}

const isGoal = (r: number, c: number) => r === GOAL[0] && c === GOAL[1];
const isTrap = (r: number, c: number) =>
  TRAPS.some((t) => t[0] === r && t[1] === c);

function freshState(): RunState {
  return {
    Q: Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => [0, 0, 0, 0] as Cell),
    ),
    agent: [0, 0],
    episode: 0,
    steps: 0,
    totalReward: 0,
    lastReward: 0,
    episodeRewards: [],
    episodeOutcomes: [],
    converged: false,
  };
}

export default function QLearningDashboard() {
  // Hyperparameters
  const [alpha, setAlpha] = useState(0.1);
  const [gamma, setGamma] = useState(0.95);
  const [eps, setEps] = useState(0.3);
  const [speed, setSpeed] = useState(20);

  // Stopping rule
  const [thresh, setThresh] = useState(90);
  const [windowSize, setWindowSize] = useState(50);

  // Run loop
  const [playing, setPlaying] = useState(false);
  const [tick, setTick] = useState(0); // forces re-render after each step

  // Mutable run state — kept in a ref so the loop doesn't re-create on every render
  const stateRef = useRef<RunState>(freshState());
  const timerRef = useRef<number | null>(null);

  // Refs to params so the loop closure always reads the latest values
  const paramsRef = useRef({ alpha, gamma, eps, speed, thresh, windowSize });

  useEffect(() => {
    paramsRef.current = { alpha, gamma, eps, speed, thresh, windowSize };
  }, [alpha, gamma, eps, speed, thresh, windowSize]);

  // Canvas refs
  const gridRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const windowSuccessRate = useCallback((): number | null => {
    const s = stateRef.current;
    const w = paramsRef.current.windowSize;

    if (s.episodeOutcomes.length < w) return null;
    const recent = s.episodeOutcomes.slice(-w);

    return recent.filter((x) => x === 1).length / recent.length;
  }, []);

  const chooseAction = (r: number, c: number, e: number): number => {
    if (Math.random() < e) return Math.floor(Math.random() * 4);
    const q = stateRef.current.Q[r][c];
    let best = 0;

    for (let i = 1; i < 4; i++) if (q[i] > q[best]) best = i;

    return best;
  };

  const stepAgent = useCallback(() => {
    const s = stateRef.current;

    if (s.converged) return;
    const { alpha: a, gamma: g, eps: e, thresh: th } = paramsRef.current;

    const [r, c] = s.agent;
    const action = chooseAction(r, c, e);
    const [dr, dc] = ACTIONS[action];
    const nr = Math.max(0, Math.min(ROWS - 1, r + dr));
    const nc = Math.max(0, Math.min(COLS - 1, c + dc));

    let reward = -0.1;
    let done = false;

    if (isGoal(nr, nc)) {
      reward = 10;
      done = true;
    } else if (isTrap(nr, nc)) {
      reward = -10;
      done = true;
    }

    const maxNext = Math.max(...s.Q[nr][nc]);

    s.Q[r][c][action] =
      s.Q[r][c][action] + a * (reward + g * maxNext - s.Q[r][c][action]);

    s.agent = [nr, nc];
    s.steps += 1;
    s.totalReward += reward;
    s.lastReward = reward;

    if (done) {
      s.episode += 1;
      s.episodeOutcomes.push(isGoal(nr, nc) ? 1 : 0);
      s.episodeRewards.push(s.totalReward);
      if (s.episodeRewards.length > 200) s.episodeRewards.shift();
      if (s.episodeOutcomes.length > 500) s.episodeOutcomes.shift();
      s.totalReward = 0;
      s.agent = [0, 0];

      // Check stopping rule
      const rate = windowSuccessRate();

      if (rate !== null && rate >= th / 100) {
        s.converged = true;
        setPlaying(false);
      } else if (s.episode >= HARD_CAP) {
        s.converged = true;
        setPlaying(false);
      }
    }

    setTick((t) => t + 1);
  }, [windowSuccessRate]);

  // Run loop
  useEffect(() => {
    if (!playing) return;
    const run = () => {
      stepAgent();
      const s = stateRef.current;

      if (!s.converged) {
        timerRef.current = window.setTimeout(
          run,
          1000 / paramsRef.current.speed,
        );
      }
    };

    run();

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [playing, stepAgent]);

  const handlePlay = () => {
    if (stateRef.current.converged) {
      stateRef.current = freshState();
      setTick((t) => t + 1);
    }
    setPlaying((p) => !p);
  };

  const handleStep = () => {
    if (playing || stateRef.current.converged) return;
    stepAgent();
  };

  const handleReset = () => {
    setPlaying(false);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    stateRef.current = freshState();
    setTick((t) => t + 1);
  };

  // Drawing
  useEffect(() => {
    drawGrid(gridRef.current, stateRef.current);
    drawChart(chartRef.current, stateRef.current);
  }, [tick]);

  // Computed display values
  const s = stateRef.current;
  const rate = windowSuccessRate();
  const successDisplay =
    rate === null
      ? `${s.episodeOutcomes.length}/${windowSize}`
      : `${Math.round(rate * 100)}%`;

  const banner = s.converged
    ? rate !== null && rate >= thresh / 100
      ? {
          kind: "success" as const,
          text: `Converged at episode ${s.episode} — success rate ${Math.round(
            rate * 100,
          )}% over last ${windowSize} episodes.`,
        }
      : {
          kind: "warning" as const,
          text: `Hard cap reached (${HARD_CAP} episodes) — current rate ${
            rate === null ? "n/a" : `${Math.round(rate * 100)}%`
          }. Try adjusting hyperparameters.`,
        }
    : null;

  return (
    <>
      <style>{styles}</style>
      <div className="rl-dashboard">
        <DashboardTitle />

        <div className="rl-stats">
          <Stat label="Episode" value={s.episode} />
          <Stat label="Steps" value={s.steps} />
          <Stat label="Last reward" value={s.lastReward.toFixed(1)} />
          <Stat label="Window success" value={successDisplay} />
        </div>

        {banner && (
          <div
            className="rl-banner"
            style={{
              background:
                banner.kind === "success"
                  ? "var(--rl-success-bg)"
                  : "var(--rl-warning-bg)",
              color:
                banner.kind === "success"
                  ? "var(--rl-success-text)"
                  : "var(--rl-warning-text)",
            }}
          >
            {banner.text}
          </div>
        )}

        <div className="rl-grid-2">
          <div className="rl-card">
            <h3 className="rl-card-title">Grid world</h3>
            <p className="rl-card-sub">
              Arrow shows best action; number below shows the Q-value of that
              action.
            </p>
            <canvas
              ref={gridRef}
              className="rl-canvas rl-canvas-grid"
              height={360}
              width={360}
            />
            <div className="rl-legend">
              <span>
                <span className="rl-swatch" style={{ background: "#378ADD" }} />
                Agent
              </span>
              <span>
                <span className="rl-swatch" style={{ background: "#639922" }} />
                Goal +10
              </span>
              <span>
                <span className="rl-swatch" style={{ background: "#E24B4A" }} />
                Trap −10
              </span>
            </div>
          </div>

          <div className="rl-card">
            <h3 className="rl-card-title">Reward per episode</h3>
            <p className="rl-card-sub">
              Total reward earned per episode. Trends upward as learning
              progresses.
            </p>
            <canvas
              ref={chartRef}
              className="rl-canvas"
              height={280}
              width={320}
            />
          </div>
        </div>

        <div className="rl-card" style={{ marginBottom: "1rem" }}>
          <h3 className="rl-card-title" style={{ marginBottom: 12 }}>
            Hyperparameters
          </h3>
          <div className="rl-controls">
            <Slider
              format={(v) => v.toFixed(2)}
              label="Learning rate (α)"
              max={1}
              min={0.01}
              step={0.01}
              value={alpha}
              onChange={setAlpha}
            />
            <Slider
              format={(v) => v.toFixed(2)}
              label="Discount (γ)"
              max={0.99}
              min={0}
              step={0.01}
              value={gamma}
              onChange={setGamma}
            />
            <Slider
              format={(v) => v.toFixed(2)}
              label="Exploration (ε)"
              max={1}
              min={0}
              step={0.01}
              value={eps}
              onChange={setEps}
            />
            <Slider
              format={(v) => `${v}`}
              label="Speed (steps/sec)"
              max={200}
              min={1}
              step={1}
              value={speed}
              onChange={setSpeed}
            />
          </div>
        </div>

        <div className="rl-card" style={{ marginBottom: "1rem" }}>
          <h3 className="rl-card-title" style={{ marginBottom: 12 }}>
            Stopping rule
          </h3>
          <div className="rl-controls">
            <Slider
              format={(v) => `${v}%`}
              label="Success threshold"
              max={100}
              min={50}
              step={1}
              value={thresh}
              onChange={setThresh}
            />
            <Slider
              format={(v) => `${v}`}
              label="Window size"
              max={100}
              min={10}
              step={5}
              value={windowSize}
              onChange={setWindowSize}
            />
          </div>
          <p className="rl-help">
            Auto-stops when success rate over last N episodes hits threshold.
            Hard cap: {HARD_CAP} episodes.
          </p>
          <div className="rl-buttons">
            <button onClick={handlePlay}>{playing ? "Pause" : "Play"}</button>
            <button onClick={handleStep}>Step</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- subcomponents ---------- */

export function DashboardTitle() {
  return (
    <>
      <style>{`
        .rl-dashboard-title {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1.15;
          margin: 0.5rem 0;
          background: linear-gradient(90deg, #1D9E75 0%, #378ADD 50%, #D4537E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: rl-title-shimmer 8s ease-in-out infinite;
        }
        .rl-dashboard-subtitle {
          font-size: 18px;
          margin-top: 0;
        }
        @keyframes rl-title-shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        @media (max-width: 600px) {
          .rl-dashboard-title { font-size: 24px; }
          .rl-dashboard-subtitle { font-size: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rl-dashboard-title { animation: none; }
        }
      `}</style>
      <h1 className="rl-dashboard-title">Reinforcement Learning (RL)</h1>
      <p className="rl-dashboard-title rl-dashboard-subtitle">Q-learning agent in a grid world</p>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rl-stat">
      <div className="rl-stat-label">{label}</div>
      <div className="rl-stat-value">{value}</div>
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: SliderProps) {
  return (
    <div>
      <div className="rl-slider-row">
        <span>{label}</span>
        <span>{format(value)}</span>
      </div>
      <input
        max={max}
        min={min}
        step={step}
        type="range"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
}

/* ---------- canvas drawing ---------- */

function drawGrid(cv: HTMLCanvasElement | null, s: RunState) {
  if (!cv) return;
  const ctx = cv.getContext("2d");

  if (!ctx) return;
  const theme = getCanvasTheme(cv);
  const W = cv.width;
  const H = cv.height;
  const cw = W / COLS;
  const ch = H / ROWS;

  ctx.clearRect(0, 0, W, H);

  const allQ: number[] = [];

  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) allQ.push(Math.max(...s.Q[r][c]));
  const minQ = Math.min(...allQ);
  const maxQ = Math.max(...allQ);
  const range = Math.max(0.01, maxQ - minQ);

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * cw;
      const y = r * ch;
      const v = Math.max(...s.Q[r][c]);
      const t = (v - minQ) / range;
      const a = Math.min(0.6, Math.max(0, t * 0.6));

      ctx.fillStyle = `rgba(55, 138, 221, ${a})`;
      ctx.fillRect(x, y, cw, ch);

      if (isGoal(r, c)) {
        ctx.fillStyle = "#639922";
        ctx.fillRect(x + 2, y + 2, cw - 4, ch - 4);
      } else if (isTrap(r, c)) {
        ctx.fillStyle = "#E24B4A";
        ctx.fillRect(x + 2, y + 2, cw - 4, ch - 4);
      }

      ctx.strokeStyle = theme.gridLine;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, y, cw, ch);

      if (!isGoal(r, c) && !isTrap(r, c)) {
        const q = s.Q[r][c];

        if (!q.every((v) => v === 0)) {
          let best = 0;

          for (let i = 1; i < 4; i++) if (q[i] > q[best]) best = i;

          ctx.fillStyle = theme.text;
          ctx.font = "20px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(ARROWS[best], x + cw / 2, y + ch / 2 - 8);

          ctx.fillStyle = theme.mutedText;
          ctx.font = "11px sans-serif";
          ctx.fillText(q[best].toFixed(2), x + cw / 2, y + ch / 2 + 14);
        }
      }
    }
  }

  const ax = s.agent[1] * cw + cw / 2;
  const ay = s.agent[0] * ch + ch / 2;

  ctx.fillStyle = "#378ADD";
  ctx.beginPath();
  ctx.arc(ax, ay, Math.min(cw, ch) * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

function drawChart(cv: HTMLCanvasElement | null, s: RunState) {
  if (!cv) return;
  const ctx = cv.getContext("2d");

  if (!ctx) return;
  const theme = getCanvasTheme(cv);
  const W = cv.width;
  const H = cv.height;

  ctx.clearRect(0, 0, W, H);

  const padL = 36;
  const padR = 8;
  const padT = 8;
  const padB = 24;
  const cw = W - padL - padR;
  const ch = H - padT - padB;

  ctx.strokeStyle = theme.axis;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(padL, padT + ch);
  ctx.lineTo(padL + cw, padT + ch);
  ctx.stroke();

  if (s.episodeRewards.length < 2) {
    ctx.fillStyle = theme.mutedText;
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Run some episodes to see learning curve", W / 2, H / 2);

    return;
  }

  const minR = Math.min(...s.episodeRewards, 0);
  const maxR = Math.max(...s.episodeRewards, 1);
  const range = Math.max(1, maxR - minR);

  const zeroY = padT + ch - ((0 - minR) / range) * ch;

  ctx.strokeStyle = theme.gridLine;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(padL, zeroY);
  ctx.lineTo(padL + cw, zeroY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = theme.mutedText;
  ctx.font = "10px sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(maxR.toFixed(1), padL - 4, padT + 8);
  ctx.fillText(minR.toFixed(1), padL - 4, padT + ch);
  ctx.textAlign = "center";
  ctx.fillText("episodes", padL + cw / 2, H - 6);

  ctx.strokeStyle = "#378ADD";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  s.episodeRewards.forEach((r, i) => {
    const x = padL + (i / Math.max(1, s.episodeRewards.length - 1)) * cw;
    const y = padT + ch - ((r - minR) / range) * ch;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function getCanvasTheme(cv: HTMLCanvasElement) {
  const canvasStyle = window.getComputedStyle(cv);
  const dashboard = cv.closest(".rl-dashboard");
  const dashboardStyle =
    dashboard instanceof HTMLElement
      ? window.getComputedStyle(dashboard)
      : canvasStyle;

  return {
    axis:
      dashboardStyle.getPropertyValue("--rl-canvas-axis").trim() ||
      "rgba(128,128,128,0.4)",
    gridLine:
      dashboardStyle.getPropertyValue("--rl-canvas-grid").trim() ||
      "rgba(128,128,128,0.3)",
    mutedText:
      dashboardStyle.getPropertyValue("--rl-canvas-muted").trim() ||
      canvasStyle.color,
    text: canvasStyle.color,
  };
}

/* ---------- styles ---------- */

const styles = `
.rl-dashboard {
  --rl-bg: hsl(var(--heroui-content1, 0 0% 100%));
  --rl-surface: hsl(var(--heroui-content2, 0 0% 96%));
  --rl-border: hsl(var(--heroui-default-200, 0 0% 88%) / 0.28);
  --rl-text: hsl(var(--heroui-foreground, 0 0% 10%));
  --rl-text-muted: hsl(var(--heroui-default-500, 0 0% 42%));
  --rl-accent: hsl(var(--heroui-primary, 212 72% 54%));
  --rl-success-bg: hsl(var(--heroui-success-100, 101 56% 90%));
  --rl-success-text: hsl(var(--heroui-success-700, 95 73% 25%));
  --rl-warning-bg: hsl(var(--heroui-warning-100, 38 82% 92%));
  --rl-warning-text: hsl(var(--heroui-warning-700, 32 84% 28%));
  --rl-canvas-axis: hsl(var(--heroui-default-400, 0 0% 56%) / 0.45);
  --rl-canvas-grid: hsl(var(--heroui-default-400, 0 0% 56%) / 0.18);
  --rl-canvas-muted: hsl(var(--heroui-default-500, 0 0% 42%));
  --rl-radius-md: 8px;
  --rl-radius-lg: 12px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--rl-text);
  max-width: 680px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.rl-dashboard *, .rl-dashboard *::before, .rl-dashboard *::after { box-sizing: border-box; }

.rl-stats { display: flex; gap: 10px; margin-bottom: 0.875rem; flex-wrap: wrap; }
.rl-stat {
  background: var(--rl-surface);
  border-radius: var(--rl-radius-md);
  padding: 0.625rem 0.875rem;
  flex: 1;
  min-width: 110px;
}
.rl-stat-label { font-size: 13px; color: var(--rl-text-muted); margin-bottom: 4px; }
.rl-stat-value { font-size: 22px; font-weight: 500; }

.rl-banner {
  border-radius: var(--rl-radius-md);
  padding: 0.75rem 1rem;
  margin-bottom: 0.875rem;
  font-size: 13px;
}

.rl-grid-2 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px;
  margin-bottom: 0.875rem;
}
@media (max-width: 600px) {
  .rl-grid-2 { grid-template-columns: minmax(0, 1fr); }
}

.rl-card {
  background: var(--rl-bg);
  border: 1px solid var(--rl-border);
  border-radius: var(--rl-radius-lg);
  padding: 0.875rem;
}
.rl-card-title { font-size: 14px; font-weight: 500; margin: 0 0 8px; }
.rl-card-sub   { font-size: 12px; color: var(--rl-text-muted); margin: 0 0 12px; }

.rl-canvas { display: block; width: 100%; }
.rl-canvas-grid { max-width: 360px; margin: 0 auto; }

.rl-legend { display: flex; gap: 12px; justify-content: center; margin-top: 12px; font-size: 12px; flex-wrap: wrap; }
.rl-legend > span { display: inline-flex; align-items: center; gap: 4px; }
.rl-swatch { display: inline-block; width: 12px; height: 12px; border-radius: 2px; }

.rl-controls {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px 20px;
}
@media (max-width: 600px) {
  .rl-controls { grid-template-columns: minmax(0, 1fr); }
}
.rl-slider-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px; }
.rl-slider-row > :first-child { color: var(--rl-text-muted); }
.rl-slider-row > :last-child  { font-weight: 500; }
.rl-dashboard input[type="range"] { width: 100%; accent-color: var(--rl-accent); }

.rl-help { margin-top: 12px; font-size: 12px; color: var(--rl-text-muted); }

.rl-buttons { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
.rl-dashboard button {
  flex: 1;
  min-width: 80px;
  font-family: inherit;
  font-size: 14px;
  padding: 8px 14px;
  background: transparent;
  color: var(--rl-text);
  border: 1px solid var(--rl-border);
  border-radius: var(--rl-radius-md);
  cursor: pointer;
  transition: background 0.15s, transform 0.05s;
}
.rl-dashboard button:hover  { background: var(--rl-surface); }
.rl-dashboard button:active { transform: scale(0.98); }
`;
