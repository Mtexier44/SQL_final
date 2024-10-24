var {Server} = require("socket.io");
var sq = require('sqlite3');


class Manager{
    io;
    db = new sq.Database('../BDD/data.db', sq.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connecté à la base de données SQLite.');
        }
    });

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
            this.db.each("SELECT * FROM Employee", function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    socket.emit('Employee', [row.EmployeeID,row.Name,row.LastName,row.Address,row.Seniority,row.DepartmentID,row.PositionID]);
                }
            });
            console.log("Liste émise avec succes !");
        })

        socket.on('AddEmployee', (list) => {
            this.db.run("INSERT INTO Employee (Name, LastName, Address, Seniority, DepartmentID, PositionID) VALUES (?, ?, ?, ?, ?, ?)", list)
            console.log(list);
        })

        socket.on('DelEmployee', (ID) => {
            this.db.run("DELETE FROM Employee WHERE EmployeeID = ?", ID)
        })
    }

    getDepartement(socket) {
        socket.on('getDepartements', () => {
            this.db.each("SELECT * FROM Departments", function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    socket.emit('Departements', [row.DepartmentID,row.Name]);
                }
            });
            console.log("Liste émise avec succes !");
        })

        socket.on('AddDepartment', (list) => {
            this.db.run("INSERT INTO Departments (Name) VALUES (?)", list)
            console.log(list);
        })

        socket.on('DelDepartement', (ID) => {
            this.db.run("DELETE FROM Departments WHERE DepartmentID = ?", ID)
        })
    }

    getPosition(socket) {
        socket.on('getPosition', () => {
            this.db.each("SELECT * FROM Position", function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    socket.emit('Position', [row.PositionID,row.Name,row.Authority,row.DepChef,row.Salary]);
                }
            });
            console.log("Liste émise avec succes !");
        })

        socket.on('AddPosition', (list) => {
            this.db.run("INSERT INTO Position (Name, Authority, DepChef, Salary) VALUES (?, ?, ?, ?)", list)
            console.log(list);
        })

        socket.on('DelPosition', (ID) => {
            this.db.run("DELETE FROM Position WHERE PositionID = ?", ID)
        })
    }
}

module.exports = Manager;