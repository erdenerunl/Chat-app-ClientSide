export class SentPrivateMessage {
  constructor(receiverUser, message) {
    this.receiverUser = receiverUser;
    this.message = message;
  }
}

export class SentGroupMessage {
  constructor(receiverGroup, message) {
    this.receiverGroup = receiverGroup;
    this.message = message;
  }
}
