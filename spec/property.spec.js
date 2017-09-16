define(['../public/javascripts/models/property',
        '../public/javascripts/mock-data'],
        function (Property, MockData) {

    describe('Creating Properties', function () {

        it('should work with full data', function () {
            
            var responseData = JSON.parse(MockData.data);

            debugger;
            var prop = new Property(responseData.results[0]);

            //expect(prop.id).toEqual(2);
        });
    });
});