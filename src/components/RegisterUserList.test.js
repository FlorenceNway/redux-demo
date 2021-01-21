import React from "react";
import { shallow, mount } from "enzyme";
import RegisterUserList from "./RegisterUserList";
import { Provider } from "react-redux";
import {createStore} from "redux";
import users from "../store/reducers/register.reducer";
import App from "../App";

const findByTestAtrr = (component, attar) => {
    const wrapper = component.find(`[data-test='${attar}']`);
    return wrapper;
  };

describe("RegisterUserList Component", () => {
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
        const store = createStore(users)
      wrapper = mount(<Provider store={store}><RegisterUserList/></Provider>);
    });

    it("should render without error", () => {
      const component = findByTestAtrr(wrapper, "list-wrapper");
      expect(component.length).toBe(1);
    });
    it("should render username", () => {
      const username = findByTestAtrr(wrapper, "username");
      console.log(username)
      expect(username.length).toBe(1);
    });
    it("should render buttons div", () => {
      const buttons = findByTestAtrr(wrapper, "buttons");
      expect(buttons.length).toBe(1);
    });
  });

});