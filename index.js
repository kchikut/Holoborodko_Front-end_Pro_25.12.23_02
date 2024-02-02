document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('multiplication-table-container');
    const table = document.createElement('table');

    const rowCount = 10;
    const colCount = 10;

    for (let i = 1; i <= rowCount; i++) {
        const row = table.insertRow();

        for (let j = 1; j <= colCount; j++) {
            const cell = row.insertCell();
            cell.textContent = i * j;
        }
    }

    tableContainer.appendChild(table);
});
