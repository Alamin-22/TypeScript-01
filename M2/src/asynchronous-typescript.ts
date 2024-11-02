{
  // fetching data from Server

  type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getData = async (): Promise<TodoType> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res.json();
    console.log(data);
    return data;
  };

  getData();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";

      if (data) {
        resolve(data);
      } else {
        reject("Failed to Load Data");
      }
    });
  };

  //   calling that function

  const ShowData = async () => {
    const data = await createPromise();
    return data;
    // console.log(data);
  };

  ShowData();
}
