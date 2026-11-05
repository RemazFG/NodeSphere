// src/pages/OverviewDashboard.jsx
import './OverviewDashboard.css';

export default function OverviewDashboard() {
    return (
        <div className="overview-container">
        
        {/* Top Metric Cards */}
        <div className="metrics-row">
            <div className="metric-card">
            <div className="metric-icon">📡</div>
            <div className="metric-data">
                <h3>1,284</h3>
                <p>Total Devices</p>
                <span className="trend positive">+24 this month</span>
            </div>
            </div>
            <div className="metric-card">
            <div className="metric-icon green">✓</div>
            <div className="metric-data">
                <h3>98.2%</h3>
                <p>Online Rate</p>
                <span className="trend positive">↑ 0.3% vs last week</span>
            </div>
            </div>
            <div className="metric-card">
            <div className="metric-icon red">⚠</div>
            <div className="metric-data">
                <h3>7</h3>
                <p>Active Alerts</p>
                <span className="trend negative">3 critical · 4 warnings</span>
            </div>
            </div>
            <div className="metric-card">
            <div className="metric-icon blue">📈</div>
            <div className="metric-data">
                <h3>2.4 TB</h3>
                <p>Data Volume</p>
                <span className="trend positive">↑ 12% this month</span>
            </div>
            </div>
        </div>

        {/* Middle Grid */}
        <div className="middle-grid">
            
            <div className="dashboard-card chart-card">
            <h4>Device Activity — Last 7 Days</h4>
            <div className="mock-bar-chart">
                {/* Simple CSS bars for prototype */}
                <div className="bar-wrapper"><div className="bar" style={{height: '40%'}}></div><span>Mon</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '30%'}}></div><span>Tue</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '50%'}}></div><span>Wed</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '45%'}}></div><span>Thu</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '48%'}}></div><span>Fri</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '60%'}}></div><span>Sat</span></div>
                <div className="bar-wrapper"><div className="bar active-day" style={{height: '80%'}}></div><span>Sun</span></div>
            </div>
            </div>

            <div className="dashboard-card status-card">
            <h4>Device Status</h4>
            <div className="donut-chart-container">
                <div className="donut-chart">
                <span>98.2%<br/><small>Uptime</small></span>
                </div>
            </div>
            <ul className="status-legend">
                <li><span className="dot green"></span> Online <strong>1,260</strong></li>
                <li><span className="dot orange"></span> Warning <strong>18</strong></li>
                <li><span className="dot red"></span> Offline <strong>6</strong></li>
            </ul>
            </div>

            <div className="dashboard-card alerts-card">
            <div className="card-header-flex">
                <h4>Recent Alerts</h4>
                <a href="#">View all →</a>
            </div>
            <ul className="recent-alerts-list">
                <li>
                <span className="badge crit">CRIT</span>
                <div className="alert-info"><strong>Gateway offline</strong><span>iot-gw-001</span></div>
                <span className="alert-time">2m ago</span>
                </li>
                <li>
                <span className="badge warn">WARN</span>
                <div className="alert-info"><strong>CPU {'>'} 90%</strong><span>edge-018</span></div>
                <span className="alert-time">8m ago</span>
                </li>
                <li>
                <span className="badge warn">WARN</span>
                <div className="alert-info"><strong>Memory high</strong><span>hub-042</span></div>
                <span className="alert-time">15m ago</span>
                </li>
                <li>
                <span className="badge info">INFO</span>
                <div className="alert-info"><strong>Firmware update</strong><span>ctrl-009</span></div>
                <span className="alert-time">1h ago</span>
                </li>
            </ul>
            </div>

        </div>

        {/* Bottom Grid */}
        <div className="bottom-grid">
            <div className="dashboard-card table-card">
            <h4>Active Devices</h4>
            <table className="devices-table">
                <thead>
                <tr>
                    <th>Device Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Last Seen</th>
                    <th>Signal</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><strong>iot-gateway-001</strong></td>
                    <td>Gateway</td>
                    <td>Building A</td>
                    <td><span className="dot green"></span> Online</td>
                    <td>just now</td>
                    <td><strong>98%</strong></td>
                </tr>
                <tr>
                    <td><strong>sensor-hub-042</strong></td>
                    <td>Hub</td>
                    <td>Floor 3</td>
                    <td><span className="dot green"></span> Online</td>
                    <td>2s ago</td>
                    <td><strong>92%</strong></td>
                </tr>
                <tr>
                    <td><strong>edge-unit-018</strong></td>
                    <td>Edge</td>
                    <td>Warehouse</td>
                    <td><span className="dot orange"></span> Warning</td>
                    <td>8s ago</td>
                    <td><strong>67%</strong></td>
                </tr>
                <tr>
                    <td><strong>field-ctrl-009</strong></td>
                    <td>Controller</td>
                    <td>Zone B</td>
                    <td><span className="dot green"></span> Online</td>
                    <td>12s ago</td>
                    <td><strong>85%</strong></td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className="dashboard-card health-card">
            <h4>System Health</h4>
            <div className="health-bar-item">
                <div className="health-bar-labels"><span>API Response</span><strong>142ms</strong></div>
                <div className="bar-bg"><div className="bar-fill green" style={{width: '20%'}}></div></div>
            </div>
            <div className="health-bar-item">
                <div className="health-bar-labels"><span>Message Queue</span><strong>1,240/s</strong></div>
                <div className="bar-bg"><div className="bar-fill blue" style={{width: '60%'}}></div></div>
            </div>
            <div className="health-bar-item">
                <div className="health-bar-labels"><span>Storage Used</span><strong>68%</strong></div>
                <div className="bar-bg"><div className="bar-fill orange" style={{width: '68%'}}></div></div>
            </div>
            <div className="health-bar-item">
                <div className="health-bar-labels"><span>CPU Load</span><strong>34%</strong></div>
                <div className="bar-bg"><div className="bar-fill green" style={{width: '34%'}}></div></div>
            </div>
            </div>
        </div>

        </div>
    );
}