"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

export default function Experience() {
  return (
    <div className="">
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md ">Graduate Program — Data Science (M.S.)</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">UC San Diego</p>
            <p className="text-small text-default-500">Present</p>
          </div>
        </CardBody>
        <Divider />
        <CardBody>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li>
              End-to-end data science workflows:{" "}
              <span className="text-small text-default-500">
                Built complete pipelines including data collection (CSV/JSON),
                cleaning, feature engineering, and analysis using Python,
                Pandas, NumPy, and SQL.
              </span>
            </li>

            <li>
              Exploratory data analysis and statistics:{" "}
              <span className="text-small text-default-500">
                Performed exploratory analysis, statistical testing, and
                visualization to identify patterns and clearly communicate
                insights.
              </span>
            </li>

            <li>
              Machine learning modeling and optimization:{" "}
              <span className="text-small text-default-500">
                Developed and optimized machine learning models with
                scikit-learn using cross-validation and hyperparameter tuning.
              </span>
            </li>

            <li>
              Reproducibility and transparency:{" "}
              <span className="text-small text-default-500">
                Ensured analyses could be replicated through well-documented
                notebooks, version control, and structured pipelines.
              </span>
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md">Web Development (Self-Directed Practice)</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">Remote</p>
            <p className="text-small text-default-500">Past</p>
          </div>
        </CardBody>

        <Divider />
        <CardBody>
          <div className="relative col-span-6 md:col-span-4" />
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li>
              Data-Driven Applications:{" "}
              <span className="text-small text-default-500">
                Developed and deployed small web applications while practicing
                modern frameworks (Next.js, HeroUI), version control (GitHub),
                and cloud deployment workflows (Vercel).
              </span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
