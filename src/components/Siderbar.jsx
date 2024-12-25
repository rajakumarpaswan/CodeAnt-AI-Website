import { useState, useEffect } from "react"; // Importing React hooks for state and lifecycle management
import { Link, useLocation } from "react-router-dom"; // Importing Link for navigation and useLocation for accessing current path
import smallmasklogo from "../images/masklogo-2.png"; // Importing the logo image
import {
  IconBook2,
  IconChevronCompactDown,
  IconCloud,
  IconCode,
  IconHome,
  IconLogout,
  IconPhone,
  IconSettings,
} from "@tabler/icons-react"; // Importing icons from Tabler Icons
import "./Sidebar.css"; // Importing CSS for styling the Sidebar
import MobileNavbar from "./MobileNavbar"; // Importing a mobile navigation component

const Sidebar = () => {
  // State to store the username
  const [username, setUsername] = useState("");

  // State to store the list of navigation links
  const [navLinks, setNavLinks] = useState([]);

  // Hook to get the current location in the application
  const location = useLocation();

  // Fetch dynamic data for the user profile and navigation links
  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      const userResponse = await Promise.resolve({
        username: "rajakumarpaswan", // Simulated username from API
      });
      setUsername(userResponse.username); // Set the username in the state
    };

    // Simulate fetching navigation links
    const fetchNavLinks = async () => {
      const linksResponse = await Promise.resolve([
        { icon: <IconHome />, label: "Repositories", path: "/dashboard" }, // Navigation link for Repositories
        { icon: <IconCode />, label: "AI Code Review", path: "/" }, // Navigation link for AI Code Review
        { icon: <IconCloud />, label: "Cloud Security", path: "/cloud-security" }, // Navigation link for Cloud Security
        { icon: <IconBook2 />, label: "How to Use", path: "/how-to-use" }, // Navigation link for How to Use
        { icon: <IconSettings />, label: "Settings", path: "/settings" }, // Navigation link for Settings
      ]);
      setNavLinks(linksResponse); // Set the navigation links in the state
    };

    // Fetch the user data and navigation links on component mount
    fetchUserData();
    fetchNavLinks();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="sidebarNavlinks"> {/* Main container for the sidebar */}
      <div className="Userprofile"> {/* User profile section */}
        <div className="logo"> {/* Logo and app name */}
          <img src={smallmasklogo} alt="CodeAnt AI Logo" />
          <span>CodeAnt AI</span>
        </div>
        <div className="mobilenav"> {/* Mobile navigation section */}
          <MobileNavbar />
        </div>
        <div className="inputdeopdown"> {/* Username display and dropdown */}
          <input type="text" placeholder={username} readOnly /> {/* Username input is read-only */}
          <IconChevronCompactDown className="dropdownlogo" /> {/* Dropdown icon */}
        </div>
        <div className="sidebarLink-section"> {/* Navigation links section */}
          {navLinks.map((link, index) => ( // Loop through the navigation links
            <div
              className={`navigationlink ${
                location.pathname === link.path ? "active" : "" // Add 'active' class if current path matches link path
              }`}
              key={index} // Unique key for each link
            >
              <Link
                className={`no-underline ${
                  location.pathname === link.path ? "active" : "" // Add 'active' class to link if current path matches
                }`}
                to={link.path} // Link to the specified path
              >
                {link.icon} {link.label} {/* Display the icon and label for each link */}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="userlogout"> {/* User logout and support section */}
        <div className="supportAndLogout-Navigationlink">
          <IconPhone /> {/* Support icon */}
          <Link className="no-underline" to="/support">
            Support {/* Link to support page */}
          </Link>
        </div>
        <div className="supportAndLogout-Navigationlink">
          <IconLogout /> {/* Logout icon */}
          <Link className="no-underline" to="/logout">
            Logout {/* Link to logout page */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; // Export the Sidebar component for use in other parts of the application
