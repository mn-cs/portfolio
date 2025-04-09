"use client";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { ExternalLinkIcon, JupyterIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import projects from "@/config/projectData";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="w-full flex flex-col">
            <CardHeader className="opacity-75">
              <Image
                alt="image"
                className="z-0"
                removeWrapper
                src={project.image}
              />
            </CardHeader>
            <CardFooter className="">
              <div className="flex flex-grow gap-2 items-center">
                <JupyterIcon className="w-10 h-10" />
                <div className="flex flex-col">
                  <p className=" text-default-600">{project.title}</p>
                  <span className="text-tiny flex items-center gap-1 text-default-500">
                    Visit source code on GitHub.
                    <ExternalLinkIcon className="h-4 w-3 text-default-500" />
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
