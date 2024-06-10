import React from 'react';
type Props = {
    firstname?: string; //the question mark means that this is optional
    surname?: string; //the question mark means that this is optional
}
const HelloWorld2: React.FC<Props> = ({firstname = "John", surname})  => {
    return (
        <>
            <p>Hello {firstname} {surname}. Greetings from React with TypeScript</p> 
        </>
    )
}
//Below used to be the way to set default but defaultProps is now deprecated.
/*HelloWorld2.defaultProps = {
    name: "John"
}*/
export default HelloWorld2;
