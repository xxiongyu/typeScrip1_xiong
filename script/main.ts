import { series } from './data';    
import { Serie } from './serie';

let totalSeasons = 0;
let seriesCount = 0;

for (let serie of series) {
    totalSeasons += serie.seasons;
    seriesCount++;
}

const averageSeasons = totalSeasons / seriesCount;
console.log(`El promedio de temporadas de las series es: ${averageSeasons}`);


document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById("seriesTableContainer");
    if (tableContainer) {
        tableContainer.innerHTML = generateSeriesTable(series);
    }
});

// Generar el HTML de la tabla con los datos de las series
function generateSeriesTable(series: Serie[]): string {
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

    for (let serie of series) {
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
            </tbody>
        </table>
    `;
    
    return tableHTML;
}


