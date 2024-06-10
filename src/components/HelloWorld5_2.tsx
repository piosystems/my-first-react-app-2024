import React, { useState, useEffect } from 'react';

type Props = {
    name?: string;
    other?: string;
}

//Let's create a type for state object. This could also have been in a different file and imported here
type State = {
    nameToGreet: string;
    count: number;
}
//This component is essentially the same as 5. We just want to show that you can combine state variables
//in one object.
const HelloWorld5_2: React.FC<Props> = ({ name = "John" }) => {
    const [state, setState] = useState<State>({nameToGreet: name, count: 0});
    //const [nameToGreet, setNameToGreet] = useState(name);
    //const [count, setCount] = useState(0);

    const changeNameToGreet = (event: any) => {
        //setNameToGreet(event.target.value);
        setState({...state, nameToGreet: event.target.value});
    }

    useEffect(() => {
        document.title = `Hello ${state.nameToGreet} with click count ${state.count}`;
    }, [state.count, state.nameToGreet]);

    useEffect(() => {
        window.alert(`Hello ${state.nameToGreet}, be aware that you have clicked ${state.count} time(s).`);
        //if you remove the line below, you will get a warning because only count and not name is set as condition
        // eslint-disable-next-line
    }, [state.count]);

    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {state.nameToGreet}. Greetings from from React.</p>
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet} />
            </p>
            <p>You clicked {state.count} times</p>
            <p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setState({...state, count: state.count + 1})}>
                    Click me
                </button>
            </p>

        </div>
    )
}
export default HelloWorld5_2;
