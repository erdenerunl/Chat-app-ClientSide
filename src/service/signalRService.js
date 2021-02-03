const signalR = require("@microsoft/signalr");
import { ProcessResult } from "../model/model";

const ConnectionFailedMessage = "ConnectionFailedMessage";
const ConnectedMessage = "ConnectedMessage";

let connection = undefined;
let connectionAttemptCounter = 0;

export class SignalRService {
  constructor(signalRConfig) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(signalRConfig.url, {
        accessTokenFactory: () =>
          localStorage.getItem("access_token") != null
            ? localStorage.getItem("access_token")
            : "",
      })
      .build();

    for (const eventName in signalRConfig.eventHandlerPairs) {
      connection.on(eventName, signalRConfig.eventHandlerPairs[eventName]);
    }
  }

  Connect = () => {
    connectionAttemptCounter++;

    connection
      .start()
      .then(() => {
        console.log("SignalR connected !");

        return new ProcessResult(true, ConnectedMessage);
      })
      .catch(() => {
        if (connectionAttemptCounter === 5) {
          return new ProcessResult(false, ConnectionFailedMessage);
        } else {
          console.log(
            `Connection attempt ${connectionAttemptCounter} failed ! Trying again...`
          );
          setTimeout(this.Connect, 5000);
        }
      });
  };
}
