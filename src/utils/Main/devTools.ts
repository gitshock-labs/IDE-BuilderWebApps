import * as E from "electron";

export const toggleDetachedDevTools = (webContents: E.WebContents) => {
  if (!webContents || webContents.isDevToolsOpened()) {
    webContents.closeDevTools();

    return;
  }

  webContents.openDevTools({ mode: "detach" });
};
