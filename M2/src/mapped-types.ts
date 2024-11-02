{
  // mapped-types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  const arrOfString: string[] = arrOfNumbers.map((item) => item.toString());

  console.log(arrOfString);

  type AreaNumber = {
    width: number;
    height: number;
  };

  type Height = AreaNumber["height"]; //=> this is called lookup type

  //   type AreaString = {
  //     [key in keyof AreaNumber]: string; // this is called map types
  //   };

  // mapped type with Generic
  //  T => {height:string, width:number}
  type AreaString<T> = {
    [key in keyof T]: T[key]; // => we have to focus on it carefully. 
  };

  const areaOfMyRoom: AreaString<{ height: string; width: number }> = {
    height: "500",
    width: 500,
  };
}
