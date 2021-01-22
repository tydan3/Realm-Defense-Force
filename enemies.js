class Slime {
  constructor(gameEngine) {
    Object.assign(this, { gameEngine });

    // constants
    const WIDTH = 160;
    const HEIGHT = 160;

    this.animations = [];

    // spritesheet
    // might need to use slime1_side and flip so that slimes face right when animating
    this.spritesheet = ASSET_MANAGER.getAsset(
      "./sprites/monster/slime/slime1_front.png"
    );

    // this.death = ASSET_MANAGER.getAsset("./sprites/monster/slime/slime_explode.png");

    // animations
    this.animations.push(
      new Animator(this.spritesheet, 0, 0, 16, 16, 4, 1, 0, false, true)
    );
    // this.animations.push(new Animator(this.death, 0, 0, 37, 41, 8, 1, 0, false, false));

    // states
    this.dead = false;
    // this.paused = false; // implemented when HUD is set up

    // this.velocity = {}; // used for moving the enemy across the map
  }

  updateBB() {
    // this.lastSlimeBB = this.slimeBB; // bounding box for slime collision with other slimes
    // this.lastTowerDetectBB = this.towerDetectBB; // bounding box for tower detection
    // this.slimeBB = new BoundingBox(this.x, this.y, ); // create class for bounding box
    // // this.towerDetectBB = new BoundingBox();
  }

  update() {
    // if(this.dead) {
    //     // remove entity
    // }
    // if(this.paused) {
    //     // pause animation at certain frame
    // }
    // if (!this.paused && !this.dead) {
    //     // move slimes
    //     this.x = this.x + 1; // move right;
    // }
  }

  draw(ctx) {
    // ctx.drawImage(this.spritesheet, 200, 500);

    this.animations[0].drawFrame(this.gameEngine.clockTick, ctx, 200, 500, 6);
  }

  attack() {}

  isDead() {}
}

class Goblin {
  constructor() {}

  updateBB() {}

  update() {}

  draw() {}

  attack() {}

  isDead() {}
}

class Skeleton {
  constructor() {}

  updateBB() {}

  update() {}

  draw() {}

  attack() {}

  isDead() {}
}

class Eyeball {
  constructor() {}

  updateBB() {}

  update() {}

  draw() {}

  attack() {}

  isDead() {}
}

class Mushroom {
  constructor() {}

  updateBB() {}

  update() {}

  draw() {}

  attack() {}

  isDead() {}
}

class Dragon {
  constructor() {}

  updateBB() {}

  update() {}

  draw() {}

  attack() {}

  isDead() {}
}
