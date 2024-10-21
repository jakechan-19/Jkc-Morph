const knight = document.getElementById('knight');
const enemy = document.getElementById('enemy');
const gameArea = document.getElementById('gameArea');
const moveSpeed = 5;

let knightPosition = { x: 375, y: 275 }; // Posisi awal kesatria
let enemyPosition = { x: Math.random() * 750, y: Math.random() * 550 }; // Posisi awal musuh

// Fungsi untuk menggambar kesatria
function drawKnight() {
    knight.style.left = knightPosition.x + 'px';
    knight.style.top = knightPosition.y + 'px';
}

// Fungsi untuk menggambar musuh
function drawEnemy() {
    enemy.style.left = enemyPosition.x + 'px';
    enemy.style.top = enemyPosition.y + 'px';
}

// Event listener untuk menangani input dari keyboard
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            knightPosition.x -= moveSpeed;
            break;
        case 'ArrowRight':
            knightPosition.x += moveSpeed;
            break;
        case 'ArrowUp':
            knightPosition.y -= moveSpeed;
            break;
        case 'ArrowDown':
            knightPosition.y += moveSpeed;
            break;
    }

    // Membatasi gerakan kesatria agar tidak keluar dari area permainan
    knightPosition.x = Math.max(0, Math.min(gameArea.clientWidth - knight.clientWidth, knightPosition.x));
    knightPosition.y = Math.max(0, Math.min(gameArea.clientHeight - knight.clientHeight, knightPosition.y));

    drawKnight();
    checkCollision();
});

// Fungsi untuk memeriksa tabrakan dengan musuh
function checkCollision() {
    if (
        knightPosition.x < enemyPosition.x + 50 &&
        knightPosition.x + 50 > enemyPosition.x &&
        knightPosition.y < enemyPosition.y + 50 &&
        knightPosition.y + 50 > enemyPosition.y
    ) {
        alert("Kamu terkena musuh! Game Over!");
        resetGame();
    }
}

// Fungsi untuk mereset permainan
function resetGame() {
    knightPosition = { x: 375, y: 275 };
    enemyPosition = { x: Math.random() * 750, y: Math.random() * 550 };
    drawKnight();
    drawEnemy();
}

// Menggambar kesatria dan musuh pada posisi awal
drawKnight();
drawEnemy();
