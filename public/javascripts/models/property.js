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

        var _cardArticle = document.createElement("article");
        _cardArticle.classList.add("card");
        _cardArticle.tabIndex = 0;
        _cardArticle.setAttribute("aria-label", "Property of price: " + this.price);

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

        var _button = this.buildButton(isInAddMode);

        _header.appendChild(_agencyLogo);
        _info.appendChild(_price);
        _info.appendChild(_button);

        _cardArticle.appendChild(_header);
        _cardArticle.appendChild(_propertyImage);
        _cardArticle.appendChild(_info);

        return _cardArticle;
    }

    /**
     * Constructs the <button> element which will either add the property to the saved list
     * or remove it from the saved list.
     */
    Property.prototype.buildButton = function(isInAddMode) {
        var _this = this;
        var eventName = isInAddMode ? "addproperty" : "removeproperty";
        var buttonText = isInAddMode ? "Add Property" : "Remove Property";
        var buttonClickedText = isInAddMode ? "Added!" : "Removed!";

        var _button = document.createElement("button");
        _button.type = "button";
        _button.innerText = buttonText;

        _button.onclick = function() {
            _this.click_cardButton.apply(_this, [_button, eventName, buttonClickedText]);
        }
        
        _button.onblur = function() {
            _this.blur_cardButton(_button, buttonText);
        }

        if (!isInAddMode) {
            _button.classList.add("remove");
        }

        return _button;
    }

    /**
     * Triggered when the card button is clicked. Dispatches an even to either add
     * or remove the card and set the button text to the new value.
     */
    Property.prototype.click_cardButton = function(_button, eventName, newButtonText) {
        var e = new CustomEvent(eventName, { detail: this.id });
        document.dispatchEvent(e);

        if (newButtonText && newButtonText.trim().length > 0) {
            _button.innerText = newButtonText;
        }
    }

    /**
     * Trigger when the card button no longer has focus and sets the button text
     * to the value supplied.
     */
    Property.prototype.blur_cardButton = function(_button, newButtonText) {
        if (newButtonText && newButtonText.trim().length > 0) {
            _button.innerText = newButtonText;
        }
    }

    return Property;
});