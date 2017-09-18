var resultsManager;
var resultsCardManager;
var savedCardManager;

requirejs(["card-manager", "results-manager"], function(CardManager, ResultsManager) {
    resultsManager = new ResultsManager();
    var results = resultsManager.getResults();
    var saved = resultsManager.getSaved();
    
    var _results = document.getElementById("ui-results");
    var _saved = document.getElementById("ui-saved");

    resultsCardManager = new CardManager(_results);
    savedCardManager = new CardManager(_saved);
    
    savedCardManager.setRemoveMode();
    savedCardManager.addRange(saved);
    resultsCardManager.addRange(results);

    document.getElementById("ui-show-saved").addEventListener("click", function() {
        _saved.classList.add("show");
    });

    document.getElementById("ui-close-saved").addEventListener('click', function() {
        _saved.classList.remove("show");
    });

    document.addEventListener('addproperty', function(e) {
        var result = resultsManager.findResult(e.detail);
        savedCardManager.add(result);
    });

    document.addEventListener('removeproperty', function(e) {
        savedCardManager.remove(e.detail);
    });
});