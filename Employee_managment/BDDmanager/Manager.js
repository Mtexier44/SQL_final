var {Server} = require("socket.io");

class Manager{
    io;

    constructor(serveur) {
        this.io = new Server(serveur);

        this.io.on("connection", (socket) => {
            console.info(`Client connected [id=${socket.id}]`);
            console.log(this.io.sockets.server.engine.clientsCount);
            
            this.getEmployee(socket);
            this.getDepartement(socket);
            this.getPosition(socket);
        })
    }

    static getInstance(serveur) {
        if (!this.instance) {
          this.instance = new Manager(serveur);
        }
        return this.instance;
    }

    getEmployee(socket) {
        socket.on('getEmployee', () => {
            // ajoputer requéte sql
            socket.emit('Employee', ["exemple","exemple","exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('AddEmployee', (list) => {
            // ajoputer requéte sql
            console.log(list);
        })

        socket.on('DelEmployee', (ID) => {
            // ajoputer requéte sql
            console.log("you did it")
        })
    }

    getDepartement(socket) {
        socket.on('getDepartements', () => {
            // ajoputer requéte sql
            socket.emit('Departements', ["exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('AddDepartment', (list) => {
            // ajoputer requéte sql
            console.log(list);
        })

        socket.on('DelDepartement', (ID) => {
            // ajoputer requéte sql
        })
    }

    getPosition(socket) {
        socket.on('getPosition', () => {
            // ajoputer requéte sql
            socket.emit('Position', ["exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('AddPosition', (list) => {
            // ajoputer requéte sql
            console.log(list);
        })

        socket.on('DelPosition', (ID) => {
            // ajoputer requéte sql
        })
    }
}

module.exports = Manager;