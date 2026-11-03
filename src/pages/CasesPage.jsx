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
                <button className="card-link">View all &gt;</button>
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
                <button className="card-link">Read more &gt;</button>
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
                <button className="card-link">Read more &gt;</button>
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
                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet.</p>
                
                <figure className="article-image">
                <img src={caseStudy_1} alt="Technical blueprint schematic" />
                <figcaption>Technical Data Center Floor Plan Schematic</figcaption>
                </figure>

                <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.</p>

                <blockquote className="article-quote">
                "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
                </blockquote>

                <h2>Conclusion</h2>
                <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
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