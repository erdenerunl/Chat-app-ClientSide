export default class ProcessResult {
  constructor(isSuccessful = false, message = "") {
    this.isSuccessful = isSuccessful;
    this.message = message;
  }
}
