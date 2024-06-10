
/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import ShowUser from './ShowUser';
import { UserFetched } from './type-defs';

type Props = {
    name?: string;
}

const HelloWorld7: React.FC<Props> = ({ name = "Ife" }) => {
    //const [state, setState] = useState(initialState);
    const [userFetched, setUserFetched] = useState<UserFetched>({user: null, error: null});
    
    let userIdInput: MutableRefObject<HTMLInputElement | null> = useRef(null); 

    const fetchData = async () => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput.current!.value}`);
            if (response.status < 200 || response.status > 299){
                setUserFetched({user: null, error: `Response status = ${response.status}`});
                return;
            }
            const data = await response.json();
            setUserFetched({user: data, error: null});
        } catch (error:any) {
            setUserFetched({user: null, error: error.message});
        }
    };

    useEffect(() => {
         userIdInput.current!.focus();
    },[]) //do only once

    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {name}. Greetings from HelloWorld7.</p>
            <p>
                <input ref={userIdInput} type="text"
                placeholder="UserId (1 to 10) here" defaultValue={1}/>
            </p>
            <p>
                <button className='bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={fetchData}>
                    Fetch User
                </button>
            </p>
            <p>
                { userIdInput.current && userIdInput.current.value && <ShowUser userFetched={userFetched}/> }
            </p>
        </div>
    )
}

export default HelloWorld7;
