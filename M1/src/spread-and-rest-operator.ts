{
  // Spread Operator
  // Rest Operator
  // Destructuring

  //   Spread Operator

  const boysGroup1: string[] = [
    "Mr.Mollik",
    "Mr. Paul",
    "Ratul",
    "Emran",
    "Labu",
  ];

  const boysGroup2: string[] = ["Kuddus", "Rohim", "Korim", "Jobbar", "Obbar"];

  boysGroup1.push(...boysGroup2);

  const SemesterOneTeachers = {
    Math: "Sumaya Jahan",
    ICS: "Akash Kumar Paul",
    BO: "Lima",
    English: "Tanziri",
    Analog: "A.R.K",
  };
  const SemesterTwoTeachers = {
    Math2: "Adi Paul",
    ICS2: "Mr. Mollik",
    BO2: "Ratul",
    English2: "Emran",
    Analog2: "Labu",
  };
  const SemesterThreeTeachers = {
    Math3: "Kuddus",
    ICS3: "Ali",
    BO3: "Korrim",
    English3: "Rohim",
  };

  const AllSemesterTeachersList = {
    ...SemesterOneTeachers,
    ...SemesterTwoTeachers,
    ...SemesterThreeTeachers,
  };

  //   Rest Operator

  const greetingFriends = (...friends: string[]) => {
    friends.forEach((fr: string) => {
      console.log(`Hi,`, fr);
    });
  };

  greetingFriends("Emran", "Labu", "Aditiya", "Paul");
}
