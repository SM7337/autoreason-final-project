const canvas = document.querySelector("#unity-canvas");
const loader = document.querySelector("#game-wrapper img");

const predir = "autoreason-build/";

let unityInstance = null;

createUnityInstance(canvas, {
  dataUrl: predir + "Build/autoreason-build.data.unityweb",
  frameworkUrl: predir + "Build/autoreason-build.framework.js.unityweb",
  codeUrl: predir + "Build/autoreason-build.wasm.unityweb",
  streamingAssetsUrl: predir + "StreamingAssets",
  companyName: "Group 1",
  productName: "AutoReason",
  productVersion: "1.0",
}).then((instance) => {
  unityInstance = instance;
  loader.style.display = "none";
});

const game = document.getElementById("game-wrapper");

game.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
game.addEventListener("mousedown", (e) => {
  if (e.button === 1) e.preventDefault();
});

document.querySelector("#fullscreen-btn").addEventListener("click", () => {
  if (!unityInstance) return;
  unityInstance.SetFullscreen(1);
});
