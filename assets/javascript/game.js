


var rando = ((Math.floor(Math.random() * 102)) + 19);

var numberTotal = 0;
var wins = 0;
var losses = 0;

$("#score").text(rando);



var crystal1 = (Math.floor(Math.random() * 12) + 1);
var crystal2 = (Math.floor(Math.random() * 12) + 1);
var crystal3 = (Math.floor(Math.random() * 12) + 1);
var crystal4 = (Math.floor(Math.random() * 12) + 1);


$("#crystal1").on("click", function () {
    numberTotal += crystal1;
    console.log(numberTotal);
    $("#total").html(numberTotal);
});

$("#crystal2").on("click", function () {
    numberTotal += crystal2;
    console.log(numberTotal);
    $("#total").html(numberTotal);
});

$("#crystal3").on("click", function () {
    numberTotal += crystal3;
    console.log(numberTotal);
    $("#total").html(numberTotal);
});

$("#crystal4").on("click", function () {
    numberTotal += crystal4;
    console.log(numberTotal);
    $("#total").html(numberTotal);
});




if (numberTotal == Number(rando)) {
    alert("YOU WIN!!!");
    wins++;
    crystal1 = (Math.floor(Math.random() * 12) + 1);
    crystal2 = (Math.floor(Math.random() * 12) + 1);
    crystal3 = (Math.floor(Math.random() * 12) + 1);
    crystal4 = (Math.floor(Math.random() * 12) + 1);
    numberTotal = 0;
    $("#wins").html(wins);
    console.log("win");
}
else if (numberTotal > Number(rando)) {
    alert("YOU LOSE!!!");
    losses++;
    crystal1 = (Math.floor(Math.random() * 12) + 1);
    crystal2 = (Math.floor(Math.random() * 12) + 1);
    crystal3 = (Math.floor(Math.random() * 12) + 1);
    crystal4 = (Math.floor(Math.random() * 12) + 1);
    numberTotal = 0;
    $("#losses").html(losses);
    console.log("lose");
}
