var game = new Phaser.Game(1600, 800, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update });

var sharSprite;
var lastDirectionChangeTime = 0;
var isFacingRight = true;

function preload() {
    // Preload the image
    game.load.image('shar', 'assets/shar.png');
    
    // Preload the sound from the phaser/sound folder
    game.load.audio('ding', 'sound/ding.mp3');
}

function create() {
    // Create a sprite using the preloaded image
    sharSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'shar');
    sharSprite.anchor.setTo(0.5); // Set the anchor point to the center of the sprite
}

function update() {
    // Get the current time
    var currentTime = game.time.now;

    // Check if 3 seconds have passed since the last direction change
    if (currentTime - lastDirectionChangeTime > 3000) {
        // Toggle the direction (face left or right)
        isFacingRight = !isFacingRight;

        // Update the sprite's scale.x based on the direction
        if (isFacingRight) {
            sharSprite.scale.x = 1; // Face right
        } else {
            sharSprite.scale.x = -1; // Face left
        }

        // Play the sound
        game.sound.play('ding');

        // Update the last direction change time
        lastDirectionChangeTime = currentTime;
    }
}
