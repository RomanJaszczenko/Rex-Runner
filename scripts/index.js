class RexRunner {
    constructor() {
        this.rex = document.getElementById("rex");
        this.cactus = document.getElementById("cactus");
        this.isJumping = false;
        this.isAliveInterval = null;

        this.setupEventListener();
        this.startGame();
    }

    setupEventListener() {
        document.addEventListener("keydown", () => this.jump());
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.rex.classList.add("jump");

            setTimeout(() => {
                this.rex.classList.remove("jump");
                this.isJumping = false;
            }, 300);
        }
    }

    checkCollision() {
        const rexTop = parseInt(window.getComputedStyle(this.rex).getPropertyValue("top"));
        const cactusLeft = parseInt(window.getComputedStyle(this.cactus).getPropertyValue("left"));

        return cactusLeft < 50 && cactusLeft > 0 && rexTop >= 140;
    }

    gameLoop() {
        this.isAliveInterval = setInterval(() => {
            if (this.checkCollision()) {
                this.endGame();
            }
        }, 10);
    }

    startGame() {
        this.gameLoop();
    }

    endGame() {
        alert("GAME OVER!");
    }
}

const game = new RexRunner();