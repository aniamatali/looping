$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    var inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    var inputsTwo = [];
    inputsTwo.push(person1Input, person2Input, animalInput);
    alert(inputsTwo);

    $("#input1").text(inputsTwo[0]);
    $("#input2").text(inputsTwo[1]);
    $("#input3").text(inputs[5]);

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
