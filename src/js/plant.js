export default function Plant() {
  this.water = 0;
  this.soil = 0;
  this.light = 0;
}

Plant.prototype.hydrate = function () {
  this.water++;
};

Plant.prototype.feed = function () {
  this.soil++;
};

Plant.prototype.giveLight = function () {
  this.light++;
};
