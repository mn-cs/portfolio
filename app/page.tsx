"use client";

import { Card } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

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
                Data Scientist with hands-on project experience in data
                analysis, machine learning, and visualization.
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
          </Card>
        </div>
      </div>
    </section>
  );
}
