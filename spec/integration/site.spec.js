var selenium = require('selenium-webdriver');

describe('4realestate base functionality', function () {

    // open the browser and navigate to the home page of the hosted instance before each test
    beforeEach(function (done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        var driver = this.driver;
        this.driver.get('http://fourrealestate.herokuapp.com/').then(
            function() {
                // wait for the "cards" to show up before we start interacting with the DOM
                return driver.wait(function() {
                    return driver.findElements(selenium.By.className("card"))
                        .then(function(elements) {
                            return elements.length > 0;
                        })
                }, 9000).then(done);
            }
        );
    });

    // kill the web driver with fire!!!! after each test
    afterEach(function (done) {
        this.driver.quit().then(done);
    });

    it('Should be on the home page', function (done) {
        var _element = this.driver.findElement(selenium.By.tagName("body"));

        expect(_element).not.toBeNull();
        done();
    });

    it('Should allow the user to add a property', function (done) {
        var driver = this.driver;
        var _results = driver.findElement(selenium.By.id("ui-results"));
        var _saved = driver.findElement(selenium.By.id("ui-saved"));

        _saved.findElements(selenium.By.className("card")).then(function (elements) {
            expect(elements.length).toBe(1);

            var _firstCard = _results.findElement(selenium.By.className("card"));
            // make the button appear (for hover reasons)
            driver.actions().click(_firstCard).perform();

            var _button = _firstCard.findElement(selenium.By.tagName("button"));
            // click the button
            driver.actions().click(_button).perform();

            // find the saved cards again
            _saved.findElements(selenium.By.className("card")).then(function (elements) {
                expect(elements.length).toBe(2);
                done();
            });
        });
    });

    it('Should allow a user to remove a property', function(done) {
        var driver = this.driver;
        var _results = driver.findElement(selenium.By.id("ui-results"));
        var _saved = driver.findElement(selenium.By.id("ui-saved"));

        _saved.findElements(selenium.By.className("card")).then(function (elements) {
            expect(elements.length).toBe(1);

            var _firstCard = _saved.findElement(selenium.By.className("card"));
            // make the button appear (for hover reasons)
            driver.actions().click(_firstCard).perform();

            var _button = _firstCard.findElement(selenium.By.tagName("button"));
            // click the button
            driver.actions().click(_button).perform();

            // find the saved cards again
            _saved.findElements(selenium.By.className("card")).then(function (elements) {
                expect(elements.length).toBe(0);
                done();
            });
        });

        done();
    });
});
