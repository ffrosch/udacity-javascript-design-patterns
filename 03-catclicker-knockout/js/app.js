const Cat = function () {
    this.nicknames = ko.observableArray([
        "Cutie-Pie",
        "Wesserson",
        "Nic-Nac",
        "PinScar",
    ]);

    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
    this.imgAttribution = ko.observable("source?");

    this.level = ko.computed(function () {
        let title;
        const cnt = this.clickCount();

        if (cnt < 10) {
            title = "Baby";
        } else if (cnt < 50) {
            title = "Infant";
        } else if (cnt < 100) {
            title = "Teen";
        } else if (cnt < 500) {
            title = "Adult";
        } else {
            title = "Ninja";
        }

        return title;
    }, this);
};

const ViewModel = function () {
    const self = this;

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());
