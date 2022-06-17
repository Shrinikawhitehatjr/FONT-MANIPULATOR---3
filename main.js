function setup(){
    canvas = createCanvas(550, 150);
    video.size(550, 500);

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('poses', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Initialized');
}

function gotPoses(results){
     if(results.length > 0);
     {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = leftWristX - rightWristY;
        difference = floor(leftWristX - leftWristX);
        console.log("LeftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = "+ difference);
     }
}
function draw(){
    backgorund('#969A97');
}
function textSize(){
    text.size(85);
    Fill('#F90093;');
    text(x = 10,20,30,40,50, y = 10,100,200,300);
}
