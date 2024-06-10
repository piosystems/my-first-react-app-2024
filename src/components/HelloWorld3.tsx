import React, {useState} from 'react';
type Props = {
    name?: string;
    other?: string;
}
const HelloWorld3: React.FC<Props> = ({name = "John"})  => {
    //Syntax for state is const [state, setState] = useState(initialState);

    const [nameToGreet, setNameToGreet] = useState(name);

    const changeNameToGreet = (event: any) => {
        setNameToGreet(event.target.value);
    }
    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {nameToGreet}. Greetings from React.</p> 
            <p>
                <input type="text" placeholder="Write a name here1..." name="name_to_greet" onInput={(changeNameToGreet)}/>
            </p>
        </div>
    )
}
export default HelloWorld3;