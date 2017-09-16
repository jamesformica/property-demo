define([
    '../public/javascripts/models/property',
    '../public/javascripts/mock-data'],
    function (Property, MockData) {
        var responseData;
        var firstResult;

        // deserialise the data and populate the first result into a variable
        beforeEach(function () {
            responseData = JSON.parse(MockData.data);
            firstResult = responseData.results[0];
        });

        describe('Instantiating a Property class', function () {

            it('should contain the correct passed data', function () {
                let prop = new Property(firstResult);

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

                let prop = new Property(firstResult);

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

                let prop = new Property(firstResult);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with no data (null)', function () {
                let prop = new Property(null);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with no data (undefined)', function () {
                let prop = new Property(undefined);

                expect(prop.id).toBe(-1);
                expect(prop.price).toBe("");
                expect(prop.image).toBe("");
                expect(prop.agency).not.toBeNull();
                expect(prop.agency).not.toBeUndefined();
                expect(prop.agency.primaryColour).toBe("");
                expect(prop.agency.logo).toBe("");
            });

            it('should deal with the wrong data type', function () {
                let prop = new Property("chicken");

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
                let prop = new Property(firstResult);

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
                let prop = new Property(firstResult);
                let _card = prop.draw();
        
                expect(_card).not.toBeNull();
                expect(_card).not.toBeUndefined();
            });

        });
    });