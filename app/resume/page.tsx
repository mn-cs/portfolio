"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@heroui/button";

import React from "react";

type ResumePdfViewerProps = {
  /** Public URL to the PDF (e.g., "/resume.pdf") */
  pdfUrl?: string;
  /** Optional title shown above the viewer */
  title?: string;
  /** Height of the viewer area */
  heightPx?: number;
};

export default function ResumePdfViewer({
  pdfUrl = "/Michael-Hayk-Resume.pdf",
  title = "Resume",
  heightPx = 900,
}: ResumePdfViewerProps) {
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
                  src={`${pdfUrl}#view=FitH`}
                  title="Michael Hayk Resume"
                  className="w-full h-full"
                  style={{ border: "0" }}
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
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm text-foreground-500">Embedded PDF</div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              as="a"
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              variant="flat"
              size="sm"
            >
              Open in new tab
            </Button>

            <Button
              as="a"
              href={pdfUrl}
              download="Michael-Hayk-Resume.pdf"
              color="primary"
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
