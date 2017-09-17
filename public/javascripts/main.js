requirejs(["models/property", "results-manager"], function(Property, ResultsManager) {
    let resultsManager = new ResultsManager();
    let results = resultsManager.getResults();
    let saved = resultsManager.getSaved();
    
    let _results = document.getElementById("ui-results");
    let _saved = document.getElementById("ui-saved");

    for (let i = 0; i < results.length; i++) {
        let p =  new Property(results[i]);
        let _card = p.draw();

        _results.appendChild(_card);
    }

    for (let i = 0; i < saved.length; i++) {
        let p =  new Property(saved[i]);
        let _card = p.draw();

        _saved.appendChild(_card);
    }

    let _resultCount = document.getElementById("ui-result-count");
    _resultCount.innerText = getResultCountMessage(results.length);

    function getResultCountMessage(resultLength) {
        let propCount = resultLength === 1 ? "property" : "properties";
        return resultLength.toString() + " " + propCount + " found that matched your search criteria.";
    }
});