document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    const map = createMap('map', 1.3521, 103.8198);

    document.querySelector('#searchBtn').addEventListener('click', async function() {
        const searchTerms = document.querySelector('#searchTerms').value;
        const data = await search(1.3521, 103.8198, searchTerms);
    });
});