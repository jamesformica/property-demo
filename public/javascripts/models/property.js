define(['./agency'], function(Agency) {
    "use strict";

    /**
     * Represents a real estate property with such items as the price, image and the agency
     * the property belongs to.
     * @param result a json object representing a property
     */
    function Property(result) {
        if (result === null || result === undefined || typeof result !== 'object') {
            result = {};   
        }

        this.id = Number(result.id) || -1;
        this.price = result.price || "";
        this.image = result.mainImage || "";
        this.agency = new Agency(result.agency);
    }

    /**
     * Creates an <article class="card"> element with all appropriate data
     * and returns it. NOTE: this does not add it to the DOM
     * @param isInAddMode whether to include an 'add' button or a 'remove' button
     */
    Property.prototype.draw = function(isInAddMode) {
        if (isInAddMode == null || isInAddMode == undefined || typeof(isInAddMode) !== "boolean") {
            isInAddMode = true;
        }

        var _button = document.createElement("button");
        _button.type = "button";
        if (isInAddMode) {
            var e = new CustomEvent('addproperty', { detail: this.id });
            _button.innerText = "Add Property";
            _button.onclick = function() { document.dispatchEvent(e); };
        } else {
            var e = new CustomEvent('removeproperty', { detail: this.id });
            _button.classList.add("remove")
            _button.innerText = "Remove Property";
            _button.onclick = function() { document.dispatchEvent(e); };
        }

        var _cardArticle = document.createElement("article");
        _cardArticle.classList.add("card");
        _cardArticle.tabIndex = 0;

        var _header = document.createElement("header")
        _header.style.backgroundColor = this.agency.primaryColour;

        var _agencyLogo = document.createElement("img");
        _agencyLogo.setAttribute("src", this.agency.logo);
        _agencyLogo.setAttribute("alt", "agency logo");

        var _propertyImage = document.createElement("img");
        _propertyImage.setAttribute("src", this.image);
        _propertyImage.setAttribute("alt", "property image");

        var _info = document.createElement("div");
        _info.classList.add("info");

        var _price = document.createElement("span");
        _price.innerText = this.price;

        _header.appendChild(_agencyLogo);
        _info.appendChild(_price);
        _info.appendChild(_button);

        _cardArticle.appendChild(_header);
        _cardArticle.appendChild(_propertyImage);
        _cardArticle.appendChild(_info);

        return _cardArticle;
    }

    return Property;
});