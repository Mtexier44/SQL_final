CREATE PROCEDURE AddEmployee(
    IN p_Name VARCHAR(50),
    IN p_LastName VARCHAR(50),
    IN p_Address VARCHAR(255),
    IN p_Seniority INT,
    IN p_DepartmentID INT,
    IN p_PositionID INT
)
    INSERT INTO Employee (Name, LastName, Address, Seniority, DepartmentID, PositionID)
    VALUES (p_Name, p_LastName, p_Address, p_Seniority, p_DepartmentID, p_PositionID);

CREATE PROCEDURE UpdateEmployee(
    IN p_EmployeeID INT,
    IN p_Name VARCHAR(50),
    IN p_LastName VARCHAR(50),
    IN p_Address VARCHAR(255),
    IN p_Seniority INT,
    IN p_DepartmentID INT,
    IN p_PositionID INT
)

    UPDATE Employee
    SET Name = p_Name,
        LastName = p_LastName,
        Address = p_Address,
        Seniority = p_Seniority,
        DepartmentID = p_DepartmentID,
        PositionID = p_PositionID
    WHERE EmployeeID = p_EmployeeID;


CREATE PROCEDURE DeleteEmployee(
    IN p_EmployeeID INT
)

    DELETE FROM Employee WHERE EmployeeID = p_EmployeeID;

CREATE PROCEDURE AddDepartment(
    IN p_Name VARCHAR(50)
)

    INSERT INTO Departments (Name) VALUES (p_Name);

CREATE PROCEDURE UpdateDepartment(
    IN p_DepartmentID INT,
    IN p_Name VARCHAR(50)
)
    UPDATE Departments
    SET Name = p_Name
    WHERE DepartmentID = p_DepartmentID;

CREATE PROCEDURE DeleteDepartment(
    IN p_DepartmentID INT
)

    DELETE FROM Departments WHERE DepartmentID = p_DepartmentID;

CREATE PROCEDURE AddPosition(
    IN p_Name VARCHAR(50),
    IN p_Authority INT,
    IN p_DepChef INT,
    IN p_Salary INT
)

    INSERT INTO Position (Name, Authority, DepChef, Salary)
    VALUES (p_Name, p_Authority, p_DepChef, p_Salary);

CREATE PROCEDURE UpdatePosition(
    IN p_PositionID INT,
    IN p_Name VARCHAR(50),
    IN p_Authority INT,
    IN p_DepChef INT,
    IN p_Salary INT
)

    UPDATE Position
    SET Name = p_Name,
        Authority = p_Authority,
        DepChef = p_DepChef,
        Salary = p_Salary
    WHERE PositionID = p_PositionID;

CREATE PROCEDURE DeletePosition(
    IN p_PositionID INT
)

    DELETE FROM Position WHERE PositionID = p_PositionID;