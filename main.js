function preload(){

}

function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    tint_color = "";
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 640 , 480);
    tint(tint_color);
}

function take_snapshot(){
    save('Picture.png');
}

function filter_tint(){
    tint_color = document.getElementById("filter_color").value;
}