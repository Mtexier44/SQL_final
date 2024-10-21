import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";

window.socket = io();

document.getElementById("Search").onclick = function() {
    var colum = document.forms["form"]["Selection"].value;
    var Search = document.forms["form"]["search"].value;
    if (Search === '' || colum === '') {
        alert('Empty Search !');
    } else {
        socket.emit('SearchEmployee',[colum,Search]);
    };
};

document.getElementById("add").onclick = function() {
    var toSend = [];
    toSend.push(document.forms["form2"]["firstname"].value);
    toSend.push(document.forms["form2"]["lastname"].value);
    toSend.push(document.forms["form2"]["adress"].value);
    toSend.push(document.forms["form2"]["seniority"].value);
    toSend.push(document.forms["form2"]["department"].value);
    toSend.push(document.forms["form2"]["position"].value);
    for (let i =0; i< toSend.length; i++) {
        if (toSend[i] === '') {
            alert('incomplete information !');
            break;
        } else if (i == toSend.length - 1) {
            socket.emit('AddEmployee',toSend);
        }
    }
};

socket.emit('getEmployee');

socket.on('Employee', (Files) => {
    var tblBody = document.getElementsByTagName('tbody')[0];
    var row = document.createElement("tr");
    for (let i = 0; i< Files.length; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(Files[i]);
        cell.append(cellText);
        row.append(cell);
    } 
    
    tblBody.append(row);
});