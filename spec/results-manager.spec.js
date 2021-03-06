define(['../public/javascripts/results-manager'], function (ResultsManager) {
    var resultsManager;

    beforeEach(function () {
        resultsManager = new ResultsManager();
    });

    describe('Retrieving results', function () {
        it('Should return the correct data', function () {
            var results = resultsManager.getResults();

            expect(results.length).toBe(3);
            expect(results).toContainID('1');
            expect(results).toContainID('2');
            expect(results).toContainID('3');
        });
    });

    describe('Retrieving saved properties', function() {
        it('Should return the correct data', function() {
            var saved = resultsManager.getSaved();

            expect(saved.length).toBe(1);
            expect(saved).toContainID('4');
        });
    });

    describe('Retrieving a particular result', function() {
        it('Should find the correct result', function() {
            var result = resultsManager.findResult(1);
            expect(result).not.toBeNull();

            result = resultsManager.findResult(2);
            expect(result).not.toBeNull();

            result = resultsManager.findResult(3);
            expect(result).not.toBeNull();
        });

        it('Should find the correct result with strings', function() {
            var result = resultsManager.findResult('1');
            expect(result).not.toBeNull();

            result = resultsManager.findResult("2");
            expect(result).not.toBeNull();
        });

        it('Should return null with an incorrect id', function() {
            var result = resultsManager.findResult(4);
            expect(result).toBeNull();
        });

        it('Should return null with an incorrect value', function() {
            var result = resultsManager.findResult("abc");
            expect(result).toBeNull();

            result = resultsManager.findResult({});
            expect(result).toBeNull();

            result = resultsManager.findResult(null);
            expect(result).toBeNull();

            result = resultsManager.findResult(undefined);
            expect(result).toBeNull();
        });
    });
});