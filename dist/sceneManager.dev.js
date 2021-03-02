"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager =
/*#__PURE__*/
function () {
  function SceneManager(game, ctx) {
    _classCallCheck(this, SceneManager);

    Object.assign(this, {
      game: game,
      ctx: ctx
    });
    this.game = game;
    this.game.camera = this;
    ASSET_MANAGER.getAsset("./soundeffects/BGM.mp3");
    this.BGM = new Audio("./soundeffects/BGM.mp3"); //  this.user = this.game.user;
    //	this.base = this.game.base;

    this.levelMap = {
      xCanvas: 150,
      yCanvas: 0,
      width: 900,
      height: 600
    };
    this.canvasMap = {
      width: PARAMS.WIDTH,
      height: PARAMS.HEIGHT
    }; // Pause Screen

    this.paused = false; //	this.game.paused = this.paused;
    // Game Speed

    this.speed = 1; //	this.game.speed = this.speed;
    // Game Mute

    this.muted = false; // Load the prototype level, along with user and tower store menus, to the game engine

    this.loadGamePrototype();
  }

  _createClass(SceneManager, [{
    key: "loadGamePrototype",
    value: function loadGamePrototype() {
      // user entity created first 
      this.user = new User(this.game);
      this.game.addEntity(this.user); // level entity

      var map = ASSET_MANAGER.getAsset("./Level/images/map_prototype.png");
      var level = new Level(gameEngine, map, this.levelMap.xCanvas, this.levelMap.yCanvas, 0, 0, 600, 400, 1.5, 1, this.ctx);
      this.game.addEntity(level); // After level entity is added to game engine, new field 'levelEnemyWaves' is 
      // put into level to ensure enemies are drawn on top of map image
      // level.levelEnemyWaves = new LevelWave(level);
      // tower store menu

      var towerStoreMenu = new TowerStoreMenu(gameEngine, 1055, 55, this.ctx, level);
      this.game.addEntity(towerStoreMenu); // user menu

      var userMenu = new UserMenu(gameEngine, 5, 55, this.ctx, level);
      this.game.addEntity(userMenu); // description box

      var descriptionMenu = new DescriptionBox(gameEngine, 5, 605, this.ctx, level);
      this.game.addEntity(descriptionMenu); // hud

      var hud = new HUD(gameEngine, 5, 5, this.ctx, level);
      this.game.addEntity(hud);
    }
  }, {
    key: "update",
    value: function update() {//	this.muted = this.game.muted;
      //	this.speed = this.game.speed;
      //	this.paused = this.game.paused;
    }
  }, {
    key: "addCoin",
    value: function addCoin() {}
  }, {
    key: "draw",

    /*
    Display the game stats
    */
    value: function draw(ctx) {
      if (this.paused) this.drawPauseScreen(ctx);
      if (this.muted || this.paused) this.muteBGM();else {
        this.BGM.volume = 0.1;
        this.BGM.muted = false;
        this.BGM.play();
      }
    }
  }, {
    key: "muteBGM",

    /*
      Mute the background music
    */
    value: function muteBGM() {
      this.BGM.volume = 0;
      this.BGM.play();
    }
  }, {
    key: "drawPauseScreen",

    /*
     draw the transparent pause screen on the level map
    */
    value: function drawPauseScreen(ctx) {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "black";
      ctx.fillRect(this.levelMap.xCanvas, this.levelMap.yCanvas, this.levelMap.width, this.levelMap.height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "white";
      ctx.font = "60px Langar, cursive, serif, sans-serif";
      var canvasWidthCenter = this.game.ctx.canvas.width;
      var centerX = (canvasWidthCenter - this.game.ctx.measureText("Paused").width) / 2;
      ctx.fillText("Paused", centerX, 600 / 2);
      ctx.font = "20px Langar, cursive, serif, sans-serif";
      var pauseSubtitle = "Click Resume to Continue Game";
      centerX = (canvasWidthCenter - this.game.ctx.measureText(pauseSubtitle).width) / 2;
      ctx.fillText(pauseSubtitle, centerX, 700 / 2);
      ctx.closePath();
    }
  }]);

  return SceneManager;
}();