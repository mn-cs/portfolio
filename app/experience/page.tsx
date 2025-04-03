"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export default function Experience() {
  return (
    <div className="">
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md ">Self-employed</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">
              Data Scientist and Machine Learning Engineer
            </p>
            <p className="text-small text-default-500">Jan 2023 - Present</p>
          </div>
        </CardBody>
        <Divider />

        <CardBody>
          <div className="relative col-span-6 md:col-span-4"></div>
          <p>
            Collecting and preparing accurate data, conducting analyses, and
            building machine learning models to uncover trends and solve
            problems. Creating visualizations to communicate insights, enabling
            data-driven decisions and process improvements.
          </p>
        </CardBody>

        {/* <CardFooter>
          Below are links to some of the projects I have worked on:
        </CardFooter>
        <CardFooter>
          <div className="flex flex-col ">
            <Link
              isBlock
              showAnchorIcon
              color="foreground"
              href="https://github.com/haykpash/project_res/blob/main/Career%20Transitions%20and%20Job%20Satisfaction.ipynb"
            >
              Career Transitions and Job Satisfaction
            </Link>
            <Link
              isBlock
              showAnchorIcon
              color="foreground"
              href="https://github.com/haykpash/project_res/blob/main/Natural%20Language%20Processing%20with%20NLTK.ipynb"
            >
              Natural Language Processing with NLTK
            </Link>
            <Link
              isBlock
              showAnchorIcon
              color="foreground"
              href="https://github.com/haykpash/project_res/blob/main/Image%20Classification%20with%20Neural%20Networks.ipynb"
            >
              Image Classification with Neural Networks
            </Link>
            <Link
              isBlock
              showAnchorIcon
              color="foreground"
              href="https://github.com/haykpash/project_res/blob/main/Predicting%20Financial%20Trends%20and%20Weather%20Patterns.ipynb"
            >
              Predicting Financial Trends and Weather Patterns
            </Link>
          </div>
        </CardFooter> */}
      </Card>
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md">In UAE LLC</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">
              Statistical Analyst, Data Visualization Specialist
            </p>
            <p className="text-small text-default-500">Mar 2019 - Jan 2023</p>
          </div>
        </CardBody>

        <Divider />
        <CardBody>
          <div className="relative col-span-6 md:col-span-4"></div>
          <p>
            Analyzed website user engagement data to identify trends and improve
            web performance, enhancing user experience and increasing new user
            profiles by 8.5%. Created visual reports to communicate insights and
            support data-driven decisions effectively.
          </p>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md">All State Trucking Transportation</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">Logistics and Data Analyst</p>
            <p className="text-small text-default-500">Feb 2018 - Feb 2019</p>
          </div>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="relative col-span-6 md:col-span-4"></div>
          <p>
            Coordinated transportation deals by working with brokers and
            clients, ensuring drivers move loads efficiently and on time.
            Analyzed transportation data to optimize operations and support
            decision-making. Managed contracts worth $1.1M in a year, bringing
            significant revenue to the company and ensuring smooth operations.
          </p>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardHeader className="flex gap-3">
          <p className="text-md">A&H Brothers</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">
              Transportation Coordinator, Data System Engineer
            </p>
            <p className="text-small text-default-500">Dec 2011 - Oct 2017</p>
          </div>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="relative col-span-6 md:col-span-4"></div>
          <p>
            Managed driver operations to ensure smooth transportation workflows.
            By collaborating with the accounting team, I created a new system
            using Microsoft Excel to digitize, track, and analyze transportation
            data, which automated balance sheet calculations. This system
            boosted the company&apos;s profit by 15.7% and improved productivity
            by making processes faster and more accurate.
          </p>
        </CardBody>
      </Card>
      <Card className="">
        <CardHeader className="flex gap-3">
          <p className="text-md">Tomazo Corp</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
            <p className="text-md">Manager and 3D Jewelry Designer</p>
            <p className="text-small text-default-500">Jan 2005 - Dec 2011</p>
          </div>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="relative col-span-6 md:col-span-4"></div>
          <p>
            Created 3D jewelry designs using Blender and Adobe Photoshop and
            worked with manufacturing teams to ensure quality production. I set
            up a system to design, produce, and sell directly to customers,
            which doubled the company&apos;s profits by improving efficiency and
            customer engagement.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
