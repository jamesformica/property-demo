define([
    '../public/javascripts/models/property',
    '../public/javascripts/results-manager'],
    function (Property, ResultsManager) {
        var responseData;
        var firstResult;

        // deserialise the data and populate the first result into a variable
        beforeEach(function () {
            var resultsManager = new ResultsManager();
            responseData = resultsManager.getResults();
            firstResult = responseData[0];
        });

        describe('Instantiating a Property class', function () {

            it('should contain the correct passed data', function () {
                var prop = new Property(firstResult);

                expect(prop.id.toString()).toBe(firstResult.id);
                expect(prop.price).toBe(firstResult.price);
                expect(prop.image).toBe(firstResult.mainImage);
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe(firstResult.agency.brandingColors.primary);
                expect(prop.agency.logo).toBe(firstResult.agency.logo);
            });

            it('should deal with undefined data', function () {
                firstResult.id = undefined;
                firstResult.price = undefined;
                firstResult.mainImage = undefined;
                firstResult.agency = undefined;

                var prop = new Property(firstResult);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with null data', function () {
                firstResult.id = null;
                firstResult.price = null;
                firstResult.mainImage = null;
                firstResult.agency = null;

                var prop = new Property(firstResult);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with no data (null)', function () {
                var prop = new Property(null);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with no data (undefined)', function () {
                var prop = new Property(undefined);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with the wrong data type', function () {
                var prop = new Property("chicken");

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with the wrong data type on agency', function () {
                firstResult.agency = "turtle";
                var prop = new Property(firstResult);

                expect(prop.id.toString()).toBe(firstResult.id);
                expect(prop.price).toBe(firstResult.price);
                expect(prop.image).toBe(firstResult.mainImage);
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });
        });

        describe('Calling "draw" on a Property class', function () {
            it('should return a card element', function() {
                var prop = new Property(firstResult);
                var _card = prop.draw();
        
                expect(_card).not.toBeNull();
                expect(_card).not.toBeUndefined();
            });

        });
    });