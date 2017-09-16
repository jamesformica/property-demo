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

//     <article class="card" tabindex="0">
//     <header style="background-color: #ffe512">
//         <image src="http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif">
//     </header>

//     <image src="http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg">
    
//     <div class="info">
//         <span>$726,500</span>
//         <button type="button">Add Property</button>
//     </div>
//     </article>

    Property.prototype.draw = function() {
        let _cardArticle = document.createElement("article");
        _cardArticle.classList.add("card");
        _cardArticle.tabIndex = 0;

        let _header = document.createElement("header")
        _header.style.backgroundColor = this.agency.primaryColour;

        let _agencyLogo = document.createElement("img");
        _agencyLogo.setAttribute("src", this.agency.logo);
        _agencyLogo.setAttribute("alt", "agency logo");

        let _propertyImage = document.createElement("img");
        _propertyImage.setAttribute("src", this.image);
        _propertyImage.setAttribute("alt", "property image");

        let _info = document.createElement("div");
        _info.classList.add("info");

        let _price = document.createElement("span");
        _price.innerText = this.price;

        let _addButton = document.createElement("button");
        _addButton.type = "button";
        _addButton.innerText = "Add Property";

        _header.appendChild(_agencyLogo);
        _info.appendChild(_price);
        _info.appendChild(_addButton);

        _cardArticle.appendChild(_header);
        _cardArticle.appendChild(_propertyImage);
        _cardArticle.appendChild(_info);

        return _cardArticle;
    }

    return Property;
});