import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

interface GoogleAuthProps {
  setAuthUser: (newValue: any) => void;
}

const GoogleAuth = ({ setAuthUser }: GoogleAuthProps) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        axios
          .post("https://trip-app-backend-oyms.onrender.com/google-auth", {
            credential: credentialResponse.credential,
            clientId: credentialResponse.clientId,
          })
          .then(function (response) {
            setAuthUser(response.data.data);
            localStorage.setItem(
              "authUser",
              JSON.stringify(response.data.data)
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleAuth;
