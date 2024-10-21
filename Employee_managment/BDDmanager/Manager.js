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
            socket.emit('Employee', ["exemple","exemple","exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('SearchEmployee', (list) => {
            console.log(list);
        })

        socket.on('AddEmployee', (list) => {
            console.log(list);
        })
    }

    getDepartement(socket) {
        socket.on('getDepartements', () => {
            socket.emit('Departements', ["exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('SearchDepartment', (list) => {
            console.log(list);
        })

        socket.on('AddDepartment', (list) => {
            console.log(list);
        })
    }

    getPosition(socket) {
        socket.on('getPosition', () => {
            socket.emit('Position', ["exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })

        socket.on('SearchPosition', (list) => {
            console.log(list);
        })

        socket.on('AddPosition', (list) => {
            console.log(list);
        })
    }
}

module.exports = Manager;