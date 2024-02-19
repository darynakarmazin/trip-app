import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = () => {
  // const clientId =
  //   "2014903271-c0ilok0bph5rnjmi9muqluhsk8hc8ft3.apps.googleusercontent.com";

  return (
    // <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        axios
          .post("https://trip-app-backend-oyms.onrender.com/google-auth", {
            credentialResponse,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
    // </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
