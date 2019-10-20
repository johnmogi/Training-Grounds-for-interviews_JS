document.addEventListener("DOMContentLoaded", function (event) {
    const chooseColor = document.getElementById("chooseC");
    chooseColor.addEventListener("click", notifyA)
});

// const chooseColor = document.getElementById("chooseC");
// var pp2 = document.getElementsByClassName("choseP")

// pp2[0].addEventListener("click", notifyA)


function notifyA() {
    alert(
        "You have chosen the color : " + chooseC.value +
        "Amount chosen : " +
        "You have chosen the color : " +
        "Amount chosen : "
    )
}