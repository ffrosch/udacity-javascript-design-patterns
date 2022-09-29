var model = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ["Tabea"]
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ["Tigger"]
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ["Hop-And-Gone"]
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ["Hidey"]
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ["Smoochy"]
    }
]


const Cat = function (data) {
    this.nicknames = ko.observableArray(data.nicknames);
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

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

const ViewModel = function (data) {
    const self = this;
    this.catList = ko.observableArray([]);

    data.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function (cat) {
        idx = self.catList.indexOf(cat);
        self.currentCat(self.catList()[idx]);
    }
};

ko.applyBindings(new ViewModel(model));
