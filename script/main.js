import { series } from './data.js';

const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
const seriesCount = series.length;
const averageSeasons = totalSeasons / seriesCount;

console.log(`El promedio de temporadas de las series es: ${averageSeasons}`);

document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById("seriesTableContainer");
    if (tableContainer) {
        tableContainer.innerHTML = generateSeriesTable(series);
    }
});

function generateSeriesTable(series) {
    let tableHTML = `
        <table class="table">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Channel</th>
        <th scope="col">Seasons</th>
        </tr>
        </thead>
        <tbody>
    `;
    for (const serie of series) {
        tableHTML += `
        <tr>
        <th scope="row">${serie.id}</th>
        <td>${serie.name}</td>
        <td>${serie.canal}</td>
        <td>${serie.seasons}</td>
        </tr>
        `;
    }
    tableHTML += `
    <tr>
    <td colspan="3" style="text-align: right;"><strong>Promedio de temporadas:</strong></td>
    <td>${averageSeasons.toFixed(2)}</td>
    </tr>
`;

    tableHTML += `
    </tbody>
    </table>
    `;
    return tableHTML;
}


