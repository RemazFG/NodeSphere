// src/components/Header.jsx
export default function Header() {
    return (
        <header className="app-header">
        <div className="logo">NodeSphere</div>
        <nav>
            <button className="nav-link">Dashboard</button>
            <button className="nav-link">Devices</button>
            <button className="nav-link">Settings</button>
        </nav>
        </header>
    );
}