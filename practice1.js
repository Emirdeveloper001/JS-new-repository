// //  function addamirbadri(params) {

// //  }

// try {
//     addamirbadri("Amir Badri");
// } catch (error) {
//     document.getElementById("results").innerHTML = error.message;
// } finally {
//     alert('finally!');
// }

// throw 750;

function myfunction()

{
    var x, message;
    x = document.getElementById('text').value;
    message = document.getElementById('p02');
    message.innerHTML = "";
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number"
        x = Number(x);
        if (x < 5) throw "too low"
        if (x > 10) throw "too high"
    } catch (err) {
        message.innerHTML = "input is " + err;
    } finally {
        x = document.getElementById('text').value = "";
    }


}