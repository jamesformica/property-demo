requirejs(["models/property", "mock-data"], function(Property, mockdata) {
    let resultData = JSON.parse(mockdata.data);
    
    let _results = document.getElementById("ui-results");
    let _saved = document.getElementById("ui-saved");

    for (let i = 0; i < resultData.results.length; i++) {
        let p =  new Property(resultData.results[i]);
        let _card = p.draw();

        _results.appendChild(_card);
    }

    for (let i = 0; i < resultData.saved.length; i++) {
        let p =  new Property(resultData.results[i]);
        let _card = p.draw();

        _saved.appendChild(_card);
    }

    let _resultCount = document.getElementById("ui-result-count");
    _resultCount.innerText = getResultCountMessage(resultData.results.length);

    function getResultCountMessage(resultLength) {
        let propCount = resultLength === 1 ? "property" : "properties";
        return resultLength.toString() + " " + propCount + " found that matched your search criteria.";
    }
});