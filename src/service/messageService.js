import { SignalRService } from "./signalRService";
import { SignalRConfig, Constants } from "../model/model";

const ReceiveMessageEventName = "ReceiveMessage";
const SendPrivateMessageServiceMethodName = "SendPrivateMessage";
const SendGroupMessageServiceMethodName = "SendGroupMessage";
const SendMessageToAllServiceMethodName = "SendMessageToAll";

let messageHubConnectionResult = undefined;

export default class MessageService extends SignalRService {
  constructor(receiveMessageHandler) {
    super(
      new SignalRConfig(
        `${Constants.MessageServiceBase}${Constants.MessageServiceMessageHubEndpoint}`,
        {
          [ReceiveMessageEventName]: receiveMessageHandler,
        }
      )
    );

    messageHubConnectionResult = this.Connect();
  }

  SendPrivateMessage = (sentPrivateMessage) => {
    this.connection
      .invoke(SendPrivateMessageServiceMethodName, sentPrivateMessage)
      .then(() => console.log("Message sending successful !"))
      .catch(() => console.log("Message sending unsuccessful !"));
  };

  SendGroupMessage = (sentGroupMessage) => {
    this.connection
      .invoke(SendGroupMessageServiceMethodName, sentGroupMessage)
      .then(() => console.log("Message sending successful !"))
      .catch(() => console.log("Message sending unsuccessful !"));
  };

  SendMessageToAll = (message) => {
    this.connection
      .invoke(SendMessageToAllServiceMethodName, message)
      .then(() => console.log("Message sending successful !"))
      .catch(() => console.log("Message sending unsuccessful !"));
  };
}
