import React, {useState} from 'react';
type Props = {
    name?: string;
    other?: string;
}
const HelloWorld4: React.FC<Props> = ({name = "John"})  => {
     const [nameToGreet, setNameToGreet] = useState<string>(name);
    const [count, setCount] = useState<number>(0);
    const changeNameToGreet = (event: any) => {
        setNameToGreet(event.target.value);
    }
    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {nameToGreet}. Greetings from React.</p> 
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/>
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
export default HelloWorld4;