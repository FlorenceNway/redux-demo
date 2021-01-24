import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import RegisterUserList from "./RegisterUserList";
import { createStore } from "redux";
import users from "../store/reducers/register.reducer";

const findByTestAtrr = (component, attar) => {
  const wrapper = component.find(`[data-test='${attar}']`);
  return wrapper;
};

describe("RegisterUserList Component", () => {
  describe("Component Renders", () => {
    let wrapper;
    let initialState = { users: [{ id: 1, name: "Alex" }] };
    beforeEach(() => {
      const store = createStore(users, initialState);

      wrapper = mount(
        <Provider store={store}>
          <RegisterUserList />
        </Provider>
      );
      // console.log(wrapper.debug());
    });

    it("should render without error", () => {
      const component = findByTestAtrr(wrapper, "list-wrapper");
      expect(component.length).toEqual(1);
    });
    it("should render username", () => {
      const username = findByTestAtrr(wrapper, "username");
      expect(username.length).toEqual(1);
    });
    it("should render buttons div", () => {
      const buttons = findByTestAtrr(wrapper, "buttons");
      expect(buttons.length).toBe(1);
    });
  });
});
