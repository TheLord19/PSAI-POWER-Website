import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityView } from "@/components/views/CapabilityView";
import { capabilities, getCapability } from "@/content/capabilities";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) return {};
  return pageMetadata({
    title: c.heading,
    description: c.metaDescription,
    path: `/capabilities/${c.slug}`,
  });
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();
  return <CapabilityView capability={capability} />;
}
