var iPhone6S = new Phone("Apple", 2250, "silver"),
    samsungGalaxyS6 = new Phone("Samsung", 2000, "black"),
    onePlusOne = new Phone("OnePlus", 1880, "black");
    appleBtn = document.getElementById("apple"),
    samsungBtn = document.getElementById("samsung"),
    onePlusBtn = document.getElementById("onePlus");

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.showInfo = function() {
    alert("Phone informations \n - brand: " + this.brand + "\n - color: " + this.color + "\n - price: "+ this.price + "zł");
};

iPhone6S.printInfo();
appleBtn.addEventListener("click", function() {
    iPhone6S.showInfo()
});

samsungGalaxyS6.printInfo();
samsungBtn.addEventListener("click", function() {
    samsungGalaxyS6.showInfo()
});

onePlusOne.printInfo();
onePlusBtn.addEventListener("click", function() {
    onePlusOne.showInfo()
});

