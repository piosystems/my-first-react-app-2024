import React, { useState, useEffect } from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld5: React.FC<Props> = ({ name = "John" }) => {
    //const [state, setState] = useState(initialState);
    const [nameToGreet, setNameToGreet] = useState(name);
    const [count, setCount] = useState(0);

    const changeNameToGreet = (event: any) => {
        setNameToGreet(event.target.value);
    }

    /* Below shows that you can have more than one useEffect in the same component
    The two effects document.title and window.alert could have been put under one useEffect but
    I want to illustrate that in the case of window.alert, we want it to be fired only on the condition that 
    count value changes. Otherwise, it will show whenever the component is update at all including when writing
    name to greet.
    */
    useEffect(() => {
        document.title = `Hello ${nameToGreet} with click count ${count}`;
    }, [count, nameToGreet]);

    useEffect(() => {
        window.alert(`Hello ${nameToGreet}, be aware that you have clicked ${count} time(s).`);
        //if you remove the line below, you will get a warning because only count and not name is set as condition
        // eslint-disable-next-line
    }, [count]);

    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {nameToGreet}. Greetings from from React.</p>
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet} />
            </p>

            <p>You clicked {count} times</p>
            <p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </p>

        </div>
    )

}

export default HelloWorld5;
