"use client";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <Card className="flex items-center mb-5 h-[215px] w-full">
        <p className="w-full text-left text-default-300 p-5 ">Location</p>
        <p className="pb-1 text-xl pt-7">United States</p>
        <Divider />
        <p className="pt-1 text-default-500">Los Angeles, California</p>
      </Card>

      <Card className="p-0 mb-5 overflow-hidden  h-[215px] cursor-pointer text-left w-full">
        <p className="text-default-300 p-5">Business Card </p>
        <p className="pt-9 pl-10 text-xl">Michael Hayk</p>
        <Divider />
        <p className="pt-0.5 pl-10  text-default-500">Data Scientist</p>
      </Card>
      <Card className="p-0 overflow-hidden  h-[215px] cursor-pointer text-left w-full">
        <a href="mailto:Email Address">
          <p className="pt-5 pl-6 pb-1 text-default-500 ">
            Email Address
          </p>
        </a>
        <Divider />
        <div className="flex items-center justify-between ">
          <div>
            <p className="pt-5 pl-6  text-default-500">michaelhayk.com</p>
            <p className="pt-5 pl-6 pb-7 text-[12px] text-default-500">
              Scan the QR code to visit my portfolio
            </p>
          </div>
          <Image
            alt="QR Code"
            className="w-[108px] pr-5 opacity-70"
            height={108}
            src="/b_card/qr-code.svg"
            width={108}
          />
        </div>
        <Divider />
        <a href="tel:Phone Number">
          <p className="pt-2 pl-6  text-default-500">Phone Number</p>
        </a>
      </Card>
    </div>
  );
}
