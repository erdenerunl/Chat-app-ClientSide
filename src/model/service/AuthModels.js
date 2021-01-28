import { Auth as Constant } from "../Constants";

export class AuthResult {
  constructor(isAuthenticated = false, message = "", token = "") {
    this.isAuthenticated = isAuthenticated;
    this.message = message;
    this.token = token;
  }
}

export class SignUpModel {
  constructor(username, password, role = Constant.Role.User) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

export class LoginModel {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
