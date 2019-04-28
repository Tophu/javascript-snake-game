/*c
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const box = 32;

const ground = new Image();
ground.src = "img/ground2.png";

const foodImg = new Image();
foodImg.src = "img/egg2.png";

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

let score = 0;

function draw() {
    ctx.drawImage(ground, 0, 0);
}

let game = setInterval(draw, 100);