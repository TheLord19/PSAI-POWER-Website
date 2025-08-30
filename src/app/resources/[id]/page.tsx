
import { resourcesData } from '../resources-data'; 
import styles from '@/styles/Resources.module.css';

// This function tells Next.js which pages to pre-build for speed
export async function generateStaticParams() {
  return resourcesData.map((resource) => ({
    id: resource.id,
  }));
}

// Await params to handle the breaking change
type Params = Promise<{ id: string }>;

export default async function ResourceDetailPage({ params }: { params: Params }) {
  // Await the params since it's a Promise
  const { id } = await params;

  // Find the specific resource using the id from the URL parameters
  const resource = resourcesData.find((r) => r.id === id);

  // If no resource is found for the given id, display a "not found" message.
  if (!resource) {
    return (
      <div className={styles.container}>
        <h1 className={styles.articleTitle}>Resource Not Found</h1>
        <p>Sorry, we could not find the resource you were looking for.</p>
      </div>
    );
  }

  // If the resource is found, display its details.
  return (
    <div className={styles.articleContainer}>
      <article>
        <h1 className={styles.articleTitle}>{resource.title}</h1>
        <div className={styles.articleContent}>
          {resource.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
