"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div className="w-full mr-5  ">
      <Card className="">
        <CardHeader className="mx-5">
          University of California San Diego
        </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p>Master&apos;s Degree in Data Science</p>
          <p className="text-small mr-5 text-default-500">
            April 2024 - June 2026
          </p>
        </CardBody>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p className="">Coursework</p>
          <p className="text-small mr-5 text-default-500">
            DSC 255R Machine Learning Fundamentals
          </p>
          <p className="text-small mr-5 text-default-500">
            DSC 207R Python for Data Science
          </p>
          <p className="text-small mr-5 text-default-500">
            DSC 215R Foundations of Probability and Statistics in Data Science
          </p>
        </CardBody>
        <Divider className="w-[95%] mx-auto" />
        <CardFooter className="ml-5">
          <p>San Diego, California</p>
        </CardFooter>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">Los Angeles City College </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="mx-5">
          <p>Computer Science in Data Science</p>
          <p className="text-small mr-5 text-default-500">
            February 2022 - June 2024
          </p>
        </CardBody>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p className="">Coursework</p>
          <p className="text-small mr-5 text-default-500">
            CS 216 Object-Oriented Programming C++
          </p>
          <p className="text-small mr-5 text-default-500">
            MATH 261 Calculus I
          </p>
          <p className="text-small mr-5 text-default-500">
            MATH 229 Statistis for Data Science
          </p>
          <p className="text-small mr-5 text-default-500">
            CS 119 Python Programming
          </p>
          <p className="text-small mr-5 text-default-500">
            CS 116 Programming In C++
          </p>
          <p className="text-small mr-5 text-default-500">
            MATH 260 Precalculus
          </p>
        </CardBody>
        <Divider className="w-[95%] mx-auto" />
        <CardFooter className="ml-5">Los Angeles, California</CardFooter>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">
          University of California, Los Angeles{" "}
        </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p>Computer Science Web Coding Boot Camp</p>
          <p className="text-small mr-5 text-default-500">
            June 2019 - March 2020
          </p>
        </CardBody>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p className="">Coursework</p>
          <p className="text-small mr-5 text-default-500">
            DESMA X 481.61 Frontend Web Coding Bootcamp
          </p>
          <p className="text-small mr-5 text-default-500">
            COM SCI X 414.20 Fundamentals of Software Development
          </p>
        </CardBody>
        <CardFooter className="ml-5">Los Angeles, California</CardFooter>
      </Card>
      <Card className="w-full mt-5">
        <CardHeader className="ml-5">
          Armenian National Agrarian University{" "}
        </CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="ml-5">
          <p>Bachelor of Engineering </p>
          <p className="text-small mr-5 text-default-500">
            September 2003 - June 2009
          </p>
        </CardBody>
        <CardFooter className="ml-5">Yerevan, Armenia</CardFooter>
      </Card>
    </div>
  );
}
