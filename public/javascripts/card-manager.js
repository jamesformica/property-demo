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

        // if we already have this property, then don't add it again
        if (this.find(property.id) !== null) {
            return;
        }

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
        var result = this.find(id);
        if (result !== null) {
            result[1].remove();
            this.cardMap.delete(result[0]);
        }
    }

    /**
     * Attempts to match a property based on the supplied id and returns
     * the pair. Otherwise returns null;
     * @param id the id of the property to find
     */
    CardManager.prototype.find = function(id) {
        var result = null;
        this.cardMap.forEach(function(_card, property) {
            if (property.id === Number(id)) {
                result = [property, _card];
            }
        });
        return result;
    }

    /**
     * Puts the CardManager in 'remove mode' which means we will render
     * a 'remove property' button instead of an 'add property' button
     */
    CardManager.prototype.setRemoveMode = function () {
        this.isInAddMode = false;
    }

    /**
     * If we scroll past the top of the _container then make it fixed, and when we scroll
     * back past it put it back to normal.
     */
    CardManager.prototype.setSticky = function() {
        var offsetTop = this._container.offsetTop;
        var _container = this._container;
        var stickyClass = "sticky";
        
        window.addEventListener('scroll', function(e) {
            var containsClass = _container.classList.contains(stickyClass);
            
            if (window.scrollY > offsetTop && !containsClass) {
                _container.classList.add(stickyClass);
            } else if (window.scrollY < offsetTop && containsClass) {
                _container.classList.remove(stickyClass);
            }
        });
    }

    return CardManager;
});