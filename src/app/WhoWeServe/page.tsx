'use client';
import React from "react";
import Link from "next/link";
import Card from "@/components/Card";

const sectors = [
  {
    id: "utilities",
    title: "Utilities & Grid Operators",
    description: "Improving grid reliability and smart grid transitions."
  },
  {
    id: "renewable",
    title: "Renewable Energy",
    description: "Solutions for solar, wind, hydro, and storage projects."
  },
  {
    id: "industrial",
    title: "Industrial Manufacturing",
    description: "Power systems for manufacturing plants and operations."
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Powering refineries, pipelines, and offshore platforms."
  },
  {
    id: "government",
    title: "Government & Regulatory",
    description: "Consulting and compliance for public infrastructure."
  },
  {
    id: "mining",
    title: "Mining Industry",
    description: "Reliable power for heavy-duty and remote mining."
  },
];

export default function WhoWeServe() {
  return (
    <section className="who-we-serve bg-gray-50">
      {/* Hero Section */}
      <div className="hero bg-blue-900 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">Who We Serve</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Delivering power solutions across industrial, renewable, and public sectors.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sectors.map(({ id, title, description }) => (
          <Link href={`/who-we-serve/${id}`} key={id}>
            <Card title={title} description={description} />
          </Link>
        ))}
      </div>
    </section>
  );
}
