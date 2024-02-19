import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuth = () => {
  // const clientId =
  //   "2014903271-c0ilok0bph5rnjmi9muqluhsk8hc8ft3.apps.googleusercontent.com";

  return (
    // <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
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
