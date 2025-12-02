
	function createTable() {
    // Ask for rows and columns
    const rows = parseInt(prompt("Input number of rows"));
    const cols = parseInt(prompt("Input number of columns"));

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
    const table = document.getElementById("myTable");

    // Clear previous table content
    table.innerHTML = "";

    // Create table dynamically
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = Row-${i} Column-${j};
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

  

