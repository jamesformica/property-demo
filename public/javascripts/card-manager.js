define(['./models/property'], function(Property) {
    "use strict";

    function CardManager(_container) {
        this._container = _container;
        this.cardMap = new Map();
        this.isInAddMode = true;
    }

    CardManager.prototype.add = function(result) {
        if (result === null || result === undefined) {
            return;
        }

        let property = new Property(result);
        let _card = property.draw(this.isInAddMode);
        let _realCard = this._container.appendChild(_card);

        this.cardMap.set(property, _realCard);
    }

    CardManager.prototype.addRange = function(results) {
        if (!Array.isArray(results)) {
            return;
        }

        for (let i = 0; i < results.length; i++) {
            this.add(results[i]);
        }
    }

    CardManager.prototype.remove = function(id) {
        for (let [property, _card] of this.cardMap) {
            if (property.id === Number(id)) {
                _card.remove();
                this.cardMap.delete(property);
            }
        }
    }

    CardManager.prototype.setRemoveMode = function() {
        this.isInAddMode = false;
    }

    return CardManager;
});