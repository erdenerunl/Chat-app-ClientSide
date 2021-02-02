export const Auth = {
  Role: {
    User: "User",
    Admin: "Admin",
  },
};

export const MessageServiceBase = "http://localhost:5000";

export const MessageServiceEndpoints = {
  Login: "/api/auth/login",
  SignUp: "/api/auth/signup",
};

export const MessageServiceMessageHubEndpoint = "/messagehub";
