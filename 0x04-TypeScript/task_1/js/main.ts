interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Kevin",
  lastName: "Koech",
  fullTimeEmployee: true,
  location: "Thika",
  contract: false,
};

console.log(teacher1);

const teacher2: Teacher = {
  firstName: "Joy",
  lastName: "Chep",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Eldoret",
  masters: true,
};

console.log(teacher2);

const teacher3: Teacher = {
  firstName: 'Elly',
  fullTimeEmployee: false,
  lastName: 'Munene',
  location: 'Kasarani',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Tevin',
  lastName: 'Owen',
  location: 'Kisumu',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullname = `${firstInitial}. ${lastName}`;
  return fullname;
};

console.log(printTeacher("Joy", "Chep"));

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working"
  }

  displayName(): string {
    return this.firstName
  }
}

const student = new StudentClass({ firstName: "Alice", lastName: "Davies" });
console.log(student.workOnHomework());
console.log(student.displayName());
