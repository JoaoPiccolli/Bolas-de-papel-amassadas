class Ground {
  constructor(x = width / 2, y = height - 10, w = width, h = 20) {
    this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
    World.add(world, this.body);
    this.width = w;
    this.height = h;
  }

  display() {
    let pos = this.body.position;
    rectMode(CENTER);
    fill(127);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
