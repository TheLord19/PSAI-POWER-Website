import React from 'react';

interface Service {
    id: string;
    title: string;
    description: string;
    content: React.ReactNode;
}

const services: Service[] = [
    {
        id: 'consulting',
        title: 'Consulting Services',
        description:
            'Expert advice to optimize your energy systems and infrastructure.',
        content: (
            <>
                <p>
                    Our consulting team delivers expert advice and audits to improve
                    energy efficiency, compliance, and sustainability for your
                    facilities.
                </p>
                <p>
                    We analyze your current systems and propose tailored upgrades to
                    reduce costs and environmental impact.
                </p>
            </>
        ),
    },
    {
        id: 'installation',
        title: 'Installation Services',
        description:
            'Professional installation of electrical systems with guaranteed safety.',
        content: (
            <>
                <p>
                    Our certified technicians provide full installation services from
                    design to deployment with safety as a top priority.
                </p>
                <p>
                    We ensure your systems are installed efficiently, comply with all
                    regulations, and are ready to perform.
                </p>
            </>
        ),
    },
    {
        id: 'maintenance',
        title: 'Maintenance & Support',
        description:
            'Reliable ongoing support and maintenance for uninterrupted power.',
        content: (
            <>
                <p>
                    Regular maintenance contracts to keep your systems running smoothly
                    and minimize downtime.
                </p>
                <p>
                    Our support team is available 24/7 for emergency assistance and
                    rapid repairs.
                </p>
            </>
        ),
    },
    {
        id: 'custom-solutions',
        title: 'Custom Solutions',
        description: 'Tailored energy solutions designed to meet your unique needs.',
        content: (
            <>
                <p>
                    We develop fully customized energy systems that fit your operational
                    requirements and goals.
                </p>
                <p>
                    From microgrids to renewable integration, we deliver innovative,
                    cost-effective solutions.
                </p>
            </>
        ),
    },
];

type Params = {
    params: {
        id: string;
    };
};

export default function ServiceDetail({ params }: Params) {
    const service = services.find((s) => s.id === params.id);

    if (!service) {
        return (
            <main className="page-wrapper">
                <h1>Service Not Found</h1>
                <p>The service you are looking for does not exist.</p>
            </main>
        );
    }

    return (
        <main className="page-wrapper">
            <h1 className="page-title">{service.title}</h1>
            <section className="service-detail-content">{service.content}</section>
        </main>
    );
}

