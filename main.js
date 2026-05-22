function showInstructions() {

    let instructions = document.getElementById("instructions");

    if (instructions.style.display == "block") {
        instructions.style.display = "none";
    }

    else {
        instructions.style.display = "block";
    }
}

function checkHeat() {
    
    let temp = Number(document.getElementById("temp").value);
    let humidity = Number(document.getElementById("humidity").value);

    let heatIndex = temp + (0.33 * humidity) - 4;

    let status = "";

    if (heatIndex < 28) {
        status = "Comfortable / Cool";
    }

    else if (heatIndex < 33) {
        status = "Warm";
    }

    else if (heatIndex < 38) {
        status = "Hot";
    }

    else if (heatIndex < 42) {
        status = "Very Hot / Caution";
    }

    else {
        status = "Extreme Heat / Danger";
    }

    document.getElementById("result").innerHTML =
        "Heat Index: " + heatIndex.toFixed(2) + "°C <br>Status: " + status;

    window.alert(
        "Heat Index: " + heatIndex.toFixed(2) + "°C\nStatus: " + status
    );
}
