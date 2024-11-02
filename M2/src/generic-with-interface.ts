// Interface for a User
interface UserInterface {
  name: string;
  age: number;
  isActive: boolean;
  role: "student" | "instructor"; // Enum-like values for role
}

// Interface for a Course Topic
interface Topic {
  title: string;
  duration: number; // duration in minutes
  isCompleted: boolean;
}

// Interface for a Course
interface Course {
  courseId: string;
  courseName: string;
  instructor: UserInterface;
  students: GenericArray<UserInterface>;
  topics: GenericArray<Topic>;
}

// Generic Array Interface to make arrays type-safe
interface GenericArray<T> {
  [index: number]: T;
}

// Complex structure containing users, courses, and topics
const courseData: GenericArray<Course> = [
  {
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    instructor: {
      name: "John Doe",
      age: 35,
      isActive: true,
      role: "instructor",
    },
    students: [
      {
        name: "Alice",
        age: 22,
        isActive: true,
        role: "student",
      },
      {
        name: "Bob",
        age: 23,
        isActive: false,
        role: "student",
      },
    ],
    topics: [
      {
        title: "Introduction to Programming",
        duration: 45,
        isCompleted: true,
      },
      {
        title: "Data Structures",
        duration: 60,
        isCompleted: false,
      },
    ],
  },
  {
    courseId: "CS102",
    courseName: "Advanced JavaScript",
    instructor: {
      name: "Jane Smith",
      age: 30,
      isActive: true,
      role: "instructor",
    },
    students: [
      {
        name: "Charlie",
        age: 24,
        isActive: true,
        role: "student",
      },
      {
        name: "Dave",
        age: 25,
        isActive: false,
        role: "student",
      },
    ],
    topics: [
      {
        title: "Closures and Scopes",
        duration: 50,
        isCompleted: true,
      },
      {
        title: "Asynchronous JavaScript",
        duration: 70,
        isCompleted: false,
      },
    ],
  },
];
