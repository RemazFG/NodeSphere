// src/pages/CasesPage.jsx
import { useNavigate } from 'react-router-dom';
import './CasesPage.css';

// Asset placeholders (ensure these are added to your src/assets folder)
import CasesHero from '../assets/CasesHero.jpg'; 
import caseStudy_1 from '../assets/caseStudy_1.png'; 
import casesCTA from '../assets/casesCTA.jpg'; 
// Social media icons
import x from '../assets/footerIcons/x.png';
import linkedin from '../assets/footerIcons/linkedin.png';

export default function CasesPage() {
    const navigate = useNavigate();

    return (
        <main className="cases-page-container">
        
        {/* SECTION 1: Hero (Server Rack) */}
        <section className="cases-hero" style={{ backgroundImage: `url(${CasesHero})` }}>
            <div className="hero-overlay-dark"></div>
            <div className="cases-hero-content">
            <span className="section-tag-light">Proof</span>
            <h1>Client work</h1>
            <p>Real-world IoT implementations and the measurable outcomes they delivered for our clients</p>
            <div className="hero-actions">
                <button className="btn-solid" onClick={() => navigate('/sandbox')}>Sandbox</button>
                <button className="btn-outline-light">Contact</button>
            </div>
            </div>
        </section>

        {/* SECTION 2: Case Studies Grid */}
        <section className="cases-grid-section">
            <div className="grid-header">
            <h2>Case studies</h2>
            <p>Real deployments with hard numbers from the field</p>
            </div>
            
            <div className="cards-container">
            <div className="case-card">
                <div className="card-logo">Webflow</div>
                <p className="card-quote">"We went from blind to omniscient in one deployment."</p>
                <div className="card-author">
                <div className="author-avatar">E</div>
                <div className="author-info">
                    <strong>Elena Vasquez</strong>
                    <span>Lead Engineer, NodeSphere</span>
                </div>
                </div>
                {/* <button className="card-link">View all &gt;</button> */}
            </div>

            <div className="case-card">
                <div className="card-logo">Relume</div>
                <p className="card-quote">"The buffer never failed. The tokens never broke. The data always arrived."</p>
                <div className="card-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                    <strong>Marcus Chen</strong>
                    <span>Systems Architect, NodeSphere</span>
                </div>
                </div>
                {/* <button className="card-link">Read more &gt;</button> */}
            </div>

            <div className="case-card">
                <div className="card-logo">Webflow</div>
                <p className="card-quote">"The NodeSphere team understood our infrastructure better than we did."</p>
                <div className="card-author">
                <div className="author-avatar">P</div>
                <div className="author-info">
                    <strong>Priya Sharma</strong>
                    <span>Data Analyst, NodeSphere</span>
                </div>
                </div>
                {/* <button className="card-link">Read more &gt;</button> */}
            </div>
            </div>
        </section>

        {/* SECTION 3 & 4: Deep Dive Split (Sidebar + Content) */}
        <section className="deep-dive-section">
            <div className="deep-dive-layout">
            
            {/* Section 3: Sidebar */}
            <aside className="deep-dive-sidebar">
                <div className="sidebar-block">
                <h4>Contributors</h4>
                <div className="contributor-list">
                    <div className="card-author sidebar-author">
                    <div className="author-avatar">E</div>
                    <div className="author-info"><strong>Elena Vasquez</strong><span>Lead Engineer, NodeSphere</span></div>
                    </div>
                    <div className="card-author sidebar-author">
                    <div className="author-avatar">M</div>
                    <div className="author-info"><strong>Marcus Chen</strong><span>Systems Architect, NodeSphere</span></div>
                    </div>
                    <div className="card-author sidebar-author">
                    <div className="author-avatar">P</div>
                    <div className="author-info"><strong>Priya Sharma</strong><span>Data Analyst, NodeSphere</span></div>
                    </div>
                </div>
                </div>

                <div className="sidebar-block">
                <h4>Get updates</h4>
                <form className="subscribe-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit" className="btn-solid-dark full-width">Subscribe</button>
                </form>
                <p className="terms-text">By subscribing you agree to our Privacy Policy.</p>
                </div>

                <div className="sidebar-block">
                <h4>Share</h4>
                <div className="share-icons">
                    {/* <img src={linkIcon} alt="Copy Link" className="icon" /> */}
                    <span className="icon">🔗</span>
                    <img src={linkedin} alt="LinkedIn" className="icon" />
                    <img src={x} alt="X" className="icon" />
                </div>
                </div>
            </aside>

            {/* Section 4: Article Content */}
            <article className="deep-dive-content">
                <h2>Introduction</h2>
                <p>Before implementing NodeSphere, our enterprise client struggled with severe telemetry delays and data loss during peak operational hours. Their legacy infrastructure was not equipped to handle the massive, concurrent payloads generated by thousands of active field sensors, resulting in critical blind spots across their supply chain.</p>
                <p>By migrating to NodeSphere’s optimized buffering architecture, the company sought to achieve 99.9% uptime and completely eliminate payload drops. The engineering team needed a solution to monitor real-time node health and deploy instant firmware updates without the burden of managing complex backend servers.</p>
                
                <figure className="article-image">
                <img src={caseStudy_1} alt="Technical blueprint schematic" />
                <figcaption>Technical Data Center Floor Plan Schematic showing NodeSphere integration nodes.</figcaption>
                </figure>

                <p>Scaling a global IoT network shouldn't require rebuilding your entire backend infrastructure from scratch. With NodeSphere, we proved that a stateless, decentralized architecture is the definitive key to seamless growth.</p>
                <p>The integration process began with rolling out NodeSphere's edge tracking modules across the client's primary warehouses. By utilizing stateless REST calls and JWT validation, we secured device integrations from the very first handshake. This immediately reduced network strain and allowed the operations team to view live, color-coded asset maps without sync delays.</p>

                <blockquote className="article-quote">
                "NodeSphere completely transformed how we handle telemetry data. We reduced payload latency by 85% and achieved total network visibility without having to expand our engineering team."
                </blockquote>
                <h2>Conclusion</h2>
                <p>The transition to NodeSphere's ecosystem took mere weeks, rather than the months typically projected for a migration of this scale. By unifying their tracking, maintenance, and security protocols into one clean interface, the client eliminated the need for fragmented third-party monitoring tools.<br></br><br></br>

Today, field technicians and office engineers share the exact same live data pool. Whether viewing full control boards on a tablet or hardware status logs compressed for a mobile screen, the entire workforce remains perfectly synchronized.<br></br><br></br>

NodeSphere successfully demonstrated that high-efficiency device management can be achieved without compromising on security or speed. The network now processes over 2.4 TB of data monthly, maintaining a flawless 98.2% online rate.</p>
            </article>
            </div>
        </section>

        {/* SECTION 5: Bottom CTA (Global Map) */}
        <section className="cases-cta" style={{ backgroundImage: `url(${casesCTA})` }}>
            <div className="hero-overlay-dark"></div>
            <div className="cta-content">
            <h2>Build a custom management<br/>system</h2>
            <p>Your fleet deserves the same precision and power as the systems we build for our clients</p>
            <div className="hero-actions">
                <button className="btn-solid" onClick={() => navigate('/sandbox')}>Contact</button>
                <button className="btn-outline-light">Sandbox</button>
            </div>
            </div>
        </section>

        </main>
    );
}