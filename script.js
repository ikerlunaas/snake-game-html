const board = document.getElementById('game-board');
const snakeElement = document.getElementById('snake');
const foodElement = document.getElementById('food');


let snake = [{ x: 200, y: 200}];
let food = {x: 0, y: 0};
let dx = 0;
let dy = 0;
let score = 0;
const speed = 150;

function updateSnake() {
    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = {...snake[i] };
    }
    snake[0].x += dx;
    snake[0].y += dy;
}

function drawSnake() {
    snake.forEach(segment => {
        const element = document.createElement('div');
        element.style.gridRowStart = segment.y;
        element.style.gridColumnStart = segment.x;
        element.classList.add('snake');
        board.appendChild(element);
    });
}

function clearBoard() {
    board.innerHTML = '';
}

function getRandomPosition() {
    return Math.floor(Math.random() * 20) * 20;
}

function createFood() {
    food.x = getRandomPosition();
    food.y = getRandomPosition();

    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
}

function checkCollision() {
    if (
        snake[0].x < 1 ||
        snake[0].x > 20 ||
        snake[0].y < 1 ||
        snake[0].y > 20 ||
        snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)
    ) {
        return true;
    }
    return false;
}

function main() {
    updateSnake();
    if (checkCollision()) {
        alert('Game Over! Your score: ' + score);
        location.reload();
        return;
    }
    clearBoard();
    drawFood();
    drawSnake();

    if (nake[0].x === food.x && snake[0].y === food.y) {
        snake.push({...snake[snake.length - 1]});
        score++;
        createFood();
    }
    setTimeout(main, speed);
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'Arrow Up':
            if (dy === 0) {
                dx = 0;
                dy = -1;
            }
            break;
        case 'Arrow Down':
            if (dy === 0) {
                dx = 0;
                dy = 1;
            }
            break;
        case 'ArrowLeft':
            if (dx === 0) {
                dx = -1;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if (dx === 0){
                dx = 1;
                dy = 0;
            }
            break;
    }
});

createFood();
main();

