define([
    '../public/javascripts/card-manager',
    '../public/javascripts/results-manager'],
    function (CardManager, ResultsManager) {
        var results;
        var cardManager;
        var _tempElement;

        beforeEach(function () {
            var resultsManager = new ResultsManager();
            results = resultsManager.getResults();

            _tempElement = document.createElement("div");
            cardManager = new CardManager(_tempElement);
        });

        describe('Adding a card', function () {
            it('should add a valid result', function () {
                cardManager.add(results[0]);
                var keyValue = cardManager.cardMap.entries().next().value;

                expect(cardManager.cardMap.size).toBe(1);
                expect(keyValue[0]).not.toBeNull();
                expect(keyValue[1]).not.toBeNull();
                expect(_tempElement.children.length).toBe(1);
            });

            it('should not add an invalid result', function () {
                cardManager.add(null);
                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);

                cardManager.add(undefined);
                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);
            });
        });

        describe('Adding multiple cards', function () {
            it('should add multiple valid results', function () {
                cardManager.addRange(results);

                expect(cardManager.cardMap.size).toBe(3);
                expect(_tempElement.children.length).toBe(3);
            });

            it('should not add invalid results', function () {
                cardManager.addRange(null);

                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);
            });

            it('should not add types other than array', function () {
                cardManager.addRange("abc");

                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);

                cardManager.addRange({});

                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);

                cardManager.addRange(567);

                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);
            });
        });

        describe('Removing a card', function () {
            it('should remove a valid id', function () {
                cardManager.add(results[0]);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                var removeID = Number(results[0].id);
                cardManager.remove(removeID);

                expect(cardManager.cardMap.size).toBe(0);
                expect(_tempElement.children.length).toBe(0);
            });

            it('should remove only the correct id', function () {
                cardManager.add(results[0]);
                cardManager.add(results[1]);

                expect(cardManager.cardMap.size).toBe(2);
                expect(_tempElement.children.length).toBe(2);

                var removeID = Number(results[1].id);
                cardManager.remove(removeID);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                var keyValue = cardManager.cardMap.entries().next().value;
                var property = keyValue[0];
                expect(property.id).toBe(Number(results[0].id));
            });

            it('should not remove an id that does not exist', function () {
                cardManager.add(results[0]);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                cardManager.remove(15);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);
            });

            it('should handle null values', function () {
                cardManager.add(results[0]);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                cardManager.remove(null);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                cardManager.remove(undefined);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);
            });

            it('should handle invalid values', function () {
                cardManager.add(results[0]);

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                cardManager.remove({});

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);

                cardManager.remove("abc");

                expect(cardManager.cardMap.size).toBe(1);
                expect(_tempElement.children.length).toBe(1);
            });
        });
    }
)