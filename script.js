function resultshow() {
    var csvData = "Nim,Nama,Divisi,Role,Status\n\
                   123,Arya,kntl memek,model,lulus\n\
                   456,Testing,mmemek kontol,tidak model,tidak lulus\n\
                   789,Hallo,hallooo gaisss,model boleh,lulus";

    var sname = document.getElementById("sname").value;
    var input = sname.toLowerCase(); // Menggunakan huruf kecil untuk memastikan kesesuaian nama
    var show = parseCSV(csvData)[input];

    if (show === undefined) {
        alert("No Record Found!");
    } else {
        // Redirect to the appropriate page based on pass/fail status
        if (show.Status === "lulus") {
            window.location.href = "berhasil.html?nim=" + input + "&nama=" + show.Nama + "&divisi=" + show.Divisi + "&role=" + show.Role + "&status=" + show.Status;
        } else {
            window.location.href = "gagal.html";
        }
    }
}

function parseCSV(csvData) {
    var lines = csvData.split("\n");
    var result = {};
    var headers = lines[0].split(",");
    
    for (var i = 1; i < lines.length; i++) {
        var currentLine = lines[i].split(",");
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j].trim();
        }
        result[currentLine[0].trim()] = obj;
    }
    
    return result;
}

// Function to handle the timer
// Function to handle the timer
function handleTimer() {
    var currentDate = new Date();
    var allowedDate = new Date("2023-12-17T18:01:00");  // Misalkan hari tanggal 16 - 12 - 2023 jam 1 siang

    var resultHeader = document.getElementById("resultHeader");
    var timerContainer = document.getElementById("timerContainer");
    var timer = document.getElementById("timer");
    var inputField = document.getElementById("sname");
    var submitButton = document.getElementById("submitBtn");
    var inputContainer = document.getElementById("inputContainer");
    var waitingMessage = document.getElementById("waitingMessage");
    var waitingMessageBottom = document.getElementById("waitingMessageBottom");

    if (currentDate >= allowedDate) {
        // Show elements
        resultHeader.style.display = "block";
        timerContainer.style.display = "none"; // Hide the timer when result is shown

        // Show the input and button
        inputField.style.display = "block";
        submitButton.style.display = "block";
        inputContainer.style.display = "block";
    } else {
        // Hide elements
        resultHeader.style.display = "none";
        timerContainer.style.display = "block"; // Show the timer

        // Hide the input and button
        inputField.style.display = "none";
        submitButton.style.display = "none";
        inputContainer.style.display = "none";

        // Show the waiting message
        waitingMessage.style.display = "block";
        waitingMessageBottom .style.display = "block";

        // Set up a timer to update the timer every second
        var timerInterval = setInterval(updateTimer, 1000);

        // Set a timeout to reset the page after the timer finishes
        var timeDifference = allowedDate - currentDate;
        setTimeout(function () {
            clearInterval(timerInterval); // Clear the interval
            location.reload(); // Reload the page
        }, timeDifference);
    }
}

// Function to update the timer
function updateTimer() {
    var currentDate = new Date();
    var allowedDate = new Date("2023-12-17T18:01:00");  // Misalkan hari tanggal 16 - 12 - 2023 jam 1 siang
    var timeDifference = allowedDate - currentDate;

    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var timer = document.getElementById("timer");
    timer.innerHTML = hours + "h : " + minutes + "m : " + seconds + "s";

    // Set the color of the timer text to white
    timer.style.color = "red";

    if (currentDate >= allowedDate) {
        // Hide the timer when result is shown
        var timerContainer = document.getElementById("timerContainer");
        timerContainer.style.display = "none";
    }
}

// Initialize the timer when the page loads
window.onload = function () {
    handleTimer();
};
