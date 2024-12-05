import React from 'react';
import {useCounterStore} from "../store/useCounterStore";

const Counter = () => {

    const {count, increment, reset, setNumber} = useCounterStore();

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>UP BUTTON</button>
            <button onClick={reset}>RESET</button>
            <button onClick={() => setNumber(3)}>Set Num 3</button>
        </div>
    );
};

export default Counter;