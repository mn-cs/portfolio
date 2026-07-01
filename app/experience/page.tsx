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

            {/* <li>
              Data collection:{" "}
              <span className="text-small text-default-500">
                Gathered data from verified sources, downloaded CSV, JSON, and
                other formats, loaded them into Jupyter Notebook, and saved the
                raw copy in Pandas DataFrames.
              </span>
            </li>
            <li>
              Data cleaning (Data Wrangling):{" "}
              <span className="text-small text-default-500">
                Standardized formats, corrected types, handled missing values
                and outliers, and fixed inconsistencies.
              </span>
            </li>
            <li>
              Exploratory data analysis (EDA):{" "}
              <span className="text-small text-default-500">
                Summarized distributions and explored relationships to find
                patterns and trends, computing descriptive statistics with
                NumPy.
              </span>
            </li>
            <li>
              Hypothesis testing:{" "}
              <span className="text-small text-default-500">
                Applied statistical methods to test hypotheses and draw
                conclusions with SciPy and statsmodels.
              </span>
            </li>
            <li>
              Data visualization and communication:{" "}
              <span className="text-small text-default-500">
                Presented findings clearly with charts and explanations using
                Matplotlib and Seaborn.
              </span>
            </li>
            <li>
              Statistical Modeling and Machine Learning:{" "}
              <span className="text-small text-default-500">
                Built feature-engineered pipelines with scikit-learn, then
                trained and tuned models with cross-validation for predictive
                modeling.
              </span>
            </li>
            <li>
              Model Optimization and Simulation:{" "}
              <span className="text-small text-default-500">
                Tuned hyperparameters to improve model accuracy, applied machine
                learning algorithms with optimization techniques to test
                alternative scenarios, and simulated outcomes for decision
                support.
              </span>
            </li>
            <li>
              Reproducibility and Transparency:{" "}
              <span className="text-small text-default-500">
                Ensured analyses could be replicated by others through clear
                documentation of methods, data processing, and results.
              </span>
            </li>
            <li>
              Data Privacy and Ethical Considerations:{" "}
              <span className="text-small text-default-500">
                Protected sensitive information through de-identification and
                ethical practices, following data governance standards.
              </span> 
            </li> */}
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
