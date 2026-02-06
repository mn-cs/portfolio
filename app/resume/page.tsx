"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@heroui/button";
import React from "react";

const PDF_URL = "/Michael-Hayk-Resume.pdf";
const PAGE_TITLE = "Resume";

export default function ResumePage() {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardBody className="p-0">
          {/* "Paper" frame */}
          <div className="w-full flex justify-center">
            <div
              className="bg-white rounded-xl border border-default-200 shadow-xl overflow-hidden"
              style={{
                width: "min(950px, 100%)",
              }}
            >
              <div className="w-full h-[70vh] md:h-[900px]">
                <iframe
                  className="w-full h-full"
                  src={`${PDF_URL}#view=FitH`}
                  style={{ border: "0" }}
                  title="Michael Hayk Resume"
                />
              </div>
            </div>
          </div>

          {/* Optional fallback note */}
          {/* <div className="mt-3 text-xs text-foreground-500">
            If your browser blocks embedded PDFs, use “Open in new tab” or
            “Download”.
          </div> */}
        </CardBody>

        <CardHeader className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">{PAGE_TITLE}</div>
            <div className="text-sm text-foreground-500">Embedded PDF</div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              as="a"
              href={PDF_URL}
              rel="noreferrer"
              size="sm"
              target="_blank"
              variant="flat"
            >
              Open in new tab
            </Button>

            <Button
              as="a"
              color="primary"
              download="Michael-Hayk-Resume.pdf"
              href={PDF_URL}
              size="sm"
            >
              Download
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
