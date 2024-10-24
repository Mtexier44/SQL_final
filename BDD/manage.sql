INSERT INTO Employee (Name, LastName, Address, Seniority, DepartmentID, PositionID)
VALUES (p_Name, p_LastName, p_Address, p_Seniority, p_DepartmentID, p_PositionID);

UPDATE Employee
SET Name = p_Name,
    LastName = p_LastName,
    Address = p_Address,
    Seniority = p_Seniority,
    DepartmentID = p_DepartmentID,
    PositionID = p_PositionID
WHERE EmployeeID = p_EmployeeID;

DELETE FROM Employee 
WHERE EmployeeID = p_EmployeeID;

INSERT INTO Departments (Name) 
VALUES (p_Name);

UPDATE Departments
SET Name = p_Name
WHERE DepartmentID = p_DepartmentID;

DELETE FROM Departments 
WHERE DepartmentID = p_DepartmentID;

INSERT INTO Position (Name, Authority, DepChef, Salary)
VALUES (p_Name, p_Authority, p_DepChef, p_Salary);

UPDATE Position
SET Name = p_Name,
    Authority = p_Authority,
    DepChef = p_DepChef,
    Salary = p_Salary
WHERE PositionID = p_PositionID;

DELETE FROM Position 
WHERE PositionID = p_PositionID;
