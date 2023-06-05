import { Playground, Renderable } from "./main"

export class Ball implements Renderable {
  color
  size
  instance
  x
  y
  dx
  dy

  constructor(
    playgroundInstance: Playground,
    color: string,
    size: number,
    x: number,
    y: number,
    dx: number,
    dy: number
  ) {
    this.color = color
    this.size = size
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.instance = playgroundInstance
  }

  collide() {
    if (this.x < 0 + this.size || this.x > 600 - this.size) this.dx *= -1
    if (this.y < 0 + this.size || this.y > 600 - this.size) this.dy *= -1
  }

  update() {
    this.collide()
    this.x += this.dx
    this.y += this.dy
  }

  render() {
    if (!this.instance.ctx) return

    this.instance.ctx.beginPath()
    this.instance.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.instance.ctx.fillStyle = this.color
    this.instance.ctx.fill()
  }
}

export class BallFactory {
  createBall(
    instance: Playground,
    color: "green" | "red" | "rebeccapurple" | "coral"
  ) {
    return new Ball(
      instance,
      color,
      Math.random() * 30 + 10,
      Math.random() * 200 + 100,
      Math.random() * 200 + 100,
      Math.random() * 2,
      Math.random() * 2
    )
  }
}
