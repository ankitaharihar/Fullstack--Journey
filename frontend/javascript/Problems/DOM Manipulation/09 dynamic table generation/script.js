const tableData = [
    ["Name", "Age"],
    ["Alice", 25],
    ["Bob", 30],
];

const tableContainer = document.querySelector("#tableContainer");
const table = document.createElement("table");

tableData.forEach((rowData, rowIndex) => {
    const tableRow = document.createElement("tr");

    rowData.forEach((cellData) => {
        const cell = document.createElement(rowIndex === 0 ? "th" : "td");

        cell.textContent = cellData;
        tableRow.appendChild(cell);
    });

    table.appendChild(tableRow);
});

tableContainer.appendChild(table);