{
  // Conditional Type

  type a1 = null;

  type a2 = string;

  type x = a1 extends null ? true : false; // conditional types
  type y = a2 extends null ? true : a2 extends undefined ? undefined : any;

  type sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //   type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type checkVehicle<T> = T extends keyof sheikh ? true : false; // good practice

  type hasTractor = checkVehicle<"tractor">;
}
