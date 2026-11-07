// src/pages/DocsPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DocsPage.css';

// Image imports based on your naming convention
import heroImg from '../assets/dashboard-icon.jpg';
import systemArch1 from '../assets/systemArch1.jpg';
import systemArch2 from '../assets/systemArch2.jpg';
import systemArch3 from '../assets/systemArch3.jpg';
import systemArch4 from '../assets/systemArch4.jpg';

export default function DocsPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Auth');

    // Content data for the interactive tabs (Section 3)
    const tabContent = {
        Overview: { title: "Overview", text: "High-level architecture and endpoint summary." },
        Auth: { title: "Token authentication for stateless requests", text: "Use a JWT in the Authorization header. The server validates the signature and checks device permissions without a session store." },
        Payloads: { title: "Payload ingestion formats", text: "Send JSON blocks with device telemetry. Optimized for low-bandwidth environments." },
        Devices: { title: "Device registration", text: "Automated handshakes for onboarding new hardware to the fleet." },
        Alerts: { title: "Alert thresholds", text: "Configure webhooks for predictive maintenance triggers." },
        Schemas: { title: "Database schemas", text: "Table structures and indexing strategies for high-volume writes." }
    };

    return (
        <main className="docs-page-container">
        
        {/* SECTION 1: Hero */}
        <section className="docs-hero" style={{ backgroundImage: `url(${heroImg})` }}>
            <div className="hero-overlay"></div>
            <div className="docs-hero-content">
            <span className="section-tag-light">Docs</span>
            <h1>Developer docs and<br />API specs</h1>
            <p>Everything you need for IoT device management, payload optimization, and secure integrations. No login required to read any of it.</p>
            <div className="hero-actions">
                <button className="btn-solid" onClick={() => navigate('/sandbox')}>Sandbox</button>
                <button className="btn-outline-light">Contact</button>
            </div>
            </div>
        </section>

        {/* SECTION 2: Deep Developer Content */}
        <section className="docs-split-section">
            <div className="split-header">
            <span className="section-tag">Navigation</span>
            <h2>Deep developer content<br />without the walls</h2>
            <p>The sidebar gives you the full structure. Every spec, every schema, every database note is open and readable.</p>
            <div className="split-actions">
                <button className="btn-outline-dark">Explore</button>
                {/* <button className="btn-text">View &gt;</button> */}
            </div>
            </div>
            
            <div className="split-grid">
            <div className="split-text-col">
                <div className="feature-block">
                <h3>API specs</h3>
                <p>Endpoints for device registration, payload ingestion, and status queries. All documented with request and response examples.</p>
                </div>
                <div className="feature-block">
                <h3>Schema configs</h3>
                <p>Table structures and field types for sensor data, alerts, and device metadata. Built for high-volume writes.</p>
                </div>
                <div className="feature-block">
                <h3>DB management</h3>
                <p>Indexing strategies, retention policies, and backup notes. You can see how the data stays fast and clean.</p>
                </div>
            </div>
            <div className="split-img-col">
                {/* Using systemArch1 as a placeholder for the workspace image */}
                <img src={systemArch1} alt="Developer Workspace" className="workspace-img" />
            </div>
            </div>
        </section>

        {/* SECTION 3: Interactive Tabs */}
        <section className="docs-tabs-section">
            <div className="tabs-header">
            <span className="section-tag">Payloads</span>
            <h2>API docs</h2>
            <p>Real JSON blocks, token authentication notes, and schema tables. No hidden sections, no login walls.</p>
            </div>

            <div className="tabs-container">
            <div className="tabs-nav">
                {Object.keys(tabContent).map((tab) => (
                <button 
                    key={tab} 
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
            <div className="tab-content-area">
                <div className="tab-text">
                <span className="tab-label">{activeTab}</span>
                <h3>{tabContent[activeTab].title}</h3>
                <p>{tabContent[activeTab].text}</p>
                <div className="tab-actions">
                    <button className="btn-outline-dark">Copy</button>
                    <button className="btn-text">Read &gt;</button>
                </div>
                </div>
                <div className="tab-image">
                {/* Image changes dynamically based on active tab. Using systemArch2 as standard mock */}
                <img src={systemArch2} alt={`${activeTab} code snippet`} className="code-snippet-img" />
                </div>
            </div>
            </div>
        </section>

        {/* SECTION 4: Sticky Scroll Architecture */}
        <section className="docs-sticky-section">
            <div className="sticky-layout">
            {/* Left Side: Constant/Sticky */}
            <div className="sticky-sidebar">
                <span className="section-tag">Architecture</span>
                <h2>Data flows without<br />friction</h2>
                <p>A clean flowchart shows the path from device to database to dashboard. Every connection is stateless and built for scale.</p>
                <div className="sticky-actions">
                <button className="btn-outline-dark">Code</button>
                <button className="btn-text-next">Next &gt;</button>
                </div>
            </div>
            
            {/* Right Side: Scrollable content */}
            <div className="scrollable-content">
                <div className="arch-item">
                <img src={systemArch1} alt="System Topology" />
                <h4>Overview</h4>
                <p>Device push batched payloads to the ingestion endpoint. If the connection drops, the buffer holds data until the link returns.</p>
                </div>
                <div className="arch-item">
                <img src={systemArch2} alt="Dashboard Ingestion" />
                <h4>Ingestion</h4>
                <p>Sensor data queues locally on the device during outages. Once connectivity resumes, the full batch transmits in order.</p>
                </div>
                <div className="arch-item">
                <img src={systemArch3} alt="Code Buffering" />
                <h4>Buffering</h4>
                <p>Each request carries its own authentication and context. The server validates and responds without holding session state.</p>
                </div>
                <div className="arch-item">
                <img src={systemArch4} alt="Map REST API" />
                <h4>REST API</h4>
                <p>The dashboard queries the same REST API used by devices. Metrics render in real-time with no middleware bloat.</p>
                </div>
            </div>
            </div>
        </section>

        {/* SECTION 5: Bottom CTA */}
        <section className="docs-cta-section">
            <h2>Build without the<br />bottlenecks<br />Test it now</h2>
            <p>Test the API in the live sandbox or request a custom build for your fleet.</p>
            <div className="cta-actions">
            <button className="btn-solid-dark" onClick={() => navigate('/sandbox')}>Sandbox</button>
            <button className="btn-outline-light" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Contact</button>
            </div>
        </section>

        </main>
    );
}