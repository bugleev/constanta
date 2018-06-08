import faker from "faker";

export default function generateEmployees(quantity) {
  const employeesArr = [];
  for (let i = 0; i < quantity; i++) {
    employeesArr.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      position: `${faker.name.jobTitle()}`,
      experience: `${Math.floor(Math.random() * 36)} months`
    });
  }
  return employeesArr;
}
