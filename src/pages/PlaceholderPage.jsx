// src/pages/PlaceholderPage.jsx
export default function PlaceholderPage({ title }) {
    return (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        color: '#64748b'
        }}>
        <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</span>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>{title}</h2>
        <p>This module is currently under development.</p>
        </div>
    );
}