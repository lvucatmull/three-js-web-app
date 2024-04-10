import { UserInfoType } from "@/utils/types";
import React, { ReactNode, useReducer, createContext } from "react";

export const UserContext = createContext({});

// useReducer 초기 상태 값 설정
const initialUser = [
  {
    id: "1",
    name: "apple",
  },
  {
    id: "2",
    name: "banana",
  },
  {
    id: "3",
    name: "cherry",
  },
];

// useReducer action 처리 함수
function userReducer(oldUser, action) {
  switch (action.type) {
    case "INPUT_USER":
      return [...oldUser, { id: action.id, name: action.name }];
    case "REMOVE_USER":
      return oldUser.filter((item) => item.id !== action.id);
    default:
      return oldUser;
  }
}

// Provider
const UserContextProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialUser, undefined);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
