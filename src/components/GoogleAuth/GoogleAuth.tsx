import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        axios
          .post("https://trip-app-backend-oyms.onrender.com/google-auth", {
            credential: credentialResponse.credential,
            clientId: credentialResponse.clientId,
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
  );
};

export default GoogleAuth;
