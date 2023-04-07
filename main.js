noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

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
    document.getElementById("text_size").innerHTML="Size of the text= "+difference+"px";
    textSize(difference);
    fill("#ffffff");
    stroke("#ffffff");
    text("Swasti",noseX,noseY);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    console.log("leftWristx="+results[0].pose.leftWrist.x);
    console.log("rightWristx="+results[0].pose.rightWrist.x);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("difference= "+difference);
}
}
