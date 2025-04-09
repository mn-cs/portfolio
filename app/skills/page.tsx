"use client";

// import { Card } from "@nextui-org/card";
// import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function DocsPage() {
  return (
    <div className="w-full">
      <Card className="w-full mx-auto mb-3">
        {/* Header */}
        <CardHeader className="px-5 text-lg font-semibold">
          Programming & Query Languages
        </CardHeader>
        <Divider />
        {/* Content */}
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>SQL</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full mx-auto mb-3">
        {/* Header */}
        <CardHeader className="px-5 text-lg font-semibold">
          Data Science Libraries
        </CardHeader>
        <Divider />
        {/* Content */}
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>NumPy</li>
            <li>SciPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>Scikit-learn</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full  mx-auto mb-3">
        {/* Header */}
        <CardHeader className="px-5 text-lg font-semibold">
          Databases & Data Tools
        </CardHeader>
        <Divider />
        {/* Content */}
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>SQLite</li>
            <li>MongoDB</li>
          </ul>
        </CardBody>
      </Card>

      <Card className="w-full mx-auto">
        {/* Header */}
        <CardHeader className="px-5 text-lg font-semibold">
          Tools & Platforms
        </CardHeader>
        <Divider />
        {/* Content */}
        <CardBody className="px-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Jupyter Notebook / JupyterLab</li>
            <li>DB Browser for SQLite</li>
            <li>Google Colab</li>
            <li>AWS (S3, EC2, SageMaker)</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
