function incrementLikes(id){
    var element = document.querySelector(id);
    element.innerText =  Number(element.innerText) + 1;

}