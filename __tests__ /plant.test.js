import Plant from "../src/js/Plant.js";

describe("Plant", () => {
  let plant;

  beforeEach(() => {
    plant = new Plant();
  });

  test("should correctly create a plant object with water, soil and light all equal to 0", () => {
    expect(plant.water).toEqual(0);
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test("should correctly increment the water, soil and light values of the plant", () => {
    plant.hydrate();
    plant.feed();
    plant.giveLight();
    expect(plant.water).toEqual(1);
    expect(plant.soil).toEqual(1);
    expect(plant.light).toEqual(1);
  });
});
