let inputDirection = [{ x: 0, y: 0 }]
let lastInputDirection = { x: 0, y: 0 }
let storedInputPosition = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'w':
            if(storedInputPosition.y !== 0) break
            storedInputPosition = { x: 0, y: -1 }
            inputDirection.push({ x: 0, y: -1 })
            break
        case 's':
            if(storedInputPosition.y !== 0) break
            storedInputPosition = { x: 0, y: 1 }
            inputDirection.push({ x: 0, y: 1 })
            break
        case 'a':
            if(storedInputPosition.x !== 0) break
            storedInputPosition = { x: -1, y: 0 }            
            inputDirection.push({ x: -1, y: 0 })
            break
        case 'd':
            if(storedInputPosition.x !== 0) break
            storedInputPosition = { x: 1, y: 0 }              
            inputDirection.push({ x: 1, y: 0 })
            break
        case 'ArrowUp':
            if(storedInputPosition.y !== 0) break
            storedInputPosition = { x: 0, y: -1 }
            inputDirection.push({ x: 0, y: -1 })
            break
        case 'ArrowDown':
            if(storedInputPosition.y !== 0) break
            storedInputPosition = { x: 0, y: 1 }
            inputDirection.push({ x: 0, y: 1 })
            break
        case 'ArrowLeft':
            if(storedInputPosition.x !== 0) break
            storedInputPosition = { x: -1, y: 0 }            
            inputDirection.push({ x: -1, y: 0 })
            break
        case 'ArrowRight':
            if(storedInputPosition.x !== 0) break
            storedInputPosition = { x: 1, y: 0 }              
            inputDirection.push({ x: 1, y: 0 })
            break
    }
})

export function getInputDirection() {
    if(inputDirection.length == 0) return storedInputPosition

    lastInputDirection = inputDirection[0]

    storedInputPosition = inputDirection[0]
    return inputDirection[0]
}

export function removeOldestInput() {
    inputDirection.splice(0, 1)
}
