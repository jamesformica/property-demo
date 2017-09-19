define(['./models/property'], function (Property) {
    "use strict";

    function CardManager(_container) {
        // using a Map to store a 'dictionary' of <Property, card DOM element> 
        this.cardMap = new Map();
        this._container = _container;
        this.isInAddMode = true;
    }

    /**
     * Adds a returned result that represents a property card to the DOM and 
     * to the internal Map of properties.
     * @param result a json object representing a property
     */
    CardManager.prototype.add = function (result) {
        if (result === null || result === undefined) {
            return;
        }

        var property = new Property(result);
        var _card = property.draw(this.isInAddMode);
        var _realCard = this._container.appendChild(_card);

        this.cardMap.set(property, _realCard);
    }

    /**
     * Adds a collection of results to the DOM and to the internal property Map
     * @param results an array of json objects representing properties
     */
    CardManager.prototype.addRange = function (results) {
        if (!Array.isArray(results)) {
            return;
        }

        for (var i = 0; i < results.length; i++) {
            this.add(results[i]);
        }
    }

    /**
     * Locates the Property via its id then removes it from the DOM and
     * the internal property Map.
     * @param id the id of the property to remove
     */
    CardManager.prototype.remove = function (id) {
        var cardMap = this.cardMap;
        cardMap.forEach(function(_card, property) {
            if (property.id === Number(id)) {
                _card.remove();
                cardMap.delete(property);
            }
        });
    }

    /**
     * Puts the CardManager in 'remove mode' which means we will render
     * a 'remove property' button instead of an 'add property' button
     */
    CardManager.prototype.setRemoveMode = function () {
        this.isInAddMode = false;
    }

    return CardManager;
});