"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import qnaData from "../config/qnaData";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-3 mt-2">
      <div className="flex flex-col md:flex-row items-center  w-full">
        <div className="w-full">
          <Card
            // isBlurred
            className="mt-3 "
          >
            <CardHeader>
              <div>
                <p className="mb-2">Michael Hayk</p>
                <p className="text-small text-default-500">
                  Data Scientist | Machine Learning Engineer
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Data Scientist with expertise in data analysis, machine
                learning, and visualization.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>Los Angeles California USA</CardFooter>
          </Card>
          {/* ----------------------- Summary --------------------- */}
          <Card className="mt-3 ">
            <CardHeader> About </CardHeader>
            <Divider />
            <CardBody className="space-y-4">
              <p className="leading-relaxed text-default-700">
                I am a Data Scientist with graduate-level training in machine
                learning, statistics, and data analysis. I work with Python and
                SQL to build end-to-end data solutions, including data
                pipelines, statistical analysis, and predictive modeling.
              </p>

              <p className="leading-relaxed text-default-700">
                This portfolio showcases my background in applied machine
                learning through selected projects, education, skills, and
                experience, with an emphasis on reproducible analysis and clear
                communication of results.
              </p>
            </CardBody>
            {/* Data Scientist with hands-on experience in SQL, Python, and
                machine learning. Skilled in building data pipelines, performing
                statistical analysis, and developing predictive models for
                business insights. */}
            {/* Motivated and detail-oriented Data Scientist with five years of
                programming experience and a solid foundation in full-stack web
                development. Proficient in SQL, Python, and data visualization
                tools for extracting and clearly communicating actionable
                insights. Currently seeking an internship or entry-level data
                science role to join a collaborative team, learn from
                experienced professionals, and grow through real-world projects.
                Passionate about solving problems, optimizing processes, and
                continuously developing both technical and interpersonal skills. */}

            {/* <Divider /> */}
            {/* <CardFooter></CardFooter> */}
          </Card>
          {/* <div className="flex items-center m-3 text-default-600 text-xl">
            <span className="m-1 font-bold">Q&amp;A</span>
            <span className="m-1 font-bold">About Me</span>
          </div>
          {qnaData.map((section, sectionIndex) => (
            <Card
              key={sectionIndex}
              className={sectionIndex != qnaData.length - 1 ? "mb-3" : ""}
            >
              <CardHeader className="pl-5 text-lg">{section.header}</CardHeader>
              <Divider />
              <CardBody>
                {section.questions.map((question, index) => (
                  <ul key={index} className="pl-5">
                    <li className="list-disc">{question}</li>
                    <li className="text-default-500 list-[circle] mb-3 text-sm">
                      {section.answers[index]}
                    </li>
                  </ul>
                ))}
              </CardBody>
            </Card>
          ))} */}
        </div>
      </div>
      {/* <Divider className="w-[95%] mx-auto" /> */}

      {/* <Card>
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
          Master&apos;s in Data Science. When I&apos;m not immersed in data,
          you&apos;ll find me exploring creative problem-solving, learning new
          tools, or contributing to the tech community. Let&apos;s connect to
          share ideas, collaborate, or explore new opportunities in data and
          technology.
        </CardBody>
      </Card> */}
    </section>
  );
}
