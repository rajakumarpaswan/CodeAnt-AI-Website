// Importing necessary components and styles
// `Repository` and `Sidebar` are components that represent different sections of the dashboard
import Repository from '../components/Repository'; 
import Siderbar from '../components/Siderbar'; 
import './Dashboard.css'; // Importing CSS file for styling the Dashboard component

// Functional component for the Dashboard
const Dashboard = () => {
  return (
    <div id='dashboard' className="Dashboard-section"> 
      {/* Main container for the dashboard. 
          The `id` is set to 'dashboard', and `Dashboard-section` is used for styling. */}
     
      <Siderbar/> 
      {/* Sidebar component: 
          Displays navigation links and user-related options on the left side of the dashboard. */}
     
      <Repository/> 
      {/* Repository component: 
          Displays the list of repositories or repository-related content on the main section of the dashboard. */}

     </div>
     /* Closing the main container */
  );
};

export default Dashboard; 
// Exporting the `Dashboard` component to be used in other parts of the application.
