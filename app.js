let likesCount = document.getElementById("likes").innerHTML;

function addLikes() {
  document.getElementById("likes").innerHTML = likesCount++;
}


let disLikesCount = document.getElementById("dislikes").innerHTML;

function addDislikes() {
  document.getElementById("dislikes").innerHTML = disLikesCount++;
}