// console.log("Hello World")

function uploadPup(element){

    console.log("Hello World", element);
    element.innerText = "Uploaded! Thank you."

}

function removeElement(element){
    element.remove();

}

function playVideo(element){
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element){
    element.src = "resources/puppy.jpeg";
}

function cookieMonster(){
    var element = document.querySelector("#cookie-box");
    element.remove();
}

function incrementLike(id){
    var element =  document.querySelector(id);
    console.log(element);
    let likeCount = Number(element.innerText);
    likeCount += 1;
    element.innerText = likeCount;

}