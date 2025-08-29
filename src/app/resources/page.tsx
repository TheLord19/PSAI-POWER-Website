// app/resources/page.tsx
export default function Resources() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>Resources</h1>
            <p>This is a dummy Resources page to test routing.</p>
            <ul>
                <li><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js Docs</a></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a></li>
                <li><a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a></li>
            </ul>
        </div>
    );
}
