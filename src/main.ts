import { BallFactory } from "./ball"
import { collisionDetection } from "./collisionDetection"
import "./style.css"

const container: HTMLElement | null = document.getElementById("app")

export interface Renderable {
  update: () => void
  render: Function
}

export class Playground {
  viewport
  ctx: CanvasRenderingContext2D | null

  constructor(width: number, heigth: number, container: HTMLElement) {
    this.viewport = document.createElement("canvas")
    this.ctx = this.viewport.getContext("2d")

    this.viewport.width = width
    this.viewport.height = heigth

    container.insertBefore(this.viewport, container.firstChild)
  }

  ballFactory = new BallFactory()
  bouncingBalls = [
    this.ballFactory.createBall(this, "green"),
    this.ballFactory.createBall(this, "red"),
    this.ballFactory.createBall(this, "rebeccapurple"),
    this.ballFactory.createBall(this, "coral"),
    this.ballFactory.createBall(this, "green"),
    this.ballFactory.createBall(this, "red"),
    this.ballFactory.createBall(this, "rebeccapurple"),
    this.ballFactory.createBall(this, "coral"),
    this.ballFactory.createBall(this, "green"),
    this.ballFactory.createBall(this, "red"),
    this.ballFactory.createBall(this, "rebeccapurple"),
    this.ballFactory.createBall(this, "coral"),
    this.ballFactory.createBall(this, "green"),
    this.ballFactory.createBall(this, "red"),
    this.ballFactory.createBall(this, "rebeccapurple"),
    this.ballFactory.createBall(this, "coral"),
  ]

  update = () => {
    if (!this.ctx) return

    this.ctx.clearRect(
      0,
      0,
      this.viewport.clientWidth,
      this.viewport.clientHeight
    )

    collisionDetection(this.bouncingBalls)

    for (let ball of this.bouncingBalls) {
      ball.update()
      ball.render()
    }

    requestAnimationFrame(this.update)
  }
}

if (container) {
  const playground = new Playground(600, 600, container)
  playground.update()
}
