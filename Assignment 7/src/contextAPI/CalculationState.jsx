import calculationState from "./context";
import { useState } from "react";

const ProjectState = (props) => {

    const [add, setAdd] = useState(0)
    const [subtract, setSubtract] = useState(0)
    const [divide, setDivide] = useState(0)

    const Add = (a, b) => {
        setAdd(a + b)
    }
    const Subtraction = (a, b) => {
        setSubtract(a - b)
    }
    const Division = (a, b) => {
        setDivide(a / b)
    }
    return (
        <calculationState.Provider value={{ add, subtract, divide, Add, Subtraction, Division }}>
            {props.children}
        </calculationState.Provider>
    )
}
export default ProjectState;