const cats = [
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

function createList(arr) {
    const list = document.createElement("ul");
    for (const item of arr) {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
        listItem.id = item.name;
        listItem.addEventListener("click", (function (itemCopy) {

            return function () {
                const view = document.getElementById("view");
                view.innerHTML = "";
                let text = document.createElement("h2");
                let counter = document.createElement("p");
                let img = document.createElement("img");
                text.textContent = itemCopy.name;
                counter.textContent = "Clicks: " + itemCopy.clicks;
                counter.id = "counter";
                img.src = itemCopy.src;
                img.addEventListener("click", function () {
                    itemCopy.clicks += 1;
                    counter.textContent = "Clicks: " + itemCopy.clicks;
                })
                view.appendChild(text);
                view.appendChild(counter);
                view.appendChild(img);
            }

        })(item));
        list.appendChild(listItem);
    }

    const heading = document.createElement("h2");
    heading.textContent = "Cats";
    document.body.appendChild(heading);
    document.body.appendChild(list);
}

function createView() {
    const view = document.createElement("div");
    view.id = "view";
    document.body.appendChild(view);
}

createList(cats);
createView();
