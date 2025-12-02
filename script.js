function createTable() {
    // Ask for rows and columns
    var rowsInput = prompt("Input number of rows");
    var colsInput = prompt("Input number of columns");

    // Convert to numbers
    var rows = parseInt(rowsInput);
    var cols = parseInt(colsInput);

    // If non-numeric, do nothing
    if (isNaN(rows) || isNaN(cols)) {
        return;
    }

    // If 0 or negative → alert and do nothing
    if (rows <= 0 || cols <= 0) {
        alert("Please enter positive numbers only");
        return;
    }

    // Get table element
    var table = document.getElementById("myTable");

    // Clear previous table content
    table.innerHTML = "";

    // Create table dynamically
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");

        for (var j = 0; j < cols; j++) {
            var td = document.createElement("td");
            // 0-based indices, required format:
            td.innerHTML = "Row-" + i + " Column-" + j;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
