"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div className="w-full">
      <Card className="w-full max-w-lg mx-auto mb-5">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          University of California San Diego
        </CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Degree & Dates */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Master&apos;s Degree in Data Science
          </p>
          <p className="text-small text-default-500">April 2024 - June 2026</p>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          <p className="font-medium">Coursework</p>
          <ul className="list-disc pl-4 text-small text-default-500 space-y-1">
            <li>DSC 255R Machine Learning Fundamentals</li>
            <li>DSC 207R Python for Data Science</li>
            <li>
              DSC 215R Foundations of Probability and Statistics in Data Science
            </li>
          </ul>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          San Diego, California
        </CardFooter>
      </Card>
      <Card className="w-full max-w-lg mx-auto mb-5">
        {/* College Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          Los Angeles City College
        </CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Program Name & Dates */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Computer Science and Data Science
          </p>
          <p className="text-small text-default-500">
            February 2022 - June 2024
          </p>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          <p className="font-medium">Coursework</p>
          <ul className="list-disc list-inside pl-1 text-small text-default-500 space-y-1">
            <li>CS 216 Object-Oriented Programming C++</li>
            <li>MATH 261 Calculus I</li>
            <li>MATH 229 Statistics for Data Science</li>
            <li>CS 119 Python Programming</li>
            <li>CS 116 Programming in C++</li>
            <li>MATH 260 Precalculus</li>
          </ul>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          Los Angeles, California
        </CardFooter>
      </Card>
      <Card className="w-full max-w-lg mx-auto mb-5">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          University of California, Los Angeles
        </CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Program */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Computer Science Web Coding Boot Camp
          </p>
          <p className="text-small text-default-500">June 2019 - March 2020</p>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          <p className="font-medium">Coursework</p>
          <ul className="list-disc pl-4 text-small text-default-500 space-y-1">
            <li>DESMA X 481.61 Frontend Web Coding Bootcamp</li>
            <li>COM SCI X 414.20 Fundamentals of Software Development</li>
          </ul>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          Los Angeles, California
        </CardFooter>
      </Card>
      <Card className="w-full mx-auto">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          Armenian National University
        </CardHeader>

        <Divider className="w-[95%] mx-auto" />

        {/* Degree & Dates */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Bachelor of Engineering
          </p>
          <p className="text-small text-default-500">
            September 2003 - June 2009
          </p>
        </CardBody>

        <Divider className="w-[95%] mx-auto" />

        {/* Location */}
        <CardFooter className="px-5 text-small">Yerevan, Armenia</CardFooter>
      </Card>
    </div>
  );
}
