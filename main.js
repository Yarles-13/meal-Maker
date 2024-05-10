console.clear();


let textBox = document.getElementById('text');


const menu = {
  courses: {
    appetizer: [],
    mains: [],
    desserts: []
  },

  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    if (courseName === "appetizer") {
      this.courses.appetizer.push(dish);
    } else if (courseName === "mains") {
      this.courses.mains.push(dish);
    } else if (courseName === "desserts") {
      this.courses.desserts.push(dish);
    }
  },

  getRandomDishFromCourse: function (courseName) {
    const dishes = this.courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function () {
    let appetizer = this.getRandomDishFromCourse("appetizer");
    let mains = this.getRandomDishFromCourse("mains");
    let desserts = this.getRandomDishFromCourse("desserts");

    let totalPrice = appetizer.price + mains.price + desserts.price;

    return `Appetizer for today will be ${appetizer.name}. Main Course will be ${mains.name}. For dessert we will serve ${desserts.name}`;
  }
};

menu.addDishToCourse("appetizer", "Caesar Salad", 8.99);
menu.addDishToCourse("appetizer", "Calamari", 7.99);
menu.addDishToCourse("appetizer", "Chicken Karaage", 12.99);

menu.addDishToCourse("mains", "Cheeseburger", 10.0);
menu.addDishToCourse("mains", "Steak and Fries", 20.0);
menu.addDishToCourse("mains", "Fried Tilapia", 15.0);

menu.addDishToCourse("desserts", "Ice cream", 6.99);
menu.addDishToCourse("desserts", "Baklava", 3.99);
menu.addDishToCourse("desserts", "Cookies", 2.99);

textBox.innerText = menu.generateRandomMeal();
