import React, { useState } from 'react';
import { Link } from 'react-router';
import { useUserContext } from '../../contexts/UserContext.js';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { username } = useUserContext();
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/LogoTextBig.jpeg" alt="Eventify" />
                    </Link>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        {/* <li>
                            <Link to="/artists">Artists</Link>
                        </li> */}
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                    <ul className="nav-auth">
                        <li className="profile-dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {/* <Link to="/profile"></Link> */}
                            <img className="profile-logo" src="/images/profile_logo2.png" alt="Profile" />
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    {username ? (
                                        <>
                                            <li>
                                                <Link to="/profile">{username}</Link>
                                            </li>
                                            <li>
                                                <Link to="/logout">Logout</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register">Register</Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
