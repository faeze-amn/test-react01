import React, { useState, createContext } from "react"
import ListPerson from "./components/ListPerson";
import Component01 from "./components/Component01";

export const MyContext = createContext();
function App() {

  const [count, setCount] = useState(0);
  const [listPerson, setListPerson] = useState(
    [{
      id: 1,
      name: "faeze",
    },
    {
      id: 2,
      name: "narjes",
    },
    {
      id: 3,
      name: "amene",
    },
    {
      id: 4,
      name: "mohammad",
    },
    {
      id: 5,
      name: "fateme",
    }
    ]);
  return (

    <>
      <MyContext.Provider value={{
        count,
        setCount,
      }}>
        <Component01 />
      </MyContext.Provider>

      <ListPerson lists={listPerson} />
    </>

  )
}

export default App
