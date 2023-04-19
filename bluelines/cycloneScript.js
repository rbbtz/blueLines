let angle = 0;
let curves = [];
let flares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (let i = 0; i < 100; i++) {
    curves.push(new Curve());
  }
}

function draw() {
  background(255, 255, 255, 10);

  for (let c of curves) {
    c.update();
    c.display();
  }

  for (let f of flares) {
    f.update();
    f.display();
  }

  angle += 0.005;
}

class Curve {
  constructor() {
    this.vertices = [];
    this.strokeWeight = random(1, 4);
    this.noiseOffset = random(1000);

    for (let i = 0; i < 4; i++) {
      this.vertices.push({
        x: random(width),
        y: random(height),
        speedX: random(-1, 1),
        speedY: random(-1, 1)
      });
    }
  }

  update() {
    for (let vertex of this.vertices) {
      vertex.x += vertex.speedX * (1 + noise(this.noiseOffset) * 0.5) * cos(angle);
      vertex.y += vertex.speedY * (1 + noise(this.noiseOffset) * 0.5) * sin(angle);

      if (vertex.x < 0 || vertex.x > width) {
        vertex.speedX *= -1;
        flares.push(new Flare(vertex.x, vertex.y));
      }
      if (vertex.y < 0 || vertex.y > height) {
        vertex.speedY *= -1;
        flares.push(new Flare(vertex.x, vertex.y));
      }
    }

    this.noiseOffset += 0.01;
  }

  display() {
    stroke(0);
    strokeWeight(this.strokeWeight);
    beginShape();
    curveVertex(this.vertices[0].x, this.vertices[0].y);
    curveVertex(this.vertices[1].x, this.vertices[1].y);
    curveVertex(this.vertices[2].x, this.vertices[2].y);
    curveVertex(this.vertices[3].x, this.vertices[3].y);
    endShape();
  }
}

class Flare {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
  }

  update() {
    this.size *= 0.96;
  }

  display() {
    noStroke();
    fill(173, 216, 230, 128); // light blue color
    ellipse(this.x, this.y, this.size, this.size);
  }
}
