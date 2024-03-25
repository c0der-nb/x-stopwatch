import React, {useState, useEffect} from 'react';

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevValue) => prevValue+1)
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {`${Math.floor(timer/60)}:${timer%60 >= 10 ? timer%60 : `0${timer%60}`}`}</p>
            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={() => {
                setIsRunning(false);
                setTimer(0);
            }}>Reset</button>
        </div>
    )
}