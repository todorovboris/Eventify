import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext.js';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { username } = useContext(UserContext);

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
                        <li>
                            <Link to="/artists">Artists</Link>
                        </li>
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

// import { Link } from 'react-router';

// export default function Header() {
//     return (
//         <header>
//             <div className="header-container">
//                 <div className="logo">
//                     <Link to="/">
//                         <img src="/images/LogoTextBig.jpeg" alt="Eventify" />
//                         {/* <img src="/images/logo_img.jpg" alt="Eventify" className="logo_img" /> */}
//                         {/* <img src="/images/logo_text.jpg" alt="Eventify" className="logo_text" /> */}
//                     </Link>
//                 </div>
//                 <nav>
//                     <ul className="nav-links">
//                         <li>
//                             <Link to="/events">Events</Link>
//                         </li>
//                         <li>
//                             <Link to="/events">Artists</Link>
//                         </li>
//                         <li>
//                             <Link to="/search">Search</Link>
//                         </li>
//                         <li>
//                             <Link to="/profile">
//                                 <img className="profile-logo" src="/images/profile_logo2.png" alt="Profile" />
//                             </Link>
//                         </li>
//                     </ul>
//                     <ul className="nav-auth">
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/register">Register</Link>
//                         </li>
//                         <li>
//                             <Link to="/logout">Logout</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// }
