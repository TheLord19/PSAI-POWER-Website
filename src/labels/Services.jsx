import React from "react";
import Accordion from "./Accordion.jsx";

const services = [
  {
    title: "Power System Design & Engineering",
    content: (
      <>
        <p>Our team offers end-to-end design services for power systems, ranging from initial feasibility studies to final implementation and testing. We ensure that each design is efficient, cost-effective, and tailored to meet your specific needs. Whether you're looking to build a new substation, upgrade an existing facility, or optimize your transmission network, we provide:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Customized System Design:</strong> Tailored to your operational needs, incorporating advanced technologies like automation, smart grids, and digital control systems.</li>
          <li><strong>Power Distribution & Transmission Substations Design:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Substation Layout & Configuration: Efficient land use and safety protocols.</li>
              <li>Electrical Schematics & Protection: Electrical diagrams, protection schemes, and control strategies.</li>
              <li>Switchgear & Transformer Sizing: Properly sizing transformers, circuit breakers, and other switchgear.</li>
            </ul>
          </li>
          <li><strong>Feasibility Studies & Planning:</strong> Assessments considering load forecasts, site conditions, and regulatory compliance.</li>
          <li><strong>Component Selection & Sizing:</strong> Choosing the right transformers, circuit breakers, protection relays, etc.</li>
          <li><strong>Project Management:</strong> Managing the project end-to-end to meet timelines and quality standards.</li>
        </ul>
      </>
    )
  },
  {
    title: "Grid Modernization & Optimization",
    content: (
      <>
        <p>As the energy landscape evolves, grids must become smarter, more flexible, and resilient. We offer advanced solutions to modernize and optimize existing power grids, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Smart Grid Integration: Leveraging smart meters, sensors, and real-time analytics.</li>
          <li>Power Distribution & Transmission Substations Upgrades: Retrofitting and upgrading existing substations, adding automation and condition monitoring.</li>
          <li>Energy Storage Solutions: Designing and integrating battery storage for grid stability and renewable energy accommodation.</li>
          <li>Advanced Grid Control Systems: SCADA, predictive analytics, and automated control strategies.</li>
          <li>Demand Response Programs: Balancing supply and demand through flexible load management.</li>
        </ul>
      </>
    )
  },
  {
    title: "Renewable Energy Integration",
    content: (
      <>
        <p>Integrating renewable energy into existing power systems can be complex due to variability and grid stability. Our experts provide comprehensive solutions for integrating renewable energy sources such as solar, wind, hydro, and storage into the grid, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Interconnection Studies: Assessing the technical requirements for connecting renewable energy systems to the grid.</li>
          <li>Hybrid System Design: Developing hybrid power systems that combine renewable sources with traditional generation and storage.</li>
          <li>Optimization for Grid Stability: Ensuring grid stability using advanced forecasting, real-time control, and power electronics.</li>
          <li>Regulatory and Compliance Support: Navigating the complex regulatory and permitting processes.</li>
          <li>Substation Integration for Renewables: Designing substations to handle intermittent renewable sources.</li>
        </ul>
      </>
    )
  },
  {
    title: "Power System Analysis & Simulation",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>Load Flow Studies: Analyzing voltage levels, power flows, and losses across the network.</li>
        <li>Fault Analysis & Protection Coordination: Assessing impact of faults and recommending protection relay settings.</li>
        <li>Dynamic Stability Analysis: Simulating system behavior under transient conditions.</li>
        <li>Contingency Analysis: Evaluating responses under equipment failures or extreme events.</li>
        <li>Power Quality Analysis: Assessing voltage quality, harmonic distortion, and corrective actions.</li>
        <li>Substation Performance Simulation: Predicting substation performance under various operating conditions.</li>
      </ul>
    )
  },
  {
    title: "Electrical System Protection",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>Relay Coordination: Ensuring coordinated tripping of circuits during faults.</li>
        <li>Short-Circuit and Arc Flash Analysis: Calculating fault currents and designing protection systems.</li>
        <li>Backup Protection Systems: Secondary protection mechanisms if primary fails.</li>
        <li>System-wide Protection Optimization: Continuous refinement for reliability and efficiency.</li>
        <li>Substation Protection Schemes: Ensuring reliable fault detection and isolation.</li>
      </ul>
    )
  },
  {
    title: "Energy Audits & Efficiency Studies",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>Energy Consumption Analysis: Identifying areas where energy is wasted.</li>
        <li>System Optimization: Upgrades, redesigns, and high-efficiency technologies.</li>
        <li>Cost-Benefit Analysis: Evaluating financial benefits of efficiency improvements.</li>
        <li>Compliance & Sustainability: Meeting energy regulations and reducing carbon footprint.</li>
      </ul>
    )
  },
  {
    title: "Feasibility Analysis",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>Site Assessments: Evaluating geographical and environmental factors.</li>
        <li>Cost Analysis: Assessing financial viability, ROI, and operating costs.</li>
        <li>Regulatory & Compliance Considerations: Permits, licenses, and compliance requirements.</li>
        <li>Risk Management: Identifying risks and providing mitigation strategies.</li>
      </ul>
    )
  },
  {
    title: "Power Reliability Studies",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>System Reliability Assessment: Metrics like MTBF and MTTR.</li>
        <li>Reliability-Centered Maintenance (RCM): Focused maintenance on critical components.</li>
        <li>Redundancy & Backup Systems: Generators, UPS, and battery storage for uptime.</li>
        <li>Failure Mode Effects Analysis (FMEA): Identifying failure modes and corrective actions.</li>
        <li>Substation Reliability Analysis: Equipment lifespan, fault tolerance, and optimization.</li>
      </ul>
    )
  },
  {
    title: "Harmonic Analysis & Design of Filters",
    content: (
      <ul className="list-disc list-inside ml-4">
        <li>Harmonic Distortion Analysis: Analyze harmonic impact on equipment.</li>
        <li>Identification of Harmonic Sources: Rectifiers, VFDs, nonlinear loads.</li>
        <li>Designing Passive and Active Filters: Remove harmful harmonics from the system.</li>
        <li>Compliance with Standards: IEEE 519 compliance for harmonic limits.</li>
      </ul>
    )
  }
];

export default function Services() {
  return (
    <section className="services-page bg-gray-50">
      {/* Hero */}
      <div className="hero bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Comprehensive energy solutions tailored to your needs.
        </p>
      </div>

      {/* Accordion Services */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-4">
        {services.map((service, i) => (
          <Accordion key={i} title={service.title} content={service.content} />
        ))}
      </div>
    </section>
  );
}
