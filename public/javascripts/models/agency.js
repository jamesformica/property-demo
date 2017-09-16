define(function() {
    "use strict";

    function Agency(agency) {
        this.primaryColour = agency.brandingColors.primary;
        this.logo = agency.logo;
    }

    return Agency;
});