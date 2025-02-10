"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div className="w-full mr-5 mt-7 ">
      <Card className="w-full  mx-auto">
        {/* Header */}
        <CardHeader className="ml-5 text-lg">Programming Languages</CardHeader>
        <Divider className="w-[95%] mx-auto" />
        {/* Content */}
        <CardBody className="ml-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
          </ul>
        </CardBody>
      </Card>
      <Card className="w-full mx-auto mt-5">
        {/* Header */}
        <CardHeader className="ml-5 text-lg">Libraries</CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Content */}
        <CardBody className="ml-5 text-default-500 text-medium">
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
      <Card className="w-full mx-auto shadow-md mt-5">
        {/* Header */}
        <CardHeader className="ml-5 text-lg">Tools & Platforms</CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Content */}
        <CardBody className="ml-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Jupyter Notebook</li>
            <li>JupyterLab</li>
            <li>Google Colab</li>
            <li>AWS</li>
          </ul>
        </CardBody>
      </Card>
      <Card className="w-full mx-auto shadow-md mt-5">
        {/* Header */}
        <CardHeader className="ml-5 text-lg ">Databases</CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Content */}
        <CardBody className="ml-5 text-default-500 text-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
