import { useState } from "react"
import ListPerson from "./components/ListPerson";

function App() {
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
    
    <ListPerson lists={listPerson} />
    
  )
}

export default App
