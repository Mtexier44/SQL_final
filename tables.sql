CREATE TABLE Departments (
    DepartmentID INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE Position (
    PositionID INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(50) NOT NULL,
    Authority INT,
    DepChef UUID NOT NULL,
    Salary INT,
    FOREIGN KEY (DepChef) REFERENCES Position(PositionID)
);

CREATE TABLE Employee (
    EmployeeID INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Address VARCHAR(255),
    Seniority INT,
    DepartmentID UUID NOT NULL,
    PositionID UUID NOT NULL,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID),
    FOREIGN KEY (PositionID) REFERENCES Position(PositionID)
);