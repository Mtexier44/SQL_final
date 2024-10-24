document.getElementById("ID").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("ID");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Name").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Name");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[1];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("LastName").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("LastName");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[2];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Authority").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Authority");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[2];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Adress").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Adress");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[3];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Department").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Department");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[3];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Seniority").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Seniority");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[4];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Salary").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Salary");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[4];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("DepartmentID").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("DepartmentID");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[5];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};
document.getElementById("Position").onkeyup = function Search() {
  // Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Position");
filter = input.value;
table = document.getElementsByTagName("tbody")[0];
tr = table.getElementsByTagName('tr');

// Loop through all table rows, and hide those who don't match the search query
for (let i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[6];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}
};

