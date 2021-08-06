let body = document.querySelector('body');

function Cats(name, colour, image) {
    this.name = name;
    this.colour = colour;
    this.image = image;
    this.showMore = function() {
        let dialog = document.createElement("dialog")
        dialog.innerHTML = `
            The cats name is ${this.name},
            Its colour is ${this.colour}
            `
        dialog.open = true;
        body.appendChild(dialog);
}
}

let cat1 = new Cats(
    "Fluffy",
    "White",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg"
)

let cat2 = new Cats(
    "Tabby",
    "Orange",
    "https://i.pinimg.com/originals/c6/51/0d/c6510d7863101b9a3e3ccecd5dcfa055.jpg"
)

let cat3 = new Cats(
    "Shadow",
    "Grey",
    "https://mybritishshorthair.com/wp-content/uploads/2020/04/Grey_British_Shorthair_with_yellow_eyes-1024x861.jpg"
)

let catArray = [cat1, cat2, cat3];

let loaded = {};

loaded.addCat = function (){
    catArray.forEach(function(cat) {
        let image = document.createElement("img");
        image.src = cat.image;
        image.height = 160;
        image.width = 120;

        let button = document.createElement("button");
        button.innerHTML = "Show more";

        button.addEventListener("click", function(){
            cat.showMore()
        });

            
        body.appendChild(image);
        body.appendChild(button);
    })
}


loaded.addCat();