import { AuthModels, Constants, ProcessResult } from "../model/model";
import Axios from "axios";

const SignUpModelUnavailableMessage = "SignUpModelUnavailableMessage";
const LoginModelUnavailableMessage = "LoginModelUnavailableMessage";
const SignUpServiceUrl = `${Constants.MessageServiceBase}${Constants.MessageServiceEndpoints.SignUp}`;
const LoginServiceUrl = `${Constants.MessageServiceBase}${Constants.MessageServiceEndpoints.Login}`;

const SignUp = (signUpModel) => {
  if (signUpModel === undefined || signUpModel === null) {
    return new ProcessResult(false, SignUpModelUnavailableMessage);
  }
  return sendSignUpRequest(signUpModel);
};

const sendSignUpRequest = async (signUpModel) => {
  let signUpResponse = undefined;

  try {
    let response = await Axios.post(SignUpServiceUrl, signUpModel);
    signUpResponse = prepareSuccessfulSignUpResult(response);
  } catch (error) {
    handleUnsuccessfulSignUp(error);
    signUpResponse = prepareUnsuccessfulSignUpResult();
  }

  return signUpResponse;
};

const prepareSuccessfulSignUpResult = (successfulLoginResponse) => {
  return new ProcessResult(
    successfulLoginResponse.status >= 200 &&
      successfulLoginResponse.status < 300
  );
};

const handleUnsuccessfulSignUp = (signUpRequestError) => {
  console.log(signUpRequestError);
};

const prepareUnsuccessfulSignUpResult = (signUpRequestError) => {
  return new ProcessResult(false, signUpRequestError.toString());
};

const Login = (loginModel) => {
  if (loginModel === undefined || loginModel === null) {
    return new AuthModels.AuthResult(false, LoginModelUnavailableMessage);
  }
  return sendLoginRequest(loginModel);
};

const sendLoginRequest = async (loginModel) => {
  let loginResponse = undefined;

  try {
    let response = await Axios.post(LoginServiceUrl, loginModel);
    loginResponse = prepareSuccessfulLoginResult(response);
  } catch (error) {
    handleUnsuccessfulLogin(error);
    loginResponse = prepareUnsuccessfulLoginResult();
  }

  return loginResponse;
};

const prepareSuccessfulLoginResult = (successfulLoginResponse) => {
  return new AuthModels.AuthResult(
    successfulLoginResponse.data.isAuthenticated,
    successfulLoginResponse.data.message,
    successfulLoginResponse.data.token
  );
};

const handleUnsuccessfulLogin = (loginRequestError) => {
  console.log(loginRequestError);
};

const prepareUnsuccessfulLoginResult = (loginRequestError) => {
  return new AuthModels.AuthResult(false, loginRequestError.toString());
};

export const AuthService = { SignUp, Login };
 