// src/pages/MainPage.jsx
import dashboardIcon from '../assets/dashboard-icon.jpg';
import trackingIcon from '../assets/tracking-icon.jpg';
import maintenanceIcon from '../assets/maintenance-icon.jpg';
import phoneView from '../assets/phoneView.jpg'; 
import fullLogo from '../assets/fullLogo.png'; 
import './MainPage.css';

import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <main className="main-page-container">
        
            {/* =========================================
                SECTION 1: HERO
            ========================================= */}
            <section className="main-hero" style={{ backgroundImage: `url(${maintenanceIcon})` }}>
                <div className="hero-overlay-gradient"></div>
                <div className="main-hero-content">
                    <h1>IoT, high-<br/>efficiency device<br/>management</h1>
                    <p>Handle high payloads and offline buffering without a massive engineering team. Deploy fast and keep every node in view.</p>
                    
                    <div className="hero-button-group">
                        <button 
                            className="btn-solid" 
                            onClick={() => navigate('/sandbox')}
                        >
                            Sandbox
                        </button>
                        <button className="btn-outline-expert">
                            Contact to an Expert
                        </button>
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 2: BUILT FOR SCALE
            ========================================= */}
            <section className="scale-section">
                <div className="scale-header">
                    <span className="scale-tag">Core</span>
                    <h2>Built for scale</h2>
                    <p>Three systems. One clean view of every device.</p>
                </div>

                <div className="scale-grid">
                    
                    {/* Column 1 */}
                    <div className="scale-card">
                        <img src={trackingIcon} alt="Asset tracking dashboard" />
                        <span className="card-tag">Tracking</span>
                        <h3>Asset tracking that never loses the thread</h3>
                        <p>Live GPS nodes, color-coded maps, and a feed that shows movement as it happens.</p>
                        <a href="#" className="view-link">View &gt;</a>
                    </div>

                    {/* Column 2 (Staggered) */}
                    <div className="scale-card stagger-1">
                        <img src={maintenanceIcon} alt="Field technician doing maintenance" />
                        <span className="card-tag">Maintenance</span>
                        <h3>Predictive maintenance logging without the guesswork</h3>
                        <p>Sensor logs and alert thresholds that flag a failing pump before it quits.</p>
                        <a href="#" className="view-link">View &gt;</a>
                    </div>

                    {/* Column 3 (Staggered further) */}
                    <div className="scale-card stagger-2">
                        <img src={dashboardIcon} alt="Global security network nodes" />
                        <span className="card-tag">Security</span>
                        <h3>Secure device integrations from the first handshake</h3>
                        <p>JWT validation and stateless REST calls keep every connection clean and verified.</p>
                        <a href="#" className="view-link">View &gt;</a>
                    </div>

                </div>
            </section>

            {/* =========================================
                SECTION 3: FIELD DASHBOARD
            ========================================= */}
            <section className="field-section">
                <div className="field-content">
                    <span className="section-tag">Field</span>
                    <h2>One dashboard for the office and the truck</h2>
                    <p className="field-subtitle">
                        Field technicians see the same live data on a phone that an engineer sees on a tablet. No sync delays. No separate logins.
                    </p>
                    
                    <div className="field-features-split">
                        <div className="split-item">
                            <h3>Tablet view</h3>
                            <p>Full control boards with asset maps, capacity gauges, and streaming activity feeds for the desk.</p>
                        </div>
                        <div className="split-item">
                            <h3>Mobile view</h3>
                            <p>Hardware status and alert logs compressed into a single thumb-friendly column for the field.</p>
                        </div>
                    </div>
                    
                    <div className="field-actions">
                        <button className="btn-outline">Build</button>
                        <button className="btn-text">Sandbox &gt;</button>
                    </div>
                </div>
                <div className="field-image-container">
                    <img src={phoneView} alt="Tablet and mobile dashboard view" className="field-img" />
                </div>
            </section>

            {/* =========================================
                SECTION 4: ABOUT
            ========================================= */}
            <section className="about-section">
                <div className="about-content">
                    <span className="section-tag">Tagline</span>
                    <h2>About NodeSphere</h2>
                    <p>
                        NodeSphere is a comprehensive B2B web application designed to streamline IoT data and device management for industrial and enterprise ecosystems. The platform provides end-to-end visibility and real-time control over connected hardware through interactive, role-based dashboards tailored for Admins, Operations Managers, and Field Technicians. By centralizing system topologies—from edge sensors to cloud gateways—NodeSphere enables teams to monitor hardware status, manage assets, and track live data feeds efficiently across both tablet and mobile interfaces.                    </p>
                    <p>
                        Under the hood, the platform leverages a modern, modular architecture featuring a React and Vite frontend paired with a PHP and MySQL backend, all supported by containerized Docker environments. Beyond its core management capabilities, NodeSphere offers built-in sandbox testing and extensive API documentation to ensure seamless developer integration. This robust technical foundation is wrapped in a sleek, custom dark-mode interface utilizing a professional navy blue and dark grey palette to ensure clarity in complex data environments.                    </p>
                </div>
                <div className="about-image-container">
                    <img src={fullLogo} alt="NodeSphere Logo" className="about-logo" />
                </div>
            </section>

            {/* =========================================
                SECTION 5: CONTACT US
            ========================================= */}
            <section className="contact-section">
                <div className="contact-info">
                    <span className="section-tag" style={{color: '#fff'}}>Contact</span>
                    <h2>Contact us</h2>
                    <p>Tell us about your devices. We respond fast.</p>
                    
                    <div className="contact-details">
                        <a href="mailto:build@nodesphere.io">build@nodesphere.io</a>
                        <a href="tel:+15550000000">+1 (555) 000-0000</a>
                        <p>123 Sample St, Sydney NSW 2000 AU</p>
                    </div>
                </div>
                
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <input type="tel" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label>Choose a topic</label>
                            <select defaultValue="">
                                <option value="" disabled>Select one...</option>
                                <option value="sales">Sales</option>
                                <option value="support">Technical Support</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label>Which best describes you?</label>
                            <div className="radio-grid">
                                <label><input type="radio" name="role" value="hardware" /> Hardware</label>
                                <label><input type="radio" name="role" value="software" /> Software</label>
                                <label><input type="radio" name="role" value="operations" /> Operations</label>
                                <label><input type="radio" name="role" value="executive" /> Executive</label>
                                <label><input type="radio" name="role" value="consultant" /> Consultant</label>
                                <label><input type="radio" name="role" value="other" /> Other</label>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Type your message..." rows="5"></textarea>
                        </div>
                        
                        <div className="form-group checkbox-group">
                            <label>
                                <input type="checkbox" required /> I accept the Terms
                            </label>
                        </div>
                        
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}