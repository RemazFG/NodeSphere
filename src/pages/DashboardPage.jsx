import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

export default function DashboardPage() {
    const navigate = useNavigate();
    
    // 1. State for the code panel
    const [payload, setPayload] = useState('{\n  "device_id": "nd-0043",\n  "device_type": "telemetry-sensor",\n  "status": "active",\n  "configuration": {\n    "interval_ms": 500,\n    "sensors": ["temp", "humidity", "vibration"]\n  }\n}');

    // 2. State for the Dashboard UI
    const [activeTab, setActiveTab] = useState('Interact state (1)');
    const [capacity, setCapacity] = useState(75);
    const [isReceiving, setIsReceiving] = useState(false);
    
    const [logs, setLogs] = useState([
        { id: 1, time: '15:33:23', event: 'Telemetry logging', status: 'Error', isError: true },
        { id: 2, time: '15:33:20', event: 'Telemetry logging', status: 'Active', isError: false },
        { id: 3, time: '15:33:19', event: 'Telemetry logging', status: 'Active', isError: false },
        { id: 4, time: '15:33:15', event: 'Telemetry logging', status: 'Error', isError: true }
    ]);

    // 3. The function that runs when you click "Send Test Payload"
    const handleSendPayload = () => {
        // Flash the map nodes
        setIsReceiving(true);
        setTimeout(() => setIsReceiving(false), 600);

        // Increase capacity bar (loop back to 40% if it gets too high)
        setCapacity(prev => (prev >= 95 ? 40 : prev + 8));

        // Add a new log to the top of the list
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: false });
        
        const newLog = {
        id: Date.now(),
        time: timeString,
        event: 'Payload received',
        status: 'Success',
        isError: false
        };

        setLogs(prevLogs => [newLog, ...prevLogs].slice(0, 5)); // Keep only the latest 5 logs
    };

    return (
        <main className="dashboard-page-container">
        
        {/* HERO SECTION */}
        <section className="dashboard-hero">
            <div className="dashboard-hero-content">
            <span className="section-tag-light" style={{ display: 'block', marginBottom: '1rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
                Live Environment
            </span>
            <h1>Interactive Fleet Management Console</h1>
            <p>Monitor live telemetry, test payload processing, and manage your device network in real time.</p>
            <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button className="btn-outline-light" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>
                Sandbox demo
                </button>
                <button className="btn-solid" onClick={() => navigate('/signup')}>
                Create your own dashboard
                </button>
            </div>
            </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <section className="dashboard-content-area">
            
            {/* Sandbox CTA Banner */}
            <div className="sandbox-cta-banner">
            <div className="cta-banner-text">
                <h3>Ready to connect your own fleet?</h3>
                <p>Create an account to deploy your custom dashboard, generate secure tokens, and manage everything from A-Z.</p>
            </div>
            <button className="btn-solid cta-banner-btn" onClick={() => navigate('/signup')}>
                Create Account
            </button>
            </div>

            {/* SPLIT VIEW: CODE PANEL & DASHBOARD */}
            <div className="sandbox-split-view">
            
            {/* Left: Code Editor Panel */}
            <div className="sandbox-panel code-panel">
                <div className="panel-top-bar">
                <span>payload.json</span>
                <button className="execute-btn" onClick={handleSendPayload}>
                    Send Test Payload
                </button>
                </div>
                <div className="code-editor">
                <pre style={{ margin: 0 }}><code>{payload}</code></pre>
                </div>
            </div>

            {/* Right: Advanced IoT Dashboard Panel */}
            <div className="sandbox-panel dashboard-panel">
                <div className="iot-dashboard-demo">
                
                <div className="iot-demo-header">
                    <div className="demo-header-left">
                    <span className="demo-icon">⎈</span>
                    <h3>IoT Control Dashboard</h3>
                    </div>
                    <div className="demo-header-right">
                    <div className="demo-avatar"></div>
                    </div>
                </div>

                <div className="iot-demo-tabs">
                    {['Interact state (1)', 'Interactive Rules (7)', 'Data Filters (2)'].map(tab => (
                    <button 
                        key={tab}
                        className={`demo-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                    ))}
                </div>

                <div className="iot-demo-grid">
                    
                    {/* Map Widget */}
                    <div className="demo-widget map-widget">
                    <div className="widget-header">
                        <h4>Interactive Map</h4>
                        <span className="status-badge">Active</span>
                    </div>
                    <div className="mock-map-area">
                        <div className={`map-node node-1 ${isReceiving ? 'receiving' : ''}`}></div>
                        <div className={`map-node node-2 ${isReceiving ? 'receiving' : ''}`}></div>
                        <div className={`map-node node-3 ${isReceiving ? 'receiving' : ''}`}></div>
                        <svg className="map-lines" width="100%" height="100%">
                        <path d="M 40 50 Q 80 20 120 70 T 200 90" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                        </svg>
                    </div>
                    </div>

                    {/* Server Capacity Widget */}
                    <div className="demo-widget capacity-widget">
                    <h4>Server Capacity</h4>
                    <div className="capacity-bar">
                        <div className="capacity-fill" style={{ width: `${capacity}%` }}></div>
                    </div>
                    <div className="capacity-stats">
                        <span>{capacity * 10} MB Used</span>
                        <span>1000 MB Total</span>
                    </div>
                    
                    <h4 style={{ marginTop: '1.5rem' }}>Active Network Bandwidth</h4>
                    <div className="mock-chart">
                        <div className="chart-bar" style={{ height: `${capacity - 10}%` }}></div>
                        <div className="chart-bar" style={{ height: '70%' }}></div>
                        <div className="chart-bar" style={{ height: '50%' }}></div>
                        <div className="chart-bar" style={{ height: `${capacity + 15}%` }}></div>
                        <div className="chart-bar" style={{ height: '60%' }}></div>
                        <div className="chart-bar" style={{ height: '30%' }}></div>
                    </div>
                    </div>

                    {/* Telemetry Logging Widget */}
                    <div className="demo-widget telemetry-widget">
                    <h4>Telemetry logging</h4>
                    <ul className="log-list">
                        {logs.map(log => (
                        <li key={log.id} className="log-item-enter">
                            <span className="log-time">{log.time}</span>
                            <span className="log-event">{log.event}</span>
                            <span className={`log-status ${log.isError ? 'error' : 'success'}`}>
                            {log.status}
                            </span>
                        </li>
                        ))}
                    </ul>
                    </div>

                </div>
                </div>
            </div>

            </div>
        </section>

        </main>
    );
}