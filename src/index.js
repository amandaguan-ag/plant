import "bootstrap";
import "./css/styles.css";
import { storeState, hydrate, feed, giveLight } from "./js/plant.js";

const stateControl = storeState();

window.onload = function () {
  document.getElementById("hydrate").onclick = function () {
    const newState = stateControl(hydrate);
    document.getElementById("water").innerText = `Water: ${newState.water}`;
  };

  document.getElementById("feed").onclick = function () {
    const newState = stateControl(feed);
    document.getElementById("soil").innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById("giveLight").onclick = function () {
    const newState = stateControl(giveLight);
    document.getElementById("light").innerText = `Light: ${newState.light}`;
  };

  document.getElementById("show-state").onclick = function () {
    const currentState = stateControl();
    document.getElementById("water").innerText = `Water: ${currentState.water}`;
    document.getElementById("soil").innerText = `Soil: ${currentState.soil}`;
    document.getElementById("light").innerText = `Light: ${currentState.light}`;
  };
};
