const user: {
  company: "TotoCompany"; // -->> this custom type is called Literal Types. We can Define any kind of custom type for those variable which value will be never change. They have to keep the same value for all uses. FOr this kind of purpose we can define custom types for our fixed variables

  readonly CompanyOwner: "Mr.Mollik"; ///by adding "readonly" before any variable , it makes that variable ReadOnly mood means no one will be able to do anything with this property

  name: string;
  age: number;
  isActive: boolean;
  bloodGroup?: string; // we can define type as not required , using "?" this symbol means it is making it optional
} = {
  name: "Md. Al Amin Mollik",
  age: 28,
  CompanyOwner: "Mr.Mollik",
  /*   company: "BaperHotel", */ /// as we can see if we try to provide BaperHotel As a name of that company variable then it is giving me error. SO We have to use that Declared variable.
  company: "TotoCompany",
  isActive: true,
};

console.log(user.CompanyOwner);
