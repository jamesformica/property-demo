beforeEach(function () {
    jasmine.addMatchers({
        toContainID: function () {
            return {
                compare: function (list, id) {
                    var found = false;

                    for (var i = 0; i < list.length; i++) {
                        if (list[i].id === id) {
                            found = true;
                            continue;
                        }
                    }

                    return {
                        pass: found
                    };
                }
            };
        }
    });
});

