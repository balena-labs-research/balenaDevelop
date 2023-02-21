"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src-electron/electron-main.ts
var import_electron = require("electron");
var import_main = require("@electron/remote/main");
var import_path = __toESM(require("path"));
var import_os = __toESM(require("os"));
(0, import_main.initialize)();
var platform = process.platform || import_os.default.platform();
try {
  if (platform === "win32" && import_electron.nativeTheme.shouldUseDarkColors === true) {
    require("fs").unlinkSync(
      import_path.default.join(import_electron.app.getPath("userData"), "DevTools Extensions")
    );
  }
} catch (_) {
}
var mainWindow;
function createWindow() {
  mainWindow = new import_electron.BrowserWindow({
    icon: import_path.default.resolve(__dirname, "icons/icon.png"),
    minWidth: 550,
    width: 1e3,
    height: 600,
    useContentSize: true,
    frame: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: import_path.default.resolve(__dirname, "/Users/arranmagee/Documents/GitHub.nosync/starter-Interface/ui/.quasar/electron/electron-preload.js")
    }
  });
  (0, import_main.enable)(mainWindow.webContents);
  mainWindow.loadURL("http://localhost:9300");
  if (true) {
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow?.webContents.closeDevTools();
    });
  }
  mainWindow.on("closed", () => {
    mainWindow = void 0;
  });
}
import_electron.app.whenReady().then(createWindow);
import_electron.app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    import_electron.app.quit();
  }
});
import_electron.app.on("activate", () => {
  if (mainWindow === void 0) {
    createWindow();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgbmF0aXZlVGhlbWUgfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCB7IGluaXRpYWxpemUsIGVuYWJsZSB9IGZyb20gJ0BlbGVjdHJvbi9yZW1vdGUvbWFpbidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5cbmluaXRpYWxpemUoKVxuXG4vLyBuZWVkZWQgaW4gY2FzZSBwcm9jZXNzIGlzIHVuZGVmaW5lZCB1bmRlciBMaW51eFxuY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtIHx8IG9zLnBsYXRmb3JtKClcblxudHJ5IHtcbiAgaWYgKHBsYXRmb3JtID09PSAnd2luMzInICYmIG5hdGl2ZVRoZW1lLnNob3VsZFVzZURhcmtDb2xvcnMgPT09IHRydWUpIHtcbiAgICByZXF1aXJlKCdmcycpLnVubGlua1N5bmMoXG4gICAgICBwYXRoLmpvaW4oYXBwLmdldFBhdGgoJ3VzZXJEYXRhJyksICdEZXZUb29scyBFeHRlbnNpb25zJylcbiAgICApXG4gIH1cbn0gY2F0Y2ggKF8pIHt9XG5cbmxldCBtYWluV2luZG93OiBCcm93c2VyV2luZG93IHwgdW5kZWZpbmVkXG5cbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcbiAgLyoqXG4gICAqIEluaXRpYWwgd2luZG93IG9wdGlvbnNcbiAgICovXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgaWNvbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2ljb25zL2ljb24ucG5nJyksIC8vIHRyYXkgaWNvblxuICAgIG1pbldpZHRoOiA1NTAsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgZnJhbWU6IGZhbHNlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgLy8gTW9yZSBpbmZvOiBodHRwczovL3YyLnF1YXNhci5kZXYvcXVhc2FyLWNsaS12aXRlL2RldmVsb3BpbmctZWxlY3Ryb24tYXBwcy9lbGVjdHJvbi1wcmVsb2FkLXNjcmlwdFxuICAgICAgcHJlbG9hZDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcHJvY2Vzcy5lbnYuUVVBU0FSX0VMRUNUUk9OX1BSRUxPQUQpXG4gICAgfVxuICB9KVxuXG4gIGVuYWJsZShtYWluV2luZG93LndlYkNvbnRlbnRzKVxuXG4gIG1haW5XaW5kb3cubG9hZFVSTChwcm9jZXNzLmVudi5BUFBfVVJMKVxuXG4gIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAvLyBpZiBvbiBERVYgb3IgUHJvZHVjdGlvbiB3aXRoIGRlYnVnIGVuYWJsZWRcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2RldnRvb2xzLW9wZW5lZCcsICgpID0+IHtcbiAgICAgIG1haW5XaW5kb3c/LndlYkNvbnRlbnRzLmNsb3NlRGV2VG9vbHMoKVxuICAgIH0pXG4gIH1cblxuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IHVuZGVmaW5lZFxuICB9KVxufVxuXG5hcHAud2hlblJlYWR5KCkudGhlbihjcmVhdGVXaW5kb3cpXG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gIGlmIChwbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpXG4gIH1cbn0pXG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSB1bmRlZmluZWQpIHtcbiAgICBjcmVhdGVXaW5kb3coKVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQWdEO0FBQ2hELGtCQUFtQztBQUNuQyxrQkFBaUI7QUFDakIsZ0JBQWU7QUFBQSxJQUVmLHdCQUFXO0FBR1gsSUFBTSxXQUFXLFFBQVEsWUFBWSxVQUFBQSxRQUFHLFNBQVM7QUFFakQsSUFBSTtBQUNGLE1BQUksYUFBYSxXQUFXLDRCQUFZLHdCQUF3QixNQUFNO0FBQ3BFLFlBQVEsTUFBTTtBQUFBLE1BQ1osWUFBQUMsUUFBSyxLQUFLLG9CQUFJLFFBQVEsVUFBVSxHQUFHLHFCQUFxQjtBQUFBLElBQzFEO0FBQUEsRUFDRjtBQUNGLFNBQVMsR0FBUDtBQUFXO0FBRWIsSUFBSTtBQUVKLFNBQVMsZUFBZTtBQUl0QixlQUFhLElBQUksOEJBQWM7QUFBQSxJQUM3QixNQUFNLFlBQUFBLFFBQUssUUFBUSxXQUFXLGdCQUFnQjtBQUFBLElBQzlDLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLE9BQU87QUFBQSxJQUNQLGdCQUFnQjtBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsTUFFakIsU0FBUyxZQUFBQSxRQUFLLFFBQVEsV0FBVyxxR0FBbUM7QUFBQSxJQUN0RTtBQUFBLEVBQ0YsQ0FBQztBQUVELDBCQUFPLFdBQVcsV0FBVztBQUU3QixhQUFXLFFBQVEsdUJBQW1CO0FBRXRDLE1BQUksTUFBdUI7QUFFekIsZUFBVyxZQUFZLGFBQWE7QUFBQSxFQUN0QyxPQUFPO0FBRUwsZUFBVyxZQUFZLEdBQUcsbUJBQW1CLE1BQU07QUFDakQsa0JBQVksWUFBWSxjQUFjO0FBQUEsSUFDeEMsQ0FBQztBQUFBLEVBQ0g7QUFFQSxhQUFXLEdBQUcsVUFBVSxNQUFNO0FBQzVCLGlCQUFhO0FBQUEsRUFDZixDQUFDO0FBQ0g7QUFFQSxvQkFBSSxVQUFVLEVBQUUsS0FBSyxZQUFZO0FBRWpDLG9CQUFJLEdBQUcscUJBQXFCLE1BQU07QUFDaEMsTUFBSSxhQUFhLFVBQVU7QUFDekIsd0JBQUksS0FBSztBQUFBLEVBQ1g7QUFDRixDQUFDO0FBRUQsb0JBQUksR0FBRyxZQUFZLE1BQU07QUFDdkIsTUFBSSxlQUFlLFFBQVc7QUFDNUIsaUJBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3MiLCAicGF0aCJdCn0K
