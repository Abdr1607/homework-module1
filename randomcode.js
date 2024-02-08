/*function generateCode() {
    var code = '';
    var getCode = '';
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length;
        code += str.charAt(char)
    }
    return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    var enteredCode = codebox.value;
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();

    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}

disableButton();*/


function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    return code;
}

var code = generateCode(); // Store generated code in a variable for later comparison
document.getElementById("codes").innerHTML = code; // Display the generated code

function disableButton(btnvalue) {
    var button = document.getElementById("submit");
    button.disabled = btnvalue;
    if (btnvalue) {
        button.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        button.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        button.style.backgroundColor = "rgba(73, 119, 209, 1)";
        button.style.color = "rgba(255, 255, 255, 1)";
    }
}

function evaluateCode() {
    var enteredCode = document.getElementsByName("randomcode")[0].value; 
    if (enteredCode.length === code.length && enteredCode === code) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

// Call disableButton with true as soon as the code is generated to ensure the button starts disabled
disableButton(true);

// Assuming you have an input field for the user to type the code, set up the event listener
document.getElementsByName("randomcode")[0].addEventListener("input", evaluateCode);
