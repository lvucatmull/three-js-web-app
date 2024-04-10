import WebGL from "three/addons/capabilities/WebGL.js";

export function checkWebGLCompatibility() {
  if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    // WebGL.checkWebGLCompatibility();
    console.log("WebGL available!");
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}
