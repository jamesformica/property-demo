requirejs(["card-manager", "results-manager"], function(CardManager, ResultsManager) {
    var resultsManager = new ResultsManager();
    var results = resultsManager.getResults();
    var saved = resultsManager.getSaved();
    
    // find the two columns and instantiate CardManagers for both
    var _results = document.getElementById("ui-results");
    var _saved = document.getElementById("ui-saved");

    var resultsCardManager = new CardManager(_results);
    var savedCardManager = new CardManager(_saved);
    
    savedCardManager.setRemoveMode();
    savedCardManager.setSticky();

    // add the results to the managers, this will draw them on the DOM
    savedCardManager.addRange(saved);
    resultsCardManager.addRange(results);

    // when in mobile, listen for the click event that will show the list of saved properties
    document.getElementById("ui-show-saved").addEventListener("click", function() {
        _saved.classList.add("show");
    });

    // when in mobile, clicking the 'x' on the saved properties needs to close the popup
    document.getElementById("ui-close-saved").addEventListener("click", function() {
        _saved.classList.remove("show");
    });

    // listen for the "addproperty" event and add it to the Saved Properties CardManager
    document.addEventListener("addproperty", function(e) {
        var result = resultsManager.findResult(e.detail);
        savedCardManager.add(result);
    });

    // list for the "removeproperty" events and remove it from the Saved Properties CardManager
    document.addEventListener("removeproperty", function(e) {
        savedCardManager.remove(e.detail);
    });
});