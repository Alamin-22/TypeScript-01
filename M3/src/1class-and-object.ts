{
  // OOP -- First lesson about Class

  class Animal {
    // public name: string;
    // public species: string;

    // Parameter Properties
    constructor(public name: string, public species: string) {
      //   this.name = name;
      //   this.species = species;
    }
  }

  const dog = new Animal("Kalaa Kutta", "Kutta");

  const CAT = new Animal("Kalu", "Cat");

  class Service {
    constructor(public name: string, public price: number) {}

    // Method to describe the service
    public describe(): void {
      console.log(`Service: ${this.name}, Price: $${this.price}`);
    }
  }

  const manicure = new Service("Manicure", 25);
  const pedicure = new Service("Pedicure", 35);

  manicure.describe(); // Output: Service: Manicure, Price: $25
  pedicure.describe(); // Output: Service: Pedicure, Price: $35
}
