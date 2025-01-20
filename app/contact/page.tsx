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
          <span className="text-default-500">Country: </span>
          United States
        </p>
        <p>
          <span className="text-default-500">State: </span> California
        </p>
        <p>
          <span className="text-default-500">City: </span> Los Angeles
        </p>
        <p>
          <span className="text-default-500">Zip Code: </span>
        </p>
        <p>
          <a href="mailto:Email Address">
            <span className="text-default-500">Email: </span>
            Email Address
          </a>
        </p>
        <p>
          <a href="tel:Phone Number">
            <span className="text-default-500">Phone: </span> Phone Number
          </a>
        </p>
      </div>
    </Card>
  );
}
