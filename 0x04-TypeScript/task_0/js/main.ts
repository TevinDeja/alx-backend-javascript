interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const body: HTMLBodyElement | null = document.querySelector("body");
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = table.createTHead();
  const row: HTMLTableRowElement = thead.insertRow();
  
  const th1: HTMLTableCellElement = document.createElement("th");
  const th2: HTMLTableCellElement = document.createElement("th");
  th1.textContent = "First Name";
  th2.textContent = "Location";
  row.appendChild(th1);
  row.appendChild(th2);

  const tbody: HTMLTableSectionElement = table.createTBody();
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  if (body) {
    body.appendChild(table);
  }
}

document.addEventListener("DOMContentLoaded", renderTable);
