import  { useState, useEffect } from 'react';
import { IconArrowUp, IconPlus } from '@tabler/icons-react'; // Importing icons for UI
import smallmasklogo from '../images/masklogo-2.png'; // Importing the logo image
import issuefixed from '../images/issuefixed.png'; // Importing an image for the bar chart
import './SignInCard.css'; // Importing CSS for styling the component

const SignInCard = () => {
  // State to hold dynamic data fetched from an API or backend
  const [data, setData] = useState({
    languageSupport: 0, // Number of supported programming languages
    developers: 0, // Number of developers using the platform
    hoursSaved: 0, // Total hours saved using the platform
    issuesFixed: 0, // Total issues fixed
    weeklyGrowth: 0, // Percentage growth in the current week
  });

  // Fetch data dynamically from an API or backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Simulated API response for demonstration purposes
      const response = await Promise.resolve({
        languageSupport: 30, // Simulating support for 30 languages
        developers: 10000, // Simulating 10,000 developers
        hoursSaved: 100000, // Simulating 100,000 hours saved
        issuesFixed: 500000, // Simulating 500,000 issues fixed
        weeklyGrowth: 14, // Simulating a 14% weekly growth
      });
      setData(response); // Update state with the fetched data
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="signinCard-section">
      {/* Section for the AI detection card */}
      <div className="aiToDetectCard">
        <div className="imageAndText">
          {/* Displaying the logo and tagline */}
          <img src={smallmasklogo} alt="AI Logo" />
          <p>AI to Detect & Autofix Bad Code</p>
        </div>

        {/* Dynamic data section displaying various stats */}
        <div className="data-section">
          <div className="languageSupport">
            {/* Display number of supported languages dynamically */}
            <span>
              {data.languageSupport}
              <IconPlus size={13} stroke={4} /> {/* Plus icon for styling */}
            </span>
            <h4>Language Support</h4>
          </div>
          <div className="developers">
            {/* Display number of developers dynamically with formatted numbers */}
            <span>
              {data.developers.toLocaleString()} {/* Converts number to readable format */}
              <IconPlus size={13} stroke={4} />
            </span>
            <h4>Developers</h4>
          </div>
          <div className="hoursSaved">
            {/* Display total hours saved dynamically */}
            <span>
              {data.hoursSaved.toLocaleString()}
              <IconPlus size={13} stroke={4} />
            </span>
            <h4>Hours Saved</h4>
          </div>
        </div>
      </div>

      {/* Section for the issues fixed card */}
      <div className="issuesFixed-card">
        <div className="barChartAndWeek-section">
          {/* Displaying bar chart image */}
          <img src={issuefixed} alt="Issues Fixed Chart" />
          <div className="weekly-Update">
            {/* Display weekly growth percentage dynamically */}
            <span>
              <IconArrowUp size={15} stroke={3} /> {/* Upward arrow icon for growth */}
              {data.weeklyGrowth}%
            </span>
            <p>This week</p> {/* Description of the stat */}
          </div>
        </div>
        <div className="issue-Fixed-section">
          {/* Display total issues fixed dynamically */}
          <p>Issues Fixed</p>
          <span>
            {data.issuesFixed.toLocaleString()} {/* Converts number to readable format */}
            <IconPlus /> {/* Plus icon for styling */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
