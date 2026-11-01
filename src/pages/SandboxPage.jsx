// src/pages/SandboxPage.jsx
import { useState } from 'react';

export default function SandboxPage() {
    const [systemStatus, setSystemStatus] = useState("IDLE");
    const [temperature, setTemperature] = useState(42.5);
    const [activeNodes, setActiveNodes] = useState(1024);

    const simulatePayload = () => {
        setSystemStatus("TRANSMITTING...");
        
        // Simulate network delay
        setTimeout(() => {
        setSystemStatus("SYNCED");
        setTemperature(prev => +(prev + (Math.random() * 2 - 0.5)).toFixed(1));
        setActiveNodes(prev => prev + Math.floor(Math.random() * 3));
        }, 600);
    };

    return (
        <main className="sandbox-page-container">
        <div className="sandbox-header">
            <h1>Interactive Telemetry Sandbox</h1>
            <p>Test stateless REST calls and watch the dashboard react in real-time.</p>
        </div>

        <div className="sandbox-split-view">
            {/* Left Panel: The Developer Sandbox */}
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

            {/* Right Panel: The Dashboard Demo */}
            <div className="sandbox-panel dashboard-panel">
            <div className="dashboard-grid">
                <div className="dash-card">
                <h4>System Status</h4>
                <div className={`status-indicator ${systemStatus === 'SYNCED' ? 'text-green' : 'text-blue'}`}>
                    {systemStatus}
                </div>
                </div>
                
                <div className="dash-card">
                <h4>Core Temp</h4>
                <div className="metric-value">{temperature}°C</div>
                </div>
                
                <div className="dash-card">
                <h4>Active Nodes</h4>
                <div className="metric-value">{activeNodes}</div>
                </div>

                <div className="dash-card full-width">
                <h4>Live Network Feed</h4>
                <div className="feed-log">
                    <p>➔ [NS-102] Handshake verified.</p>
                    <p>➔ [NS-405] Battery optimization active.</p>
                    {systemStatus === 'SYNCED' && (
                    <p className="text-green">➔ [NS-8472] Payload received successfully.</p>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    );
}