import { useEffect, useState } from 'react'; // Importing React hooks for state and lifecycle management
import './Repository.css'; // Importing CSS for styling the Repository component
import {
  IconPointFilled,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconDatabase,
} from "@tabler/icons-react"; // Importing icons from Tabler Icons for UI enhancements

const Repository = () => {
  const [repositories, setRepositories] = useState([]); // State to store the list of repositories
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term input by the user

  // Fetch dummy data from an API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Placeholder API to simulate fetching repository data
      .then((response) => response.json()) // Parse the API response as JSON
      .then((data) => {
        // Transform the fetched data to mimic GitHub repository structure
        const transformedData = data.slice(0, 8).map((repo, index) => ({
          id: repo.id, // Unique identifier for the repository
          name: `Repository-${repo.id}`, // Repository name
          visibility: index % 2 === 0 ? 'Public' : 'Private', // Alternate between Public and Private visibility
          language: 'React', // Static programming language (for demonstration)
          size: `${Math.floor(Math.random() * 10000)} KB`, // Random repository size
          updated: `${Math.floor(Math.random() * 30)} days ago`, // Random last updated time
        }));
        setRepositories(transformedData); // Update the state with the transformed data
      })
      .catch((error) => console.error('Error fetching repositories:', error)); // Log any errors during the fetch
  }, []); // Empty dependency array ensures this effect runs only once

  // Filter repositories based on the user's search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  return (
    <div className="repository-content-section"> {/* Main container for the repository section */}
      <div className="repo-container"> {/* Container for the repository content */}
        <div className="repository-header-section"> {/* Header section for repositories */}
          <div className="respoInfoAndButtons"> {/* Section for repository info and buttons */}
            <div className="repoInformation"> {/* Display total number of repositories */}
              <span>Repositories</span>
              <p>{repositories.length} total repositories</p> {/* Display the total count of repositories */}
            </div>
            <div className="buttons"> {/* Buttons for refreshing and adding repositories */}
              <button
                className="refresh-button"
                onClick={() => window.location.reload()} // Reload the page to refresh repositories
              >
                <IconRefresh /> Refresh All
              </button>
              <button className="add-repo-button"> {/* Placeholder for adding a new repository */}
                <IconPlus /> Add Repository
              </button>
            </div>
          </div>
          <div className="search-repository"> {/* Search input field for filtering repositories */}
            <input
              type="text"
              placeholder="Search Repositories" // Placeholder text for the search bar
              value={searchTerm} // Controlled input bound to the searchTerm state
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
            />
            <IconSearch className="search-baricon" /> {/* Icon for search input */}
          </div>
        </div>

        <div className="repository-main-section"> {/* Main section displaying the list of repositories */}
          {filteredRepositories.map((repo) => ( // Map through the filtered repositories
            <div className="repo-content" key={repo.id}> {/* Key for each repository card */}
              <span> {/* Display repository name and visibility */}
                <h6>{repo.name}</h6> {/* Repository name */}
                <p>{repo.visibility}</p> {/* Repository visibility (Public/Private) */}
              </span>
              <div className="design-system"> {/* Additional details about the repository */}
                <p>
                  {repo.language} <IconPointFilled className="react-point-filled" /> {/* Programming language */}
                </p>
                <p>
                  <IconDatabase /> {repo.size} {/* Repository size */}
                </p>
                <p>Updated {repo.updated}</p> {/* Last updated time */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repository; // Export the Repository component for use in other parts of the application
