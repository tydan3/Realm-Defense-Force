var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

//queue download
ASSET_MANAGER.queueDownload("./sprites/monster/slime/slime1_front.png");
ASSET_MANAGER.queueDownload("./prototype-tower.png");
ASSET_MANAGER.queueDownload("./Level/map_prototype.png");
ASSET_MANAGER.queueDownload("./sprites/other/bullet_tomato.png")

ASSET_MANAGER.downloadAll(function () {
  var canvas = document.getElementById("gameWorld");
  var ctx = canvas.getContext("2d");

  
  gameEngine.init(ctx);
  
  var map = ASSET_MANAGER.getAsset("./Level/map_prototype.png");
  var level = new Level(gameEngine, map, 0, 0, 0, 0, 600, 400, 1.5, 1);
  gameEngine.addEntity(level);

  gameEngine.addEntity(new Slime(gameEngine, 10, 300));

  gameEngine.addEntity(new Tower(gameEngine, 66, 175));


  gameEngine.start();
});
