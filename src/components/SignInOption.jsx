import { useState } from 'react'; // Importing useState hook for managing state
import smallmasklogo from '../images/masklogo-2.png'; // Importing the logo image
import { IconBrandGithub, IconBrandBitbucketFilled, IconKey } from '@tabler/icons-react'; // Importing icons from Tabler Icons
import icon from '../images/icon.png'; // Importing custom icon for Azure DevOps
import icon1 from '../images/icon1.png'; // Importing custom icon for GitLab

import './SignInoption.css'; // Importing CSS for styling

// Array of sign-in options for SAAS
const signInOptions = [
  {
    id: 1, // Unique identifier for the option
    label: 'Sign in with Github', // Text label for the option
    icon: <IconBrandGithub className="githubbgcolor" />, // Icon to represent the option
    className: 'githublink', // CSS class for styling
  },
  {
    id: 2,
    label: 'Sign in with Bitbucket',
    icon: <IconBrandBitbucketFilled className="bitbuketcolor" />,
    className: 'githublink',
  },
  {
    id: 3,
    label: 'Sign in with Azure Devops',
    icon: <img src={icon} alt="Azure Devops" />, // Custom image icon for Azure DevOps
    className: 'githublink',
  },
  {
    id: 4,
    label: 'Sign in with GitLab',
    icon: <img src={icon1} alt="Azure Devops" />, // Custom image icon for GitLab
    className: 'githublink',
  },
];

// Array of sign-in options for Self Hosted
const selfHostedOptions = [
  {
    id: 1,
    label: 'Sign in with SSO',
    icon: <IconKey />, // Key icon for SSO
    className: 'self-hosted-link',
  },
  {
    id: 2,
    label: 'Self Hosted GitLab',
    icon: <img src={icon1} alt="Azure Devops" />,
    className: 'self-hosted-link',
  },
];

const SignInOption = () => {
  // State to manage which section (SAAS or Self Hosted) is active
  const [activeSection, setActiveSection] = useState('saas'); // Default active section is 'saas'

  return (
    <div className="signInoption-page">
      {/* Main container for sign-in options */}
      <div className="signInAndWelcome-Section">
        {/* Header section with logo and welcome message */}
        <div className="codeant-AI-content">
          <div className="codeAi-Ant-section">
            <img src={smallmasklogo} alt="Logo" /> {/* Logo for CodeAnt AI */}
            <span>
              <p>CodeAnt AI</p>
            </span>
          </div>
          <p>Welcome to CodeAnt AI</p> {/* Welcome message */}
          {/* Buttons to toggle between SAAS and Self Hosted options */}
          <div className="Choice-option-btns">
            <button
              className={`saas-option ${activeSection === 'saas' ? 'active' : ''}`} // Highlight active button
              onClick={() => setActiveSection('saas')} // Set active section to 'saas'
            >
              SAAS
            </button>
            <button
              className={`self-hosted ${activeSection === 'selfhosted' ? 'active' : ''}`} // Highlight active button
              onClick={() => setActiveSection('selfhosted')} // Set active section to 'selfhosted'
            >
              Self Hosted
            </button>
          </div>
        </div>
        {/* Display sign-in options based on the active section */}
        <div className="signInLinks">
          {activeSection === 'saas' &&
            signInOptions.map((option) => (
              <div key={option.id} className={option.className}>
                {option.icon} {/* Icon for the sign-in option */}
                <span>{option.label}</span> {/* Label for the sign-in option */}
              </div>
            ))}
          <div className="selfhosted-signInlinks">
            {activeSection === 'selfhosted' &&
              selfHostedOptions.map((option) => (
                <div key={option.id} className={option.className}>
                  {option.icon} {/* Icon for the self-hosted option */}
                  <span>{option.label}</span> {/* Label for the self-hosted option */}
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Footer section with Privacy Policy */}
      <div className="privacyAndPolicy">
        By signing up you agree to the Privacy Policy. {/* Privacy Policy agreement */}
      </div>
    </div>
  );
};

export default SignInOption; // Exporting the component for use in other parts of the application
