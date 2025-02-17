"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

export default function PricingPage() {
  return (
    <Card className="w-full mr-5 mt-10 p-14">
      <p className="text-lg font-bold text-default-600">Contact Information</p>
      <Divider />
      <div className="mt-4 space-y-2">
        <p>
          Country:
          <span className="text-default-500"> United States</span>
        </p>
        <p>
          State: <span className="text-default-500"> California</span>
        </p>
        <p>
          City: <span className="text-default-500"> Los Angeles</span>
        </p>
        <p>
          Zip Code: <span className="text-default-500"></span>
        </p>
        <p>
          <a
            className=" inline-flex gap-1"
            href="mailto:	Email Address"
          >
            Email:
            <span className="text-default-500">
              Email Address
            </span>
          </a>
        </p>
        <p>
          <a href="tel:Phone Number">
            Phone: <span className="text-default-500"> Phone Number</span>
          </a>
        </p>
      </div>
    </Card>
  );
}
