import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";

window.socket = io();

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