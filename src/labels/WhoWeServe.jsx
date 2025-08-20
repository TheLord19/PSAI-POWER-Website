import React from "react";
import Accordion from "./Accordion.jsx";

const sectors = [
  {
    title: "Utilities & Grid Operators",
    content: (
      <>
        <p>
          We collaborate with utility companies to improve grid reliability, integrate new energy sources, and enhance operational efficiency. Whether you're transitioning to a smart grid or optimizing an existing one, we offer the tools and expertise to manage your grid infrastructure with precision.
        </p>
      </>
    )
  },
  {
    title: "Renewable Energy",
    content: (
      <>
        <p>
          With the world increasingly focused on sustainability, we provide renewable energy system design, integration, and optimization solutions for solar, wind, hydro, and energy storage projects. From project planning to grid connection, we help clients maximize their renewable energy output while ensuring grid stability.
        </p>
      </>
    )
  },
  {
    title: "Industrial Manufacturing",
    content: (
      <>
        <p>
          Power systems for industrial environments require a unique blend of reliability, efficiency, and scalability. We offer tailored solutions for large-scale manufacturing operations, helping businesses optimize their energy usage, reduce downtime, and ensure continuous power for critical operations.
        </p>
      </>
    )
  },
  {
    title: "Oil & Gas",
    content: (
      <>
        <p>
          The oil and gas sector faces specific challenges, including powering remote locations and managing complex electrical infrastructure. We deliver customized power system solutions that meet the demands of offshore platforms, refineries, and pipelines, ensuring safe and reliable power delivery in challenging environments.
        </p>
      </>
    )
  },
  {
    title: "Government & Regulatory",
    content: (
      <>
        <p>
          We work with governmental organizations and regulatory bodies to provide consulting on power infrastructure projects, compliance, and system upgrades. Our team ensures that you meet regulatory standards while implementing future-proof solutions that enhance energy security and sustainability.
        </p>
      </>
    )
  },
  {
    title: "Mining Industry",
    content: (
      <>
        <p>
          Mining operations require highly reliable power systems to support equipment and machinery in often remote, harsh environments. We specialize in providing power system solutions that ensure uninterrupted power for mining operations, including:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Power Supply for Remote Sites: Designing and implementing power solutions for off-grid or remote locations, including diesel, gas, and hybrid systems.</li>
          <li>Heavy Equipment Power: Providing power systems that support the heavy machinery used in mining operations, including shovels, crushers, and conveyor systems.</li>
          <li>Grid-Connected Mining Solutions: Optimizing connections between mining operations and the local or regional grid to improve energy efficiency and reduce costs.</li>
          <li>Energy Management & Optimization: Implementing systems to monitor and control energy consumption across mining facilities, reducing operational costs.</li>
        </ul>
      </>
    )
  }
];

export default function WhoWeServe() {
  return (
    <section className="who-we-serve bg-gray-50">
      {/* Hero */}
      <div className="hero bg-blue-900 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">Who We Serve</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Delivering power solutions across residential, commercial, and industrial sectors.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-4">
        {sectors.map((sector, i) => (
          <Accordion key={i} title={sector.title} content={sector.content} />
        ))}
      </div>
    </section>
  );
}
