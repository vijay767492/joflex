import React from 'react';
// import './sidebar.css'; // Assuming you have a CSS file for styling

const sidebarItems = [
    { name: "Home", icon: "🏠", link: "#home" },
    { name: "Popular Movies", icon: "🔥", link: "#popular-movies" },
    { name: "Genres", icon: "🎬", link: "#genres" },
    { name: "New Releases", icon: "🆕", link: "#new-releases" },
    { name: "Favorites", icon: "❤️", link: "#favorites" },
    { name: "Profile", icon: "👤", link: "#profile" },
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>MovieFlix</h3>
            </div>
            <ul className="sidebar-menu">
                {sidebarItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <a href={item.link}>
                            <span className="icon">{item.icon}</span>
                            <span className="menu-text">{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
