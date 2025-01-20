"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div className="w-full mr-5 mt-7 ">
      <Card className="">
        <CardHeader className="mx-5">Programming Languages:</CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p>Python, JavaScript, C++</p>
        </CardBody>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">Libraries / Frameworks: </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="mx-5">
          <p className=" mr-5">
            NumPy, SciPy, Pandas, Matplotlib, Seaborn, Scikit-learn, NLTK, Karas
          </p>
        </CardBody>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">Tools / Platforms: </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p className=" mr-5">
            Jupyter Notebook, JupyterLab, Colab, PowerPoint, AWS
          </p>
        </CardBody>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">Databases:</CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p>SQL, MongoDB</p>
        </CardBody>
      </Card>
    </div>
  );
}
