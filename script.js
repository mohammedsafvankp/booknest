function slideLeft(id){
document.getElementById(id).scrollBy({
left:-300,
behavior:'smooth'
});
}

function slideRight(id){
document.getElementById(id).scrollBy({
left:300,
behavior:'smooth'
});
}