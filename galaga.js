console.log('it works');

const canvas = document.querySelector('#galaga');
const ctx = canvas.getContext('2d');
const startButton = document.querySelector('.start');
const MOVE_AMOUNT = 30;

// setup canvas for drawing
const { width, height } = canvas;

// create a player
class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y

        this.radius = radius
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color 
        ctx.fill()
    }
}

// firing projectiles from player
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    drawProjectile() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color 
        ctx.fill()
    }
}

const playerX = canvas.width / 2;
const playerY = canvas.height / 1.10;

const player = new Player(playerX, playerY, 30, 'blue');
player.draw();

// event listener for projectile
window.addEventListener('click', () => {
    const projectile = new Projectile()
});

// keeping score

// registering when game is over

// registering "hit" within game

// way to move enemy ships along x-axis




