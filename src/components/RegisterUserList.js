import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, moveUp, moveDown } from "../store/actions/register.action";
import "./RegisterUserList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const RegisterUserList = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const moveUpHandler = (id) => {
    dispatch(moveUp(id));
  };

  const moveDownHandler = (id) => {
    dispatch(moveDown(id));
  };

  return (
    <div data-test="list-wrapper">
      <ul>
        {users.map(({ id, username }, index) => {
          const isDisableDown = users.length - 1 === index;
          return (
            <li key={id}>
              <span data-test="username">{username}</span>
              <div data-test="buttons">
                <button onClick={() => deleteHandler(id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button onClick={() => moveUpHandler(id)} disabled={!index}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button
                  onClick={() => moveDownHandler(id)}
                  disabled={isDisableDown}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RegisterUserList;
