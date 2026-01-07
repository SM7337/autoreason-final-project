const canvas = document.querySelector("#unity-canvas");

const predir = "autoreason-build/";

createUnityInstance(canvas, {
  dataUrl: predir + "Build/autoreason-build.data.unityweb",
  frameworkUrl: predir + "Build/autoreason-build.framework.js.unityweb",
  codeUrl: predir + "Build/autoreason-build.wasm.unityweb",
  streamingAssetsUrl: predir + "StreamingAssets",
  companyName: "Group 1",
  productName: "AutoReason",
  productVersion: "1.0",
});

const game = document.getElementById("game-wrapper");

game.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
game.addEventListener("mousedown", (e) => {
  if (e.button === 1) e.preventDefault();
});
