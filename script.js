function resultshow() {
    var csvData = "NIM,Nama,Divisi,Role,Status,Pass\n\
    163221027,Abynaya Mulya Prabowo,,,tidak lulus,QB544P0\n\
    163221012,Hector Alianzaputra,,,tidak lulus,AQ346I0\n\
    162112433013,Heru Dwi Cahyono,Human Resource,Photovoltaic Engineer,lulus,PO258Z6\n\
    163221018,Vincentia Laura Marshanda,,,tidak lulus,YX662B1\n\
    166221032,Adista Wahyu Kristian,,,tidak lulus,AH822X6\n\
    162112433087,Dandy Satria Wibawa,Relation,Photovoltaic Engineer,lulus,HI218D9\n\
    162112433036,Dito Pramudya Ramadani,Relation,Photovoltaic Engineer,lulus,VW177B0\n\
    162112433006,Fito Prawiro Utomo,Human Resource,Photovoltaic Engineer,lulus,EH529X8\n\
    162112433061,Marwan Fadhilah,Human Resource,Scientific Writer,lulus,EL928X4\n\
    162221008,Nasya Syabilla Al-Zuhdi,,,tidak lulus,DF745D8\n\
    162221011,Ricki Agus Setiawan,,,tidak lulus,OD906B1\n\
    162112433034,Sulthon Yusuf Abdillah,Relation,Photovoltaic Engineer,lulus,WS499U9\n\
    162221004,Vita Ersalina Putri,,,tidak lulus,XR675P5\n\
    166221003,Alyssa Rania Khadijah,Admin,IoT Engineer,lulus,EE769H6\n\
    163221013,Gravano Alfa,,,tidak lulus,DC743A9\n\
    163221024,Hamas Baja Sahik Al-Jaman,,,tidak lulus,EL638I8\n\
    162112233006,Muhammad Sandi R. Saepudin,Human Resource,IoT Engineer,lulus,VN470P3\n\
    163221021,Sofiah Amanda,Creative,IoT Engineer,lulus,YB750M6\n\
    166221086,Waldi Abdilah,Relation,IoT Engineer,lulus,WX196H9\n\
    162112433025,Aditya Ramadhan Kusumabakti,Relation,IoT Engineer,lulus,AC880C0\n\
    163221055,Ahmad Daffa Abiyyu,,,tidak lulus,JL573N2\n\
    166221074,Aylwin Dheryan,,,tidak lulus,IJ114K7\n\
    162112433037,Fairus Danindra Pratama,Creative,IoT Engineer,lulus,RS922W3\n\
    162112433051,Muhammad Hubby Ali Rahmat,Creative,IoT Engineer,lulus,LJ109R8\n\
    162112433070,Kemal Iskandar Muda,Human Resource,Photovoltaic Engineer,lulus,LP592F6\n\
    166221021,Achmad Atho'illah Assakandary,Relation,IoT Engineer,lulus,UB275Z8\n\
    162221048,Sekar Rahima Sahwahita,Relation,Scientific Writer,lulus,JJ733P7\n\
    163221017,Albert Rafael,,,tidak lulus,AK908R1\n\
    166221037,Ferdi Surya Prayoga,,,tidak lulus,KX516J1\n\
    166221017,Lintar falstiawan,,,tidak lulus,SZ977Q7\n\
    166221050,Mochammad Yordan Kusumawardana,,,tidak lulus,HY156W4\n\
    166221059,Muhammad Ramadhan Sahitya,Human Resource,IoT Engineer,lulus,RP813V8\n\
    162112433085,Syafaringga Tri Putra,,,tidak lulus,DN393I8\n\
    165221040,Achmad Baihaqi Nurarsyah,Creative,Drafter,lulus,XI497P5\n\
    162112433071,Dimas Raka Buana Putra,Human Resource,IoT Engineer,lulus,ET407K1\n\
    166221006,Haikal Farabi,Creative,Drafter,lulus,ZK248O5\n\
    166221088,Albhirra Grendy Permana Putra,,,tidak lulus,EW526E7\n\
    162112433020,Falih Habibbur Rahman,,,tidak lulus,JV235P1\n\
    166221001,Feby Ananta Sari,Human Resource,Scientific Writer,lulus,SR483L0";

    var sname = document.getElementById("sname").value;
    var passwordField = document.getElementById("password");
    var password = passwordField.value;

    var input = sname.toLowerCase();
    var show = parseCSV(csvData)[input];

    if (show === undefined || password !== show.Pass) {
        alert("No Record Found or Incorrect Password!");
    } else {
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
function handleTimer() {
    var currentDate = new Date();
    var allowedDate = new Date("2024-01-03T13:20:00");  // Misalkan hari tanggal 16 - 12 - 2023 jam 1 siang

    var resultHeader = document.getElementById("resultHeader");
    var timerContainer = document.getElementById("timerContainer");
    var timer = document.getElementById("timer");
    var inputField = document.getElementById("sname");
    var submitButton = document.getElementById("submitBtn");
    var inputContainer = document.getElementById("inputContainer");
    var waitingMessage = document.getElementById("waitingMessage");
    var waitingMessageBottom = document.getElementById("waitingMessageBottom");
    var inputContainer2 = document.getElementById("inputContainer2");

    if (currentDate >= allowedDate) {
        // Show elements
        resultHeader.style.display = "block";
        timerContainer.style.display = "none"; // Hide the timer when result is shown

        // Show the input and button
        inputField.style.display = "block";
        submitButton.style.display = "block";
        inputContainer.style.display = "block";
        inputContainer2.style.display = "block";
    } else {
        // Hide elements
        resultHeader.style.display = "none";
        timerContainer.style.display = "block"; // Show the timer

        // Hide the input and button
        inputField.style.display = "none";
        submitButton.style.display = "none";
        inputContainer.style.display = "none";
        inputContainer2.style.display = "none";

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
    var allowedDate = new Date("2024-01-03T13:20:00");  // Misalkan hari tanggal 16 - 12 - 2023 jam 1 siang
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
