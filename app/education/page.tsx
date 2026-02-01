"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function DocsPage() {
  return (
    <div className="w-full">
      {/* ---------------- UCSD --------------------------*/}
      <Card className="w-full  mx-auto mb-3">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          University of California San Diego
        </CardHeader>
        <Divider />
        {/* Degree & Dates */}
        <CardBody className="px-5 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-medium font-medium">
              Master&apos;s Degree in Data Science
            </p>
            <span className="text-small italic text-default-400">GPA: 4.0</span>
          </div>
          <p className="text-small text-default-500">
            {/* September 2024 - June 2027 */}
            September 2024 - June 2027
          </p>
        </CardBody>
        <Divider />
        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          <ul className="list-disc pl-4 text-small text-default-500 space-y-1">
            {/* <li>DSC 232R Big Data Analytics Using Spark</li>
            <li>DSC 257R Unsupervised Learning</li>
            <li>DSC 208R Data Management for Analytics</li>
            <li>DSC 255R Machine Learning Fundamentals</li>
            <li>DSC 207R Python for Data Science</li>
            <li>DSC 215R Probability and Statistics in Data Science</li> */}
            <li> Big Data Analytics Using Spark</li>
            <li> Unsupervised Learning</li>
            <li> Data Management for Analytics</li>
            <li> Machine Learning Fundamentals</li>
            <li> Python for Data Science</li>
            <li> Probability and Statistics in Data Science</li>
          </ul>
        </CardBody>
        <Divider />
        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          San Diego, California
        </CardFooter>
      </Card>

      {/* {/* ------------------ LACC -------------------*/}
      <Card className="w-full  mx-auto mb-3">
        {/* College Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          Los Angeles City College
        </CardHeader>
        <Divider />
        {/* Program Name & Dates */}
        <CardBody className="px-5 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-medium font-medium">
              Computer Science and Data Science
            </p>
            <span className="text-small italic text-default-400">GPA: 4.0</span>
          </div>
          <p className="text-small text-default-500">
            February 2022 - June 2024
          </p>
        </CardBody>
        <Divider />
        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          <ul className="list-disc list-inside pl-1 text-small text-default-500 space-y-1">
            {/* <li>CS 216 Object-Oriented Programming C++</li>
            <li>CS 119 Python Programming</li>
            <li>CS 116 Programming in C++</li>
            <li>MATH 229 Statistics for Data Science</li>
            <li>MATH 261 Calculus I</li>
            <li>MATH 260 Precalculus</li> */}
            <li> Object-Oriented Programming C++</li>
            <li> Python Programming</li>
            <li> Programming in C++</li>
            <li> Statistics for Data Science</li>
            <li> Calculus I</li>
            <li> Precalculus</li>
          </ul>
        </CardBody>

        <Divider />
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">Academic Honors</p>
          <ul className="list-disc list-inside text-small text-default-500">
            <li>Dean&apos;s Honor List - 2023, 2024</li>
          </ul>
        </CardBody>

        <Divider />
        {/* ------------------ UCLA -------------------*/}
        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          Los Angeles, California
        </CardFooter>
      </Card>
      <Card className="w-full  mx-auto mb-3">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          University of California, Los Angeles
        </CardHeader>
        <Divider />
        {/* Program */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Computer Science Web Coding Boot Camp
          </p>
          <p className="text-small text-default-500">June 2019 - March 2020</p>
        </CardBody>
        <Divider />
        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          {/* <p className="font-medium">Coursework</p> */}
          <ul className="list-disc pl-4 text-small text-default-500 space-y-1">
            <li>Frontend Web Coding Bootcamp</li>
            <li>Fundamentals of Software Development</li>
          </ul>
        </CardBody>
        <Divider />
        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          Los Angeles, California
        </CardFooter>
      </Card>

      {/* ------------------ ASU -------------------*/}
      <Card className="w-full mx-auto mb-3">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">
          Armenian National University
        </CardHeader>
        <Divider />
        {/* Degree & Dates */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            Bachelor of Engineering
          </p>
          <p className="text-small text-default-500">
            September 2003 - June 2009
          </p>
        </CardBody>
        <Divider />
        {/* Location */}
        <CardFooter className="px-5 text-small">Yerevan, Armenia</CardFooter>
      </Card>

      {/* ------------------ IBM -------------------*/}
      <Card className="w-full  mx-auto">
        {/* University Name */}
        <CardHeader className="px-5 text-lg font-semibold">Coursera</CardHeader>
        <Divider />
        {/* Program */}
        <CardBody className="px-5 space-y-1">
          <p className="text-medium font-medium">
            IBM Data Science Professional Certificate
          </p>
          <p className="text-small text-default-500">
            January 2024 - June 2024
          </p>
        </CardBody>
        <Divider />
        {/* Coursework */}
        <CardBody className="px-5 space-y-1">
          {/* <p className="font-medium">Coursework</p> */}
          <ul className="list-disc pl-4 text-small text-default-500 space-y-1">
            <li>Tools for Data Science</li>
            <li>What is Data Science?</li>
            <li>Data Science Methodology</li>
            <li>Python for Data Science, AI & Development</li>
            <li>Data Analysis with Python</li>
            <li>Databases and SQL for Data Science with Python</li>
            <li>Machine Learning with Python</li>
            <li>Data Visualization with Python</li>
            <li>Applied Data Science Capstone</li>
            <li>Python Project for Data Science</li>
          </ul>
        </CardBody>
        <Divider />
        {/* Location */}
        <CardFooter className="px-5 text-small text-default-700">
          Los Angeles, California
        </CardFooter>
      </Card>
    </div>
  );
}
