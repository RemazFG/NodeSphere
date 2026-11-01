import dashboardIcon from '../assets/dashboard-icon.jpg';
import maintenanceIcon from '../assets/maintenance-icon.jpg';
import trackingIcon from '../assets/tracking-icon.jpg';

export default function MainPage() {
    return (
        <main className="main-content">
        {/* 1. Hero banner: Gradient Dark / Blue / White */}
        <section className="hero-section">
            <h1>IoT, high-efficiency device management</h1>
            <p>Handle high payloads and offline buffering without a massive engineering team. Deploy fast, and keep every node in view.</p>
            <button className="primary-action">View Network Topology</button>
        </section>

        {/* 2. Section 2: White background with Dual-tone Blue & Navy cards */}
        <section className="built-for-scale-section">
            <div className="section-header">
            <span className="section-tag">Core</span>
            <h2>Built for scale</h2>
            <p>Three systems. One clean view of every device.</p>
            </div>

            <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card">
                <img src={dashboardIcon} alt="Asset Tracking" className="card-icon" />
                <h3>Asset tracking that never loses the thread</h3>
                <p>Live GPS nodes, color-coded maps, and a feed that shows movement as it happens.</p>
                <button className="learn-more-btn">
                View <span style={{ fontSize: '1.1rem' }}>›</span>
                </button>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
                <img src={maintenanceIcon} alt="Predictive Maintenance" className="card-icon" />
                <h3>Predictive maintenance logging without the guesswork</h3>
                <p>Sensor logs and alert thresholds that flag a failing pump before it quits.</p>
                <button className="learn-more-btn">
                View <span style={{ fontSize: '1.1rem' }}>›</span>
                </button>
            </div>

            {/* Card 3 */}
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
        </main>
    );
}