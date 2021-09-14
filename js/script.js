console.log("page loaded...");

function mouseplay(element){
    // console.log(element);
    element.play();  
    element.controls = 0;  
}

function mousestop(element){
    element.pause();
    element.currentTime = 0;
    element.controls = true;

}