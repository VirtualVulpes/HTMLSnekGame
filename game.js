import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, highScore as highScore } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

let gameOver = false

function main(currentTime) {
    load()
    
    if(gameOver) {
        if(confirm("Game Over. Press 'OK' to Restart.")){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
    checkDeath()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
