// Importing necessary hooks and components from React, Mantine, and other libraries
import { useState, useEffect } from 'react'; // React hooks for managing state and lifecycle
import { useDisclosure } from '@mantine/hooks'; // Hook to handle opening and closing states
import { Drawer } from '@mantine/core'; // Drawer component from Mantine for sidebar functionality
import { Link } from 'react-router-dom'; // React Router's Link component for navigation
import { Burger } from '@mantine/core'; // Burger component for toggle button
import './MobileNavbar.css'; // CSS for styling the MobileNavbar component
import smallmasklogo from "../images/masklogo-2.png"; // Importing logo image

// Importing icons for navigation links
import {
    IconBook2,
    IconChevronCompactDown,
    IconCloud,
    IconCode,
    IconHome,
    IconLogout,
    IconPhone,
    IconSettings,
} from "@tabler/icons-react";

const MobileNavbar = () => {
    const [opened, { toggle }] = useDisclosure(); // State to manage whether the drawer is open or closed

    const [username, setUsername] = useState(""); // State to store the user's name
    const [navLinks, setNavLinks] = useState([]); // State to store the list of navigation links

    // Fetch dynamic data for user profile and navigation links
    useEffect(() => {
        // Simulate fetching user data
        const fetchUserData = async () => {
            const userResponse = await Promise.resolve({
                username: "rajakumarpaswan", // Mocked username data
            });
            setUsername(userResponse.username); // Set the fetched username
        };

        // Simulate fetching navigation links
        const fetchNavLinks = async () => {
            const linksResponse = await Promise.resolve([
                { icon: <IconHome />, label: "Repositories", path: "/" }, // Navigation link for "Repositories"
                { icon: <IconCode />, label: "AI Code Review", path: "/ai-code-review" }, // Link for "AI Code Review"
                { icon: <IconCloud />, label: "Cloud Security", path: "/cloud-security" }, // Link for "Cloud Security"
                { icon: <IconBook2 />, label: "How to Use", path: "/how-to-use" }, // Link for "How to Use"
                { icon: <IconSettings />, label: "Settings", path: "/settings" }, // Link for "Settings"
                { icon: <IconPhone />, label: "Support", path: "/Support" }, // Link for "Support"
                { icon: <IconLogout />, label: "Logout", path: "/Logout" }, // Link for "Logout"
            ]);
            setNavLinks(linksResponse); // Set the fetched navigation links
        };

        fetchUserData(); // Fetch the user data when the component mounts
        fetchNavLinks(); // Fetch the navigation links when the component mounts
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className='mobilenavbar'> {/* Main container for the mobile navbar */}
            {/* Drawer component for the sidebar */}
            <Drawer.Root 
                className='mainDivNav' 
                position='right' 
                size="100%" 
                opened={opened} 
                onClose={toggle}
            >
                <Drawer.Overlay backgroundOpacity={.2} /> {/* Overlay for the drawer */}
                <Drawer.Content className='mainDivNav'> {/* Content of the drawer */}
                    <Drawer.Header> {/* Header of the drawer */}
                        <Drawer.Title> {/* Title section with logo */}
                            <div className="logo">
                                <img src={smallmasklogo} alt="CodeAnt AI Logo" /> {/* Logo image */}
                                <span>CodeAnt AI</span> {/* Logo text */}
                            </div>
                        </Drawer.Title>
                        <Drawer.CloseButton size="lg" color="#181D27" /> {/* Close button for the drawer */}
                    </Drawer.Header>
                    <Drawer.Body> {/* Body of the drawer */}
                        <div className="inputdeopdown"> {/* Dropdown to display the username */}
                            <input type="text" placeholder={username} readOnly /> {/* Input displaying the username */}
                            <IconChevronCompactDown className="dropdownlogo" /> {/* Dropdown icon */}
                        </div>
                        <div className="sidebarLink-section"> {/* Section for navigation links */}
                            {navLinks.map((link, index) => ( // Loop through the navigation links
                                <div className="navigationlink" key={index}> {/* Each navigation link */}
                                    {link.icon} {/* Icon for the link */}
                                    <Link className="no-underline" to={link.path}> {/* Navigation link */}
                                        {link.label} {/* Label for the link */}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>

            {/* Burger button to toggle the drawer */}
            <Burger 
                className='burgernone' 
                opened={opened} 
                onClick={toggle} 
                aria-label="Toggle navigation" 
            />
        </div>
    );
};

export default MobileNavbar; // Export the MobileNavbar component
