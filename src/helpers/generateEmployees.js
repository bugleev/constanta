import faker from "faker";

export default function generateEmployees(quantity) {
  const employeesArr = [];
  for (let i = 0; i < quantity; i++) {
    employeesArr.push({
      id: i + 1,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      position: `${faker.name.jobTitle()}`
    });
  }
  return employeesArr;
}
