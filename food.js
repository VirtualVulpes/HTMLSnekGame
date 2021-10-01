import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
export let length = 1
export let highScore = 0
const EXPANSION_RATE = 3

export function update() {
    load()
    
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        length += 3
        food = getRandomFoodPosition()
        document.getElementById("length").textContent = "Length: " + length.toString(); 
        
        if(length > highScore){
            highScore = length   
            document.getElementById("highScore").textContent = "High Score: " + highScore.toString();
            save(highScore)
        }
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

function save(score) {
    localStorage.setItem("highScore", score)
}

function load() {
    highScore = localStorage.getItem("highScore")
    document.getElementById("highScore").textContent = highScore
}     
