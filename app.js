var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");
var inp4 = document.getElementById("inp4");
var tableBody = document.getElementById("tableData");
var tableData = [];
var TS = document.getElementById("TS");

function addVal() {
    var a = inp1.value;
    var b = inp2.value;
    var c = inp3.value;
    var d = inp4.value;
    var obj = {
        firstName: a,
        lastName: b,
        Age: c,
        email: d,
        id: Math.random()
    };
    if (!a || !b || !c) {
        alert("Fill the complete Data");
        return;
    } else {
        tableData.push(obj);
        render();
        inp1.value = "";
        inp2.value = "";
        inp3.value = "";
        inp4.value = "";
        saveData();
    }
}

function render() {
    tableBody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = tableData[i].firstName;
        cell3.innerHTML = tableData[i].lastName;
        cell4.innerHTML = tableData[i].Age;
        cell5.innerHTML = tableData[i].email;
        cell6.innerHTML = tableData[i].id;
    }
    TS.innerHTML = tableData.length;
}

function saveData() {
    localStorage.setItem("stddata", JSON.stringify(tableData));
}

function showData() {
    var storedData = localStorage.getItem("stddata");
    if (storedData) {
        tableData = JSON.parse(storedData);
        render();
    }
}
showData();
