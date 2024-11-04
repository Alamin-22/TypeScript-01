{
  // 9-abstraction-in-oop ==> Can be achieve in 2 ways 1. Interface 2. abstract class

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("This Engine starting");
    }
    stopEngine(): void {
      console.log("This Engine Stopping");
    }

    move(): void {
      console.log("This car moving towards  the Campus");
    }
  }

  const TotyaCar = new Car();
  TotyaCar.move();

  //   abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class BMWcar extends Car2 {
    startEngine(): void {
      console.log("This Engine starting");
    }
    stopEngine(): void {
      console.log("This Engine Stopping");
    }

    move(): void {
      console.log("This car moving towards  the Campus");
    }
  }

  const SpecialCar = new BMWcar();
  SpecialCar.move();
}
