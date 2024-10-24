import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";

window.socket = io();

document.getElementById("add").onclick = function() {
    var toSend = [];
    toSend.push(document.forms["form2"]["name"].value);
    toSend.push(document.forms["form2"]["authority"].value);
    toSend.push(document.forms["form2"]["department"].value);
    toSend.push(document.forms["form2"]["salary"].value);
    for (let i =0; i< toSend.length; i++) {
        if (toSend[i] === '') {
            alert('incomplete information !');
            break;
        } else if (i == toSend.length - 1) {
            socket.emit('AddPosition',toSend);
            document.location.href="/position";
        }
    }
};

socket.emit('getPosition');

socket.on('Position', (Files) => {
    var tblBody = document.getElementsByTagName('tbody')[0];
    var row = document.createElement("tr");
    for (let i = 0; i< Files.length; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(Files[i]);
        cell.append(cellText);
        row.append(cell);
    } 
    
    var cell = document.createElement("td");
    var cellText = document.createTextNode("Dellete");
    cell.onclick = function del() {
        socket.emit('DelPosition', Files[0])
        document.location.href="/position";
    }
    cell.append(cellText);
    row.append(cell);
    
    tblBody.append(row);
});