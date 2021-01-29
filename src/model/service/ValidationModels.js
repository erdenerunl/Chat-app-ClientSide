export class ValidationContext {
  constructor(model, validationResult) {
    this.model = model;
    this.validationResult = validationResult;
  }
}

export class ValidationResult {
  constructor() {
    this.isValid = true;
    this.message = "Invalid username or password. Please check your informations.";
  }
}
