import { notFound } from "next/navigation";

const sectorData: Record<string, { title: string; content: JSX.Element }> = {
  "utilities": {
    title: "Utilities & Grid Operators",
    content: (
      <p>We help improve grid reliability and smart grid transition with scalable solutions tailored for utility providers.</p>
    ),
  },
  "renewable": {
    title: "Renewable Energy",
    content: (
      <p>We support solar, wind, hydro, and energy storage projects to help you build a sustainable future.</p>
    ),
  },
  "industrial": {
    title: "Industrial Manufacturing",
    content: (
      <p>Power systems for large-scale manufacturing, helping reduce downtime and energy costs.</p>
    ),
  },
  "oil-gas": {
    title: "Oil & Gas",
    content: (
      <p>Custom power systems for offshore platforms, refineries, and pipelines.</p>
    ),
  },
  "government": {
    title: "Government & Regulatory",
    content: (
      <p>Consulting and compliance services for government infrastructure projects.</p>
    ),
  },
  "mining": {
    title: "Mining Industry",
    content: (
      <p>Reliable power for remote, heavy-duty mining operations including energy optimization.</p>
    ),
  },
};

export default function SectorDetail({ params }: { params: { id: string } }) {
  const sector = sectorData[params.id];
  if (!sector) return notFound();

  return (
    <div className="main">
      <h1 className="text-3xl font-bold mb-4">{sector.title}</h1>
      <div className="text-lg leading-relaxed">{sector.content}</div>
    </div>
  );
}
