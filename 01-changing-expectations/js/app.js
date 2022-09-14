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

function createCatElem(name, src) {
    let div = document.createElement("div");
    let text = document.createElement("h2");
    let counter = document.createElement("p");
    let img = document.createElement("img");
    div.id = name;
    text.innerHTML = name;
    counter.innerHTML = "Clicks: 0";
    counter.id = name + "Counter";
    img.src = src;
    div.appendChild(text);
    div.appendChild(counter);
    div.appendChild(img);
    document.body.appendChild(div);
}

function increaseCounter(catObject, counter) {
    catObject.clicks += 1;
    counter.innerHTML = "Clicks: " + catObject.clicks;
}

for (const cat of cats) {
    createCatElem(cat.name, cat.src);
    const div = document.getElementById(cat.name);
    const counter = div.children.namedItem(cat.name + "Counter");
    div.addEventListener("click", function () { increaseCounter(cat, counter); });
}
