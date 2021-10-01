import { getInputDirection, removeOldestInput } from "./queuedInput.js"
import { outsideGrid } from './grid.js'

export const SNAKE_SPEED = 13
const snakeBody = [{ x: 19, y: 14 }]
let newSegments = 0

let cutOut = {x: 1, y: 1}
let storedPos = {x: 1, y: 1}

export function update() {
    addSegments()
    
    const inputDirection = getInputDirection()

    if(inputDirection == null) return

    storedPos.x = snakeBody[0].x + inputDirection.x
    storedPos.y = snakeBody[0].y + inputDirection.y

    removeOldestInput()
    
    if (outsideGrid(storedPos)) {
        return     
    }
    
    cutOut = snakeBody.splice(snakeBody.length - 1, 1) [0]
    cutOut.x = storedPos.x 
    cutOut.y = storedPos.y

    snakeBody.splice(0, 0, cutOut)
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
 return storedPos
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y 
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}