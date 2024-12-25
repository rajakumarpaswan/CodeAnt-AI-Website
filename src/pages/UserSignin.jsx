// Importing necessary components and styles
import SignInCard from '../components/SignInCard'; // Component for rendering the sign-in card
import SignInOption from '../components/SignInOption'; // Component for rendering different sign-in options
import masklogo from '../images/masklogo.png'; // Importing the logo image
import './UserSignin.css'; // Importing the CSS file for styling the UserLogin component

// Functional component for the user login page
const UserLogin = () => {
  return (
    <div className="SignInPage-content">
      {/* Main container for the sign-in page content.
          The `SignInPage-content` class handles the layout and styling. */}
      
      <div className="SignInLeftPart">
        {/* Left section of the sign-in page. 
            Contains the sign-in card and the logo. */}
        
        <div className="SingInLeft-Section">
          <SignInCard />
          {/* Sign-in card component. 
              Likely contains inputs for user credentials like email and password. */}
        </div>

        <div className="masklogo">
          <img src={masklogo} alt="" />
          {/* Displays the mask logo below the sign-in card. 
              The `alt` attribute is left empty for decorative purposes. */}
        </div>
      </div>
      
      <div className="signInOption-Section">
        {/* Right section of the sign-in page.
            Contains multiple sign-in options such as third-party authentication. */}
        <SignInOption />
        {/* Sign-in options component. 
            Likely includes buttons or links for signing in with external providers like GitHub or Google. */}
      </div>
    </div>
  );
};

export default UserLogin;
// Exporting the `UserLogin` component so it can be used in other parts of the application.
