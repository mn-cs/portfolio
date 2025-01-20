"use client";

import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-3 mt-2">
      <div className="flex flex-col md:flex-row items-center  ">
        <Image
          isBlurred
          alt="Profile Image"
          className="rounded-lg object-cover w-32 sm:w-40 md:w-48 mt-3"
          src="/pp.png"
        />
        <div className=" ">
          <Card
            // isBlurred
            className=" mt-3 md:ml-3 min-h-[200px] "
          >
            <CardHeader className=" ">
              <div className="">
                <p className="">Hayk Pash</p>
                <p className="text-small text-default-500">Data Scientist</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className=""></div>
              <p>
                Data Scientist with expertise in data analysis, machine
                learning, and visualization.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>Los Angeles California USA</CardFooter>
          </Card>
        </div>
      </div>
      <Divider className="w-[95%] mx-auto" />

      <Card className=" ">
        <CardHeader className="flex gap-3">About Me</CardHeader>

        <Divider className="w-[98%] mx-auto" />
        <CardBody className="pb-[10%]">
          Hi, I&apos;m Hayk, a Data Scientist and Machine Learning Engineer
          passionate about transforming data into meaningful insights and
          solutions. With expertise in statistical analysis, machine learning,
          and data visualization, I have a proven track record of building
          models and systems that optimize processes and drive impactful
          decisions. My journey spans roles in data science, logistics, and
          engineering, where I&apos;ve led initiatives like creating predictive
          models, analyzing trends, and designing systems that enhance
          productivity. My projects—ranging from natural language processing to
          neural network-driven image classification—reflect my dedication to
          innovation and solving complex challenges. Currently pursuing a
          Master&apos;s in Data Science at the University of California, San
          Diego, I continue to refine my skills and stay at the forefront of
          emerging technologies. When I&apos;m not immersed in data, you&apos;ll
          find me exploring creative problem-solving, learning new tools, or
          contributing to the tech community. Let&apos;s connect to share ideas,
          collaborate, or explore new opportunities in data and technology.
        </CardBody>
      </Card>
    </section>
  );
}
