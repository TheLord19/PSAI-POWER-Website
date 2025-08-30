import React from 'react';
import Link from 'next/link';
import { resourcesData } from './resources-data';
import styles from '@/styles/Resources.module.css';

const ResourcesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Resources</h1>
          <p className={styles.heroSubtitle}>
            Explore our in-depth articles on power system engineering, grid modernization, and renewable energy integration.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          {resourcesData.map((resource) => (
            <Link key={resource.id} href={`/resources/${resource.id}`} className={styles.cardLink}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{resource.title}</h2>
                <p className={styles.cardExcerpt}>{resource.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span>Read More</span>
                  <span className={styles.cardArrow}>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
