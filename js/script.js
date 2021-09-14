console.log("page loaded...");

function mouseplay(element){
    // console.log(element);
    element.play();    
}

function mousestop(element){
    element.pause();
    vid.currentTime = 0;
}