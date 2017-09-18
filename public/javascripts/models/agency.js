define(function() {
    "use strict";

    /**
     * Represents a real estate agency containing the branding colours and logo.
     * @param agency a json object representing an agency
     */
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