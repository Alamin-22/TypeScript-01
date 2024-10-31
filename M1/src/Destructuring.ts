{
  const userProfile = {
    userId: 123,
    username: "Md Al Amin Mollik",
    email: "amin@example.com",
    isActive: true,
    hobbies: ["reading", "traveling", "gaming"],
    address: {
      street: "123 Main St",
      city: "Glendale",
      state: "NY",
      zipCode: "12345",
    },
    getProfileInfo: function () {
      return `${this.username} - ${this.email}`;
    },
  };

  // Destructuring the complex object
  const {
    userId,
    username: name, // we can not add type while doing destructuring  ///-> like this we can write Name Alies . It is not an type It is Alice

    email,
    hobbies: [firstHobby, secondHobby],
    address: { street, city, state },
    getProfileInfo,
  } = userProfile;

  // array Destructing

  const Friends = [
    "Rohim",
    "Korim",
    "Kuddus",
    "Jobbar",
    "Obbar",
    "Sokina",
    "Jorina",
  ];

  // Using rest we can achieve array destructure like this
  const [firstFriend, , , FourthFriend, , ...rest] = Friends;

  // Logging the destructured values
  console.log("User ID:", userId); // Output: User ID: 123
  console.log("Username:", name);
  console.log("Email:", email); // Output: Email: amin@example.com
  console.log("First Hobby:", firstHobby); // Output: First Hobby: reading
  console.log("Second Hobby:", secondHobby); // Output: Second Hobby: traveling
  console.log("Address:", `${street}, ${city}, ${state}`); // Output: Address: 123 Main St, Glendale, NY
  console.log("Profile Info:", getProfileInfo()); // Output: Profile Info: MdAminMollik - amin@example.com
}
