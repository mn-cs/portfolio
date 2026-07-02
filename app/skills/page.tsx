"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

export default function DocsPage() {
  return (
    <div className="w-full">
      <Card className="w-full mx-auto mb-3">
        <CardHeader className="px-5 text-lg font-semibold">
          Programming & Query Languages
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full mx-auto mb-3">
        <CardHeader className="px-5 text-lg font-semibold">
          Data Science Libraries
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Scikit-learn</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full mx-auto mb-3">
        <CardHeader className="px-5 text-lg font-semibold">
          Big Data & Distributed Systems
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Apache Spark</li>
            <li>PySpark</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full  mx-auto mb-3">
        <CardHeader className="px-5 text-lg font-semibold">
          Databases & Data Tools
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>PostgreSQL</li>
            <li>SQLite</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full mx-auto  mb-3">
        <CardHeader className="px-5 text-lg font-semibold">
          Tools & Platforms
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Jupyter Notebook / JupyterLab</li>
            <li>DB Browser for SQLite</li>
            <li>Google Colab</li>
            <li>AWS (S3, EC2, SageMaker Unified Studio)</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </CardBody>
      </Card>
      <Card className="w-full  mx-auto">
        <CardHeader className="px-5 text-lg font-semibold">
          Spoken Languages
        </CardHeader>
        <Divider />
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>English (Fluent)</li>
            <li>Armenian (Native)</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
