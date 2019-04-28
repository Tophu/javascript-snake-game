/*c
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

// Setting the canvas  by getting ID element from HTML
const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const box = 32;

// Loading the image assets for the game
const ground = new Image();
ground.src = "img/ground2.png";

const foodImg = new Image();
foodImg.src = "img/egg2.png";

// Array of Snake's body, including the head and tail
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

// Position of food in random position every time the page is refreshed or when the snake eats the food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

// Initial Score like a counter
let score = 0;

// Event listner when arrow keys are pressed
document.addEventListener('keydown', direction);

// Declare the 'd' variable before the function, this variable will be reassigned for each arrow key pressed.
let d;

// 'keyCode' for direction, these codes are unique in JavaScript Events
function direction(e) {
    let key = e.keyCode;
    if (key == 37) {
        d = 'LEFT'
    } else if (key == 38) {
        d = 'UP'
    } else if (key == 39) {
        d = 'RIGHT'
    } else if (key == 40) {
        d = 'DOWN'
    }
}

function draw() {
    // Setting the background to the canvas
    ctx.drawImage(ground, 0, 0);
    // Increment the Length of Snake
    for (let i = 0; i < snake.length; i++) {
        // Add colour to the Head of Snake at it's current position
        ctx.fillStyle = (i == 0) ? "teal" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "darkturquiose";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    // Font and Score & Food Image Position
    ctx.drawImage(foodImg, food.x, food.y);

    // Old position of the Snake's head Array
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Direction of movement, increment or decrement depending on direction the snake is going in
    if (d == 'LEFT') snakeX -= box;
    if (d == 'UP') snakeY -= box;
    if (d == 'RIGHT') snakeX += box;
    if (d == 'DOWN') snakeY += box;

    // Remove the Snake's tail after moving from the Snake Array
    snake.pop();

    // Add new head of Snake after mocing
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Add the head to the beginning of the Snake Array
    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.fillText(score, 2 * box, 1.6 * box);
}

// Call the 'draw()' function every 100ms
let game = setInterval(draw, 100);