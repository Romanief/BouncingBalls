import { Ball } from "./ball"

export function collisionDetection(bouncingBalls: Ball[]) {
  for (let i = 0; i < bouncingBalls.length - 1; i++) {
    for (let j = i + 1; j < bouncingBalls.length; j++) {
      let distanceX = bouncingBalls[i].x - bouncingBalls[j].x
      let distanceY = bouncingBalls[i].y - bouncingBalls[j].y

      let vCollision = { x: distanceX, y: distanceY }

      let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))

      let vCollisionNorm = {
        x: vCollision.x / distance,
        y: vCollision.y / distance,
      }

      let vRelativeVelocity = {
        x: bouncingBalls[i].dx - bouncingBalls[j].dx,
        y: bouncingBalls[i].dy - bouncingBalls[j].dy,
      }

      let speed =
        vRelativeVelocity.x * vCollisionNorm.x +
        vRelativeVelocity.y * vCollisionNorm.y

      if (distance <= bouncingBalls[i].size + bouncingBalls[j].size) {
        bouncingBalls[i].x -= speed * vCollisionNorm.x
        bouncingBalls[i].y -= speed * vCollisionNorm.y
        bouncingBalls[j].x -= speed * vCollisionNorm.x
        bouncingBalls[j].y -= speed * vCollisionNorm.y
      }
    }
  }
}
