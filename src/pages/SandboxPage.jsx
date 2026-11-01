// src/pages/SandboxPage.jsx
import { useState } from 'react';
import './SandboxPage.css';

export default function SandboxPage() {
    const [systemStatus, setSystemStatus] = useState("IDLE");
    const [temperature, setTemperature] = useState(42.5);
    const [logs, setLogs] = useState([
        { id: 1, time: "2026-11-01 15:33:33", action: "Telemetry logging", status: "Error", type: "error" },
        { id: 2, time: "2026-11-01 14:58:35", action: "Telemetry logging", status: "6 hours ago", type: "info" },
        { id: 3, time: "2026-11-01 13:33:10", action: "Telemetry logging", status: "6 hours ago", type: "info" },
    ]);

    const simulatePayload = () => {
        setSystemStatus("TRANSMITTING...");
        
        setTimeout(() => {
        setSystemStatus("SYNCED");
        setTemperature(prev => +(prev + (Math.random() * 2 - 0.5)).toFixed(1));
        
        // Add a new successful log to the table
        const newLog = {
            id: Date.now(),
            time: new Date().toISOString().replace('T', ' ').substring(0, 19),
            action: "Payload received",
            status: "Success",
            type: "success"
        };
        setLogs(prev => [newLog, ...prev].slice(0, 5)); // Keep latest 5 logs
        
        // Reset status after a delay
        setTimeout(() => setSystemStatus("IDLE"), 2000);
        }, 600);
    };

    return (
        <main className="sandbox-page-container">
        <div className="sandbox-header">
            <h1>Interactive Telemetry Sandbox</h1>
            <p>Test stateless REST calls and watch the control dashboard react in real-time.</p>
        </div>

        <div className="sandbox-split-view">
            {/* Left Panel: The Developer Code Sandbox */}
            <div className="sandbox-panel code-panel">
            <div className="panel-top-bar">
                <span>POST /api/v1/telemetry</span>
                <button className="execute-btn" onClick={simulatePayload}>
                Send Test Payload
                </button>
            </div>
            <div className="code-editor">
    <pre><code>{`{
    "device_id": "NS-8472",
    "timestamp": "${new Date().toISOString()}",
    "metrics": {
        "temperature_c": ${temperature},
        "status": "nominal"
    }
    }`}</code></pre>
            </div>
            </div>

            {/* Right Panel: Advanced IoT Control Dashboard */}
            <div className="sandbox-panel advanced-dashboard-panel">
            
            {/* Dashboard Header Filters */}
            <div className="adv-dash-header">
                <h3>IoT Control Dashboard</h3>
                <div className="dash-filters">
                <span className="dash-pill">Interact ware (1)</span>
                <span className="dash-pill">Interactive Staios (2)</span>
                <span className="dash-pill">Data Filters (2)</span>
                <span className="dash-pill">Network Base (2)</span>
                </div>
            </div>

            <div className="adv-dash-grid">
                {/* Column 1: Map and Sliders */}
                <div className="dash-col dash-col-left">
                <div className="dash-widget map-widget">
                    <div className="widget-head">
                    <h4>Interactive Map</h4>
                    <span className="text-muted">GPS: Node-Root-20</span>
                    </div>
                    <div className="map-mockup">
                    {/* Mock SVG Map Nodes */}
                    <svg width="100%" height="150" viewBox="0 0 300 150">
                        <polyline points="50,50 150,80 220,40" fill="none" stroke="#2a6f97" strokeWidth="2" strokeDasharray="4" />
                        <polyline points="150,80 120,120 200,130" fill="none" stroke="#2a6f97" strokeWidth="2" strokeDasharray="4" />
                        <circle cx="50" cy="50" r="6" fill="#4ade80" />
                        <circle cx="150" cy="80" r="8" fill={systemStatus === 'TRANSMITTING...' ? '#f87171' : '#facc15'} />
                        <circle cx="220" cy="40" r="6" fill="#38bdf8" />
                        <circle cx="120" cy="120" r="6" fill="#4ade80" />
                        <circle cx="200" cy="130" r="6" fill="#f87171" />
                    </svg>
                    </div>
                </div>
                
                <div className="dash-widget slider-widget">
                    <h4>Interactive Node Controller</h4>
                    <div className="slider-group">
                    <div className="slider-label"><span>Node Controller</span> <span>20%</span></div>
                    <div className="slider-track"><div className="slider-fill" style={{width: '20%'}}></div></div>
                    </div>
                    <div className="slider-group">
                    <div className="slider-label"><span>System Drive</span> <span>50%</span></div>
                    <div className="slider-track"><div className="slider-fill" style={{width: '50%'}}></div></div>
                    </div>
                </div>
                </div>

                {/* Column 2: Charts and Logs */}
                <div className="dash-col dash-col-center">
                <div className="dash-widget metrics-row">
                    <div className="metric-box">
                    <h4>Server Capacity</h4>
                    <div className="gauge-mock">
                        <div className="gauge-text">
                        <span className="value">3.09</span>
                        <span className="unit">MGB</span>
                        </div>
                    </div>
                    </div>
                    <div className="metric-box">
                    <h4>Active Network Bandwidth</h4>
                    <div className="line-chart-mock">
                        <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <polyline points="0,50 40,45 80,55 120,20 160,35 200,10" fill="none" stroke="#4ade80" strokeWidth="2" />
                        <polyline points="0,55 40,50 80,40 120,45 160,20 200,30" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.5" />
                        </svg>
                    </div>
                    </div>
                </div>

                <div className="dash-widget table-widget">
                    <div className="widget-head">
                    <h4>Telemetry logging</h4>
                    <span className="dots">⋮</span>
                    </div>
                    <table className="telemetry-table">
                    <thead>
                        <tr>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                        <tr key={log.id} className={log.id === logs[0].id && systemStatus === 'SYNCED' ? 'highlight-row' : ''}>
                            <td>{log.time}</td>
                            <td>{log.action}</td>
                            <td className={`status-${log.type}`}>
                            {log.type === 'error' && '● '} {log.status}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

                {/* Column 3: Device Integrations */}
                <div className="dash-col dash-col-right">
                <div className="dash-widget list-widget">
                    <h4>Device Integrations</h4>
                    <div className="device-list">
                    
                    <div className="device-item">
                        <div className="device-info">
                        <span className="device-icon">💻</span>
                        <div className="device-text">
                            <span className="device-name">Mictised</span>
                            <span className="device-mac">120.91:35:45:39</span>
                        </div>
                        </div>
                        <span className="badge badge-active">Active</span>
                    </div>

                    <div className="device-item">
                        <div className="device-info">
                        <span className="device-icon">💻</span>
                        <div className="device-text">
                            <span className="device-name">Incbeted</span>
                            <span className="device-mac">203:48:50:04:48</span>
                        </div>
                        </div>
                        <span className="badge badge-active">Active</span>
                    </div>

                    <div className="device-item">
                        <div className="device-info">
                        <span className="device-icon">📱</span>
                        <div className="device-text">
                            <span className="device-name">Disvected</span>
                            <span className="device-mac">232:23:28:68:43</span>
                        </div>
                        </div>
                        <span className="badge badge-inactive">Inactive</span>
                    </div>

                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
        </main>
    );
}