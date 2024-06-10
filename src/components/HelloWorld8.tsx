import React, {useState, useEffect} from 'react';

type Props = {
    name?: string;
}

const HelloWorld8: React.FC<Props> = ({name = 'Raphael'})  => {
    //const [state, setState] = useState(initialState);
    const [date, setDate] = useState(new Date());

    //function below responsible for setting new date value in state which will provoke a re-render of component.
    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(tick, 1000); //pass tick as callback function. Called every 1000ms to set a new Date() in state.
        /*now we need to let this useEffect know that there is work to do when component is to unmount. We indicate 
        this work to do in a return statement that takes a function callback.*/
        return(
            () => {
                clearInterval(timerID); //cleanup the timer to avoid memory leak
            }
        )
    }, []); //run only once, on componentDidMount

    return (
        <div>
            <p>Hello {name}. Greetings from HelloWorld8.</p> 
            <h3 className='text-xl font-extrabold'>
                {`Today's date is ${date.toLocaleDateString('en-GB')} 
                and the time now is ${date.toLocaleTimeString('en-GB')}`}
            </h3>
        </div>
    )
}


export default HelloWorld8;
