import * as E from "electron";

import Tab from "Main/window/Tabs";
import { isDev } from "Utils/Common";

export function listenToWebBinding(channel: string, listener: (sender: E.WebContents, ...args: any[]) => void): void {
  E.ipcMain.on(`web:${channel}`, (event: E.IpcMainEvent, ...args: any[]) => {
    isDev && console.log(`[ipc] from web: ${channel}`);

    event.returnValue = listener(event.sender, ...args);
  });
}

export function listenToWebBindingPromise(
  channel: string,
  listener: (sender: E.WebContents, ...args: any[]) => void,
): void {
  E.ipcMain.on(`web-promise:${channel}`, async (event: E.IpcMainEvent, promiseID: number, ...args: any[]) => {
    isDev && console.log(`[ipc] from web: ${channel} (promise ${promiseID})`);

    let result;
    let method;

    try {
      result = await listener(event.sender, ...args);
      method = "handlePromiseResolve";
    } catch (error) {
      result = error + "";
      method = "handlePromiseReject";
    }

    const tab = Tab.getByWebContentId(event.sender.id);

    if (!tab) {
      return;
    }

    tab.view.webContents.send(method, promiseID, result);
  });
}

export function listenToWebRegisterCallback(
  channel: string,
  listener: (sender: E.WebContents, ...args: any[]) => () => void,
): void {
  E.ipcMain.on(`web-callback:${channel}`, (event: E.IpcMainEvent, args: any, callbackID: number) => {
    isDev && console.log(`[ipc] from web: ${channel} (callback ${callbackID})`);

    const tab = Tab.getByWebContentId(event.sender.id);

    if (!tab) {
      return;
    }

    const cancel = listener(event.sender, args, (args: any) => {
      tab.view.webContents.send("handleCallback", callbackID, args);
    });

    Tab.registeredCancelCallbackMap.set(callbackID, cancel);
  });
}
