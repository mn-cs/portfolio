"use client";

import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

import { ExternalLinkIcon, JupyterIcon } from "@/components/icons";
import projects from "@/config/projectData";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <Card
          key={index}
          isHoverable
          isPressable
          as="a"
          className="w-full flex flex-col "
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <CardHeader className="opacity-80">
            <Image
              removeWrapper
              alt={project.title}
              className="z-0"
              src={project.image}
            />
          </CardHeader>
          <CardFooter>
            <div className="flex flex-grow gap-2 items-center">
              <JupyterIcon className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="text-default-600">{project.title}</p>
                <span className="text-tiny flex items-center gap-1 text-default-500">
                  Visit source code on GitHub.
                  <ExternalLinkIcon className="h-4 w-3 text-default-500" />
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
