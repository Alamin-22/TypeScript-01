{
  //
  class Car {
    drive() {
      console.log("Driving a car!");
    }

    openTrunk() {
      console.log("Opening the trunk of the car.");
    }
  }

  class Truck {
    drive() {
      console.log("Driving a truck!");
    }

    loadCargo() {
      console.log("Loading cargo into the truck.");
    }
  }

  class Motorcycle {
    drive() {
      console.log("Riding a motorcycle!");
    }

    popWheelie() {
      console.log("Popping a wheelie!");
    }
  }

  type Vehicle = Car | Truck | Motorcycle;

  function operateVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Car) {
      // TypeScript knows `vehicle` is of type `Car` here
      vehicle.drive(); // Safe to call Car-specific method
      vehicle.openTrunk(); // Safe to call Car-specific method
    } else if (vehicle instanceof Truck) {
      // TypeScript knows `vehicle` is of type `Truck` here
      vehicle.drive(); // Safe to call Truck-specific method
      vehicle.loadCargo(); // Safe to call Truck-specific method
    } else if (vehicle instanceof Motorcycle) {
      // TypeScript knows `vehicle` is of type `Motorcycle` here
      vehicle.drive(); // Safe to call Motorcycle-specific method
      vehicle.popWheelie(); // Safe to call Motorcycle-specific method
    } else {
      console.log("Unknown vehicle type.");
    }
  }

  const myCar = new Car();
  const myTruck = new Truck();
  const myMotorcycle = new Motorcycle();

  operateVehicle(myCar); // Output: Driving a car! \n Opening the trunk of the car.
  operateVehicle(myTruck); // Output: Driving a truck! \n Loading cargo into the truck.
  operateVehicle(myMotorcycle); // Output: Riding a motorcycle! \n Popping a wheelie!

  class Circle {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Square {
    sideLength: number;

    constructor(sideLength: number) {
      this.sideLength = sideLength;
    }

    getArea() {
      return Math.pow(this.sideLength, 2);
    }
  }

  type Shape = Circle | Square;

  function calculateArea(shape: Shape) {
    if (shape instanceof Circle) {
      // TypeScript knows `shape` is of type `Circle` here
      const area = shape.getArea();
      console.log(`The area of the circle is: ${area}`);
    } else if (shape instanceof Square) {
      // TypeScript knows `shape` is of type `Square` here
      const area = shape.getArea();
      console.log(`The area of the square is: ${area}`);
    } else {
      console.log("Unknown shape type.");
    }
  }

  const myCircle = new Circle(5);
  const mySquare = new Square(4);

  calculateArea(myCircle); // Output: The area of the circle is: 78.53981633974483
  calculateArea(mySquare); // Output: The area of the square is: 16
}
