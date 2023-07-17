import "bootstrap";
import "./css/styles.css";
import Plant from "./js/plant.js";

export function attachEventListeners() {
  let plant = new Plant();

  document.getElementById("hydrate").addEventListener("click", function () {
    plant.hydrate();
    document.getElementById("water").textContent = `Water: ${plant.water}`;
  });

  document.getElementById("feed").addEventListener("click", function () {
    plant.feed();
    document.getElementById("soil").textContent = `Soil: ${plant.soil}`;
  });

  document.getElementById("giveLight").addEventListener("click", function () {
    plant.giveLight();
    document.getElementById("light").textContent = `Light: ${plant.light}`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  attachEventListeners();
});
