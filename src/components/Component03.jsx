import { useContext } from "react";
import { MyContext } from "../App"
const Component03 = () => {
    const myContextData = useContext(MyContext);
    return (
        <div>
            <div>{myContextData.count} is global context</div>

            <button onClick={() => {
                myContextData.setCount((prev) => prev + 1)
            }}>
                Increase </button>
        </div>
    )

}
export default Component03