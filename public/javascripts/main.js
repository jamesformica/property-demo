requirejs(["card-manager", "results-manager"], function(CardManager, ResultsManager) {
    let resultsManager = new ResultsManager();
    let results = resultsManager.getResults();
    let saved = resultsManager.getSaved();
    
    let _results = document.getElementById("ui-results");
    let _saved = document.getElementById("ui-saved");

    let resultsCardManager = new CardManager(_results);
    let savedCardManager = new CardManager(_saved);

    resultsCardManager.addRange(results);
    savedCardManager.addRange(saved);

    let _resultCount = document.getElementById("ui-result-count");
    _resultCount.innerText = getResultCountMessage(results.length);

    function getResultCountMessage(resultLength) {
        let propCount = resultLength === 1 ? "property" : "properties";
        return resultLength.toString() + " " + propCount + " found that matched your search criteria.";
    }
});