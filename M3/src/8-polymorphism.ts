{
  // 8-polymorphism means same method will provide us different output depending on use case
  class Person {
    getSleep() {
      console.log(`This person sleep for 8 Hours`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`This person sleep for 5 Hours`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`This person sleep for 4 Hours`);
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Person();

  getSleepHours(person1);
  getSleepHours(person2);
  getSleepHours(person3);
}
