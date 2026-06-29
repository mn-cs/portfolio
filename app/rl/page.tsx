import { Metadata } from "next";

import QLearningDashboard from "./rl-dashboard";

export const metadata: Metadata = {
  title: "RL",
  description: "Interactive Q-learning reinforcement learning dashboard.",
};

export default function RLPage() {
  return (
    <div className="w-full">
      <QLearningDashboard />
    </div>
  );
}
