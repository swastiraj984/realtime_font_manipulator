function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
    background("#080808");
}
function gotPoses(results){
if(results>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    console.log("leftWristx="+results[0].pose.leftWrist.x);
    console.log("rightWristx="+results[0].pose.rightWrist.x);
}
}
