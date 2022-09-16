/* ======= Model ======= */

const model = {
    cats: [
        {
            clicks: 0,
            name: "Nemo",
            src: "img/Nemo.png",
            attribution: "https://play-lh.googleusercontent.com/XVHP0sBKrRJYZq_dB1RalwSmx5TcYYRRfYMFO18jgNAnxHAIA1osxM55XHYTb3LpkV8"
        },
        {
            clicks: 0,
            name: "Seyfried",
            src: "img/Seyfried.jpeg",
            attribution: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c"
        }
    ]
};


/* ======= Controller ======= */

const controller = {

    currentCat: null,

    init: function () {
        this.currentCat = model.cats[0];
        view.init();
    },

    getCats: function () {
        return model.cats;
    },

    getCurrentCat: function () {
        return this.currentCat;
    },

    incrementCounter: function () {
        this.currentCat.clicks++;
        view.render();
    },

    setCurrentCat: function (cat) {
        this.currentCat = cat;
        view.render();
    }

}


/* ======= View ======= */

const view = {

    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catListElem = document.getElementById("cat-list");
        this.catContainer = document.getElementById("cat-container");
        this.catNameElem = document.getElementById("cat-name");
        this.catImageElem = document.getElementById("cat-img");
        this.catCountElem = document.getElementById("cat-count");

        this.catImageElem.addEventListener("click", function () {
            controller.incrementCounter();
        });

        this.render()
    },

    createImage: function () {
        const currentCat = controller.getCurrentCat();
        this.catCountElem.textContent = currentCat.clicks;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.src;
    },

    createList: function () {
        const cats = controller.getCats();

        this.catListElem.innerHTML = "";
        for (const cat of cats) {
            const elem = document.createElement("li");
            elem.textContent = cat.name;
            elem.addEventListener("click", this.addListClick(cat));
            this.catListElem.appendChild(elem);
        }
    },

    addListClick: function (catCopy) {
        return function () {
            controller.setCurrentCat(catCopy);
        }
    },

    render: function () {
        this.createList();
        this.createImage();
    }
}

controller.init();
