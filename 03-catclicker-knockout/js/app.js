const ViewModel = function () {

    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
    this.imgAttribution = ko.observable("source?");

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }

    this.level = ko.computed(function () {
        const cnt = this.clickCount();
        if (cnt < 10) {
            return "baby";
        } else if (cnt < 50) {
            return "infant";
        } else if (cnt < 100) {
            return "teen";
        } else {
            console.log(cnt);
            return "adult";
        }
    }, this);
};

ko.applyBindings(new ViewModel());
