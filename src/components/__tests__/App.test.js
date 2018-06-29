import React from "react";
import { render, Simulate, cleanup } from "react-testing-library";
import EmployeeList from "../EmployeeList";
import EditMenu from "../EditMenu";
import App from "./../../containers/App";
import generateEmployees from "../../helpers/generateEmployees";

afterEach(cleanup);
test.skip("Employeelist renders correct number of items", () => {
  const data = generateEmployees(4);
  const { container } = render(<EmployeeList data={data} />);
  const parentNode = container.querySelector(".employee-ul");
  expect(parentNode.childNodes.length).toBe(data.length);
});
test.skip("EditMenu renders correct number of items", () => {
  const func = jest.fn;
  const data = generateEmployees(3);
  const { container } = render(
    <EditMenu data={data} show={true} onChange={func} scrollable={false} />
  );
  const parentNode = container.querySelector(".menu-wrapper");
  expect(parentNode.childNodes.length).toBe(data.length + 1);
});

test.skip("opens menu on button click", () => {
  const { container, getByText } = render(<App />);
  const button = getByText("Open Menu");
  Simulate.click(button);
  const menuNode = container.querySelector(".menu-wrapper");
  expect(Object.values(menuNode.classList)).toContain("open");
});

test.skip("adds item on 'add' button click", () => {
  const { container, getByText } = render(<App />);
  const button = getByText("Add item");
  const menuitemsBefore = container.querySelector(".menu-wrapper").children
    .length;
  Simulate.click(button);
  const menuitemsAfter = container.querySelector(".menu-wrapper").children
    .length;
  expect(menuitemsBefore).not.toEqual(menuitemsAfter);
});

test.skip("removes item from the list on 'remove' button click", () => {
  const { container, getAllByText } = render(<App />);
  const button = getAllByText("remove")[0];
  const listitemsBefore = container.querySelector(".employee-ul").children
    .length;
  Simulate.click(button);
  const listitemsAfter = container.querySelector(".employee-ul").children
    .length;
  expect(listitemsBefore).not.toEqual(listitemsAfter);
});

test.skip("text in the list item changes when text in menu item is changed", () => {
  const { getAllByTestId } = render(<App />);
  const menuInput = getAllByTestId("menu-input")[1];
  const listText = getAllByTestId("list-text")[0];
  Simulate.change(menuInput, { target: { value: "test!" } });
  expect(listText.textContent).toMatch("test!");
});
