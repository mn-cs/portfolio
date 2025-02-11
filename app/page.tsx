"use client";

import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-3 mt-2">
      <div className="flex flex-col md:flex-row items-center  w-full">
        {/* <Image
          isBlurred
          alt="Profile Image"
          className="rounded-lg object-cover w-32 sm:w-40 md:w-48 mt-3"
          src="/pp.png"
        /> */}
        <div className="w-full">
          <Card
            // isBlurred
            className="mt-3 p-2"
          >
            <CardHeader className="">
              <div className="">
                <p className="mb-2">Michael Hayk</p>
                <p className="text-small text-default-500">Data Scientist</p>
              </div>
            </CardHeader>
            <Divider className="w-[95%] mx-auto" />
            <CardBody className="">
              <p>
                Data Scientist with expertise in data analysis, machine
                learning, and visualization.
              </p>
            </CardBody>
            <Divider className="w-[95%] mx-auto" />
            <CardFooter className="">Los Angeles California USA</CardFooter>
          </Card>
        </div>
      </div>
      <Divider className="w-[95%] mx-auto" />

      <Card>
        <CardHeader className="px-5">About Me</CardHeader>
        <Divider className="w-[95%] mx-auto" />
        <CardBody className="pb-[10%] text-justify px-5">
          Hi, I&apos;m Michael, a Data Scientist and Machine Learning Engineer
          passionate about transforming data into meaningful insights and
          solutions. With expertise in statistical analysis, machine learning,
          and data visualization, I have a proven track record of building
          models and systems that optimize processes and drive impactful
          decisions. My journey spans roles in data science, logistics, and
          engineering, where I&apos;ve led initiatives like creating predictive
          models, analyzing trends, and designing systems that enhance
          productivity. My projects—ranging from natural language processing to
          neural network-driven image classification—reflect my dedication to
          innovation and solving complex challenges. Staying at the forefront of
          emergint technologies is important to me. I&apos;m currently refining
          my skills at the University of California San Diego, pursuing my
          Master&apos;s in Data Science.
          {/* Currently pursuing a
          Master&apos;s in Data Science at the University of California, San
          Diego, I continue to refine my skills and stay at the forefront of
          emerging technologies. */}
          When I&apos;m not immersed in data, you&apos;ll find me exploring
          creative problem-solving, learning new tools, or contributing to the
          tech community. Let&apos;s connect to share ideas, collaborate, or
          explore new opportunities in data and technology.
        </CardBody>
      </Card>
    </section>
  );
}
