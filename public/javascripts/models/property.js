define(['./agency'], function(Agency) {
    "use strict";

    function Property(result) {
        this.price = result.price;
        this.id = Number(result.id);
        this.image = result.mainImage;
        this.agency = new Agency(result.agency);
    }

    return Property;
});