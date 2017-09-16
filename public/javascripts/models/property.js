define(['./agency'], function(Agency) {
    "use strict";

    function Property(result) {
        if (result === null || result === undefined || typeof result !== 'object') {
            result = {};   
        }

        this.id = Number(result.id) || -1;
        this.price = result.price || "";
        this.image = result.mainImage || "";
        this.agency = new Agency(result.agency);
    }

    Property.prototype.draw = function() {
    }

    return Property;
});