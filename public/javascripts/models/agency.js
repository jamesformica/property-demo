define(function() {
    "use strict";

    function Agency(agency) {
        if (agency === null || agency === undefined || typeof agency !== 'object') {
            agency = {}
        }

        if (agency.brandingColors === null || agency.brandingColors === undefined || typeof agency.brandingColors !== 'object') {
            agency.brandingColors = {};
        }

        this.primaryColour = agency.brandingColors.primary || "";
        this.logo = agency.logo || "";
    }

    return Agency;
});