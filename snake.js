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

document.addEventListener('keydown', direction);

// Direction of arrow keys & 'keycode' for direction
function direction(e) {
    if (e.keyCode == 37) {
        d = 'LEFT'
    } else if (e.keyCode == 38) {
        d = 'UP'
    } else if (e.keyCode == 39) {
        d = 'RIGHT'
    } else if (e.keyCode == 40) {
        d = 'DOWN'
    }
}

function draw() {
    ctx.drawImage(ground, 0, 0);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "teal" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "darkturquiose";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.fillText(score, 2 * box, 1.6 * box);
}

let game = setInterval(draw, 100);