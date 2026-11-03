// src/pages/MainPage.jsx
import dashboardIcon from '../assets/dashboard-icon.jpg';
import trackingIcon from '../assets/tracking-icon.jpg';
import maintenanceIcon from '../assets/maintenance-icon.jpg';
import phoneView from '../assets/phoneView.jpg'; 
import fullLogo from '../assets/fullLogo.png'; 
import './MainPage.css';

export default function MainPage() {
    return (
        <main className="main-content">
        {/* 1. Hero banner */}
        <section className="hero-section" style={{ backgroundImage: `url(${maintenanceIcon})` }}>
            <div className="hero-overlay-dark"></div>
            <div className="hero-content">
                <h1>IoT, high-efficiency device management</h1>
                <p>Handle high payloads and offline buffering without a massive engineering team. Deploy fast, and keep every node in view.</p>
                <button className="primary-action">View Network Topology</button>
            </div>
        </section>

        {/* 2. Built for Scale */}
        <section className="built-for-scale-section">
            <div className="section-header">
            <span className="section-tag">Core</span>
            <h2>Built for scale</h2>
            <p>Three systems. One clean view of every device.</p>
            </div>

            <div className="features-grid">
            <div className="feature-card">
                <img src={dashboardIcon} alt="Asset Tracking" className="card-icon" />
                <h3>Asset tracking that never loses the thread</h3>
                <p>Live GPS nodes, color-coded maps, and a feed that shows movement as it happens.</p>
                <button className="learn-more-btn">
                View <span style={{ fontSize: '1.1rem' }}>›</span>
                </button>
            </div>
            <div className="feature-card">
                <img src={maintenanceIcon} alt="Predictive Maintenance" className="card-icon" />
                <h3>Predictive maintenance logging without the guesswork</h3>
                <p>Sensor logs and alert thresholds that flag a failing pump before it quits.</p>
                <button className="learn-more-btn">
                View <span style={{ fontSize: '1.1rem' }}>›</span>
                </button>
            </div>
            <div className="feature-card">
                <img src={trackingIcon} alt="Secure Integration" className="card-icon" />
                <h3>Secure device integrations from the first handshake</h3>
                <p>JWT validation and stateless REST calls keep every connection clean and verified.</p>
                <button className="learn-more-btn">
                View <span style={{ fontSize: '1.1rem' }}>›</span>
                </button>
            </div>
            </div>
        </section>

        {/* 3. Field Dashboard (Section 3) */}
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

        {/* 4. About NodeSphere (Section 4) */}
        <section className="about-section">
            <div className="about-content">
            <span className="section-tag">Tagline</span>
            <h2>About NodeSphere</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.            </p>
            <p>
                Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.            </p>
            </div>
            <div className="about-image-container">
            <img src={fullLogo} alt="NodeSphere Logo" className="about-logo" />
            </div>
        </section>

        {/* 5. Contact Us (Section 5) */}
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