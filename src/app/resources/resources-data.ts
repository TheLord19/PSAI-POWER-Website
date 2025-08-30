export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const resourcesData: Resource[] = [
  {
    id: 'power-system-design',
    title: 'Power System Design & Engineering',
    excerpt: 'End-to-end design services for power systems, from feasibility studies to final implementation and testing.',
    content: [
      "Our team offers end-to-end design services for power systems, ranging from initial feasibility studies to final implementation and testing. We ensure that each design is efficient, cost-effective, and tailored to meet your specific needs.",
      "Whether you're looking to build a new substation, upgrade an existing facility, or optimize your transmission network, we provide customized system design, feasibility studies, component selection, and full project management."
    ],
  },
  {
    id: 'grid-modernization',
    title: 'Grid Modernization & Optimization',
    excerpt: 'Advanced solutions to modernize and optimize existing power grids as the energy landscape evolves.',
    content: [
      "As the energy landscape evolves, grids must become smarter, more flexible, and resilient. We offer advanced solutions to modernize and optimize existing power grids, including Smart Grid Integration, Energy Storage Solutions, and Advanced Grid Control Systems.",
      "We help utilities and large industrial clients balance supply and demand through flexible load management, improving overall system efficiency."
    ],
  },
  {
    id: 'renewable-energy-integration',
    title: 'Renewable Energy Integration',
    excerpt: 'Comprehensive solutions for integrating sources such as solar, wind, hydro, and storage into the grid.',
    content: [
      "Integrating renewable energy into existing power systems can be complex due to issues like variability and grid stability. Our experts provide comprehensive solutions for integrating renewable energy sources such as solar, wind, hydro, and storage into the grid.",
      "Our services include Interconnection Studies, Hybrid System Design, Optimization for Grid Stability, and navigating the complex regulatory and permitting processes associated with renewable energy projects."
    ],
  },
  {
    id: 'power-system-analysis',
    title: 'Power System Analysis & Simulation',
    excerpt: 'Detailed understanding of how your system will perform under different conditions using state-of-the-art software.',
    content: [
      "Our power system analysis services provide a detailed understanding of how your system will perform under different conditions. We use state-of-the-art software tools to conduct Load Flow Studies, Fault Analysis, Dynamic Stability Analysis, and Power Quality Analysis.",
      "We evaluate the response of your power system under different scenarios, such as equipment failures or extreme weather events, and recommending solutions to enhance resilience."
    ],
  },
  {
    id: 'electrical-system-protection',
    title: 'Electrical System Protection',
    excerpt: 'Designing and optimizing protection schemes that protect equipment from faults while minimizing downtime.',
    content: [
      "Protection systems are essential for ensuring the safety and reliability of power systems. We specialize in designing and optimizing protection schemes that protect equipment from faults while minimizing downtime.",
      "Our expertise includes Relay Coordination, Short-Circuit and Arc Flash Analysis, and designing backup protection systems to ensure maximum system reliability."
    ],
  }
];
