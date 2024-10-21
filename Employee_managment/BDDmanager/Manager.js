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
            socket.emit('Employee', ["exemple","exemple","exemple","exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })
    }

    getDepartement(socket) {
        socket.on('getDepartements', () => {
            socket.emit('Departements', ["exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })
    }

    getPosition(socket) {
        socket.on('getPosition', () => {
            socket.emit('Position', ["exemple","exemple","exemple","exemple","exemple","exemple"]);
            console.log("Liste émise avec succes !");
        })
    }
}

module.exports = Manager;