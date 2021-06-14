const addLike = (function () {
    let currentCount = document.getElementById("likes").innerHTML;
    return function () {
       currentCount++;
       return document.getElementById("likes").innerHTML = currentCount;
    }
})();


const addDislike = (function () {
    let currentCount = document.getElementById("dislikes").innerHTML;
    return function () {
       currentCount++;
       return document.getElementById("dislikes").innerHTML = currentCount;
    }
})();