requirejs(["models/property", "mock-data"], function(Property, mockdata) {
    var resultData = JSON.parse(mockdata.data);
    var property1 = new Property(resultData.results[0]);
});