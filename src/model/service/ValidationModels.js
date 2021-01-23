export class ValidationContext {
  constructor(model, validationResult) {
    this.model = model;
    this.validationResult = validationResult;
  }
}

export class ValidationResult {
  constructor() {
    this.isValid = true;
    this.message = "";
  }
}
