import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
export let length = 1
export let highScore = 1
const EXPANSION_RATE = 4

export function update() {    
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        length += EXPANSION_RATE
        food = getRandomFoodPosition()
        document.getElementById("length").textContent = "Length: " + length.toString(); 
        
        if(length > localStorage.getItem("highScore")){
            highScore = length   
            save(highScore)
        }

        // var snd = new Audio("file.wav");
        // snd.play();
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

export function load() {
    highScore = localStorage.getItem("highScore")
    document.getElementById("highScore").textContent = "High Score: " + highScore
}     