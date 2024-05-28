function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
    return data;
}

function run_visualization(data) {

    // Ordre décroissant pas croissant sinon graphique dans le mauvais sens
    const sortedData = sortByCountryPopulation(data).reverse();
    
    const initialDisplayCount = 30;
    let currentDisplayCount = initialDisplayCount;

    // Créer visualisation
    function createVisualization(displayData) {
        const countryNames = displayData.map(d => d.country);
        const populations = displayData.map(d => d.population);

        const trace = {
            x: countryNames,
            y: populations,
            type: 'bar'
        };

        const layout = {
            title: 'Population par pays',
            xaxis: { title: 'Pays', tickangle: 45 },  // Rotation des étiquettes des pays
            yaxis: { title: 'Population' },
            margin: {
                b: 150  // Ajustement de la marge inférieure pour éviter le chevauchement
            }
        };

        Plotly.newPlot('data-viz', [trace], layout);
    }

    // Afficher les 30 premiers pays
    createVisualization(sortedData.slice(0, currentDisplayCount));

    // Petit ajout de boutons pour afficher + ou moins de pays (7 par 7)
    document.getElementById('show-more-btn').addEventListener('click', () => {
        currentDisplayCount += 7;
        if (currentDisplayCount > sortedData.length) {
            currentDisplayCount = sortedData.length;
        }
        createVisualization(sortedData.slice(0, currentDisplayCount));
        toggleButtons();
    });

    document.getElementById('show-less-btn').addEventListener('click', () => {
        currentDisplayCount -= 7;
        if (currentDisplayCount < initialDisplayCount) {
            currentDisplayCount = initialDisplayCount;
        }
        createVisualization(sortedData.slice(0, currentDisplayCount));
        toggleButtons();
    });

    function toggleButtons() {
        document.getElementById('show-more-btn').style.display = currentDisplayCount < sortedData.length ? 'block' : 'none';
        document.getElementById('show-less-btn').style.display = currentDisplayCount > initialDisplayCount ? 'block' : 'none';
    }
    toggleButtons();
}

fetch('data.json')
    .then(response => response.json())
    .then(data => run_visualization(data))
    .catch(error => console.error('Error loading data:', error));
