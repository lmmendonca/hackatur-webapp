export default class CustomError extends Error {
  constructor(displayMessage) {
    super(displayMessage);
    this.displayMessage = displayMessage;
  }
}