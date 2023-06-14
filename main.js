left_wrist=0;
right_wrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(10,100);
    canvas=createCanvas(700,400);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function draw(){
    background("#EAB2E8");
    textSize(difference);
    fill("#C70039");
    text("You're the best!",20,250);
}
function gotPoses(result){
    if (result.length>0){
        console.log(result);
        left_wrist=result[0].pose.leftWrist.x;
        right_wrist=result[0].pose.rightWrist.x;
        console.log("Wrist_left= "+left_wrist, " Wrist_right= "+right_wrist);
        difference=floor(left_wrist-right_wrist);
    }
}