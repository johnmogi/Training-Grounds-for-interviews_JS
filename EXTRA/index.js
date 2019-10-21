document.addEventListener("DOMContentLoaded", function (event) {

    // window.addEventListener("load", define)
    // function define() {
    const chooseColor = document.getElementById("chooseC");
    chooseColor.addEventListener("click", notifyA)
    // }
});

// const chooseColor = document.getElementById("chooseC");
// var pp2 = document.getElementsByClassName("choseP")

// pp2[0].addEventListener("click", notifyA)
var counter = 0;

function notifyA() {

    // const breaker = document.createElement("br")
    counter++
    setTimeout(() => {
        alert(
            "You have chosen the color : " + chooseC.value +
            "\nAmount chosen : " + counter +
            "\n Previously You have chosen the color : " +
            "\nAmount of yimes previously chosen : "
        )
    }, 5000);

}