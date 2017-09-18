let resultsManager;
let resultsCardManager;
let savedCardManager;

requirejs(["card-manager", "results-manager"], function(CardManager, ResultsManager) {
    resultsManager = new ResultsManager();
    let results = resultsManager.getResults();
    let saved = resultsManager.getSaved();
    
    let _results = document.getElementById("ui-results");
    let _saved = document.getElementById("ui-saved");

    resultsCardManager = new CardManager(_results);
    savedCardManager = new CardManager(_saved);
    
    savedCardManager.setRemoveMode();
    savedCardManager.addRange(saved);
    resultsCardManager.addRange(results);

    document.addEventListener('addproperty', function(e) {
        let result = resultsManager.findResult(e.detail);
        savedCardManager.add(result);
    });

    document.addEventListener('removeproperty', function(e) {
        savedCardManager.remove(e.detail);
    });
});