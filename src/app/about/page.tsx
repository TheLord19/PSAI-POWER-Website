'use client';
import React from "react";
import Accordion from "@/components/Card";

interface Section {
  title: string;
  content: string;
}

export default function About() {
  const sections: Section[] = [
    {
      title: "Our Mission",
      content: `PSAIPower is committed to delivering cutting-edge energy solutions
      that empower communities and industries. Our focus is on clean,
      reliable, and affordable power systems designed to meet today’s
      challenges and tomorrow’s needs.`
    },
    {
      title: "Our Values",
      content: `Innovation, Reliability, and Sustainability guide everything we do.
      With a team of experienced professionals and a dedication to excellence,
      PSAIPower ensures every project is delivered on time, within budget,
      and to the highest standards.`
    },
    {
      title: "Our Expertise",
      content: `Our expertise spans distributed energy resources up to 150 MW,
      advanced grid optimization, renewable integration, and protection
      systems. We pride ourselves on customer-centric solutions that are easy
      to deploy, minimize outages, and enhance reliability.`
    }
  ];

  return (
    <section className="about-page">
      {/* Hero */}
      <div className="hero bg-blue-900 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Trusted global leader in power system design, protection, and control.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          At <span className="font-semibold text-blue-900">PSAIPower</span>, we
          are a trusted global leader in power system design, protection, and
          control. With extensive experience across diverse regions, including
          North America, Latin America, the Caribbean, and Asia, we have
          successfully delivered innovative, reliable, and cost-effective power
          solutions for utilities, mines, and industrial clients.
        </p>

        <p>
          Our expertise spans a wide range of power system applications,
          including <span className="font-semibold">Distributed Energy Resource
          (DER)</span> interconnections to the distribution grid, with successful
          integrations up to 150MW. We understand the unique challenges each
          project presents and approach each one with a deep understanding of the
          technical and regulatory environments in which we operate.
        </p>

        <p>
          We pride ourselves on our{" "}
          <span className="font-semibold">customer-centric approach</span>,
          working closely with clients to develop tailored solutions that meet
          their specific needs. Our team has a proven track record of delivering
          innovative power measurement and protection instruments that are not
          only easy to install but also ensure minimal outage durations.
        </p>

        <p>
          We go beyond traditional approaches to bring forward-thinking
          technologies that improve both the performance and reliability of power
          systems while minimizing disruptions.
        </p>

        <p>
          Whether you are seeking advanced grid optimization, renewable energy
          integration, or cutting-edge protection schemes, our team is equipped
          with the knowledge and expertise to deliver exceptional results.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Learn More
        </h2>
        {sections.map((section, index) => (
          <Accordion key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </section>
  );
}
