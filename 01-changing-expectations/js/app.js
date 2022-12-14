/* ======= Model ======= */

const model = {
    adminMode: false,
    currentCat: null,
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

    init: function () {
        model.currentCat = model.cats[0];
        view.init();
        adminView.init();
    },

    getCats: function () {
        return model.cats;
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    incrementCounter: function () {
        model.currentCat.clicks++;
        this.renderAll();
    },

    saveCurrentCat: function (name, url, clicks) {
        const cat = model.currentCat;
        cat.name = name;
        cat.attribution = url;
        cat.clicks = clicks;
        this.renderAll();
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
        this.renderAll();
    },

    toggleAdminMode: function () {
        model.adminMode = !model.adminMode;
        adminView.render(model.adminMode);
    },

    renderAll: function () {
        view.render();
        adminView.render(model.adminMode);
    }

}


/* ======= Views ======= */

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
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.textContent = cat.name;
            button.style.display = "block";
            button.addEventListener("click", this.addListClick(cat));
            this.catListElem.appendChild(button);
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

const adminView = {
    init: function () {
        // store pointers to our DOM elements for easy access later
        this.adminBtn = document.getElementById("admin-btn");
        this.adminElem = document.getElementById("admin-container");
        this.adminForm = document.getElementById("admin-form");
        this.saveBtn = document.getElementById("save-btn");
        this.cancelBtn = document.getElementById("cancel-btn");

        this.catName = document.getElementById("admin-cat-name");
        this.url = document.getElementById("admin-url");
        this.clicks = document.getElementById("admin-clicks");

        // Add click events
        this.adminBtn.addEventListener("click", function () {
            controller.toggleAdminMode();
        });

        // Passing a method as an argument passes this method without its
        //   context (parent). The parent can be explicitly passed with "bind".
        // Alternatively "this" could also be bound to a local variable like so
        //   let localThis = this;
        //   addEventListener("click", localThis.method)
        this.cancelBtn.addEventListener("click", this.fillCurrentData.bind(this));

        this.saveBtn.addEventListener("click", this.saveChangedData.bind(this));

        // Render
        this.render();
    },

    fillCurrentData: function () {
        const currentCat = controller.getCurrentCat();

        this.catName.value = currentCat.name;
        this.url.value = currentCat.attribution;
        this.clicks.value = currentCat.clicks;
    },

    saveChangedData: function () {
        controller.saveCurrentCat(
            this.catName.value,
            this.url.value,
            this.clicks.value
        )
    },

    render: function (isVisible) {
        // Set form visibility
        if (isVisible) {
            this.adminElem.hidden = false;
        } else {
            this.adminElem.hidden = true;
        }

        // Fill form with current data
        this.fillCurrentData();
    }
}

controller.init();
