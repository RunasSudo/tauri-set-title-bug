import { getCurrentWindow } from "@tauri-apps/api/window";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    await getCurrentWindow().setTitle(greetInputEl.value);
    greetMsgEl.textContent = "Current window title is: " + await getCurrentWindow().title();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

(async function() {
  await getCurrentWindow().setTitle("Init title");
  document.querySelector("#greet-msg")!.textContent = "Current window title is: " + await getCurrentWindow().title();
})();
