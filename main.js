function preload() {
	world_start = loadSound("world_start.wav");
	jump_mario = loadSound("jump.wav");
	collect_coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modelloaded);
	posenet.on('pose',gotResult);
}
function gotResult(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

	}
}
function modelloaded()
{
	console.log("Model is Loaded!");
}
function draw() {
	game()
}






