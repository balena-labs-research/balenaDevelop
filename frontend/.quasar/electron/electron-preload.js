"use strict";

// src-electron/electron-preload.ts
var import_electron = require("electron");
var import_remote = require("@electron/remote");
import_electron.contextBridge.exposeInMainWorld("myWindowAPI", {
  minimize() {
    import_remote.BrowserWindow.getFocusedWindow()?.minimize();
  },
  toggleMaximize() {
    const win = import_remote.BrowserWindow.getFocusedWindow();
    if (win?.isMaximized()) {
      win.unmaximize();
    } else {
      win?.maximize();
    }
  },
  close() {
    import_remote.BrowserWindow.getFocusedWindow()?.close();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLXByZWxvYWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCB7IEJyb3dzZXJXaW5kb3cgfSBmcm9tICdAZWxlY3Ryb24vcmVtb3RlJ1xuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdteVdpbmRvd0FQSScsIHtcbiAgbWluaW1pemUoKSB7XG4gICAgQnJvd3NlcldpbmRvdy5nZXRGb2N1c2VkV2luZG93KCk/Lm1pbmltaXplKClcbiAgfSxcblxuICB0b2dnbGVNYXhpbWl6ZSgpIHtcbiAgICBjb25zdCB3aW4gPSBCcm93c2VyV2luZG93LmdldEZvY3VzZWRXaW5kb3coKVxuXG4gICAgaWYgKHdpbj8uaXNNYXhpbWl6ZWQoKSkge1xuICAgICAgd2luLnVubWF4aW1pemUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW4/Lm1heGltaXplKClcbiAgICB9XG4gIH0sXG5cbiAgY2xvc2UoKSB7XG4gICAgQnJvd3NlcldpbmRvdy5nZXRGb2N1c2VkV2luZG93KCk/LmNsb3NlKClcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUFBLHNCQUE4QjtBQUM5QixvQkFBOEI7QUFFOUIsOEJBQWMsa0JBQWtCLGVBQWU7QUFBQSxFQUM3QyxXQUFXO0FBQ1QsZ0NBQWMsaUJBQWlCLEdBQUcsU0FBUztBQUFBLEVBQzdDO0FBQUEsRUFFQSxpQkFBaUI7QUFDZixVQUFNLE1BQU0sNEJBQWMsaUJBQWlCO0FBRTNDLFFBQUksS0FBSyxZQUFZLEdBQUc7QUFDdEIsVUFBSSxXQUFXO0FBQUEsSUFDakIsT0FBTztBQUNMLFdBQUssU0FBUztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUTtBQUNOLGdDQUFjLGlCQUFpQixHQUFHLE1BQU07QUFBQSxFQUMxQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
