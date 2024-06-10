import React from 'react';
import { UserFetched } from './type-defs'

type Props = {
    userFetched: UserFetched;
}

const ShowUser: React.FC<Props> = ({ userFetched }) => {

    const showUser = () => {
        if (userFetched.user) {
            const user = userFetched.user;
            return (
                <table className="border-separate border-spacing-2 border border-slate-400">
                    <thead>
                        <tr>
                            <th className='border border-slate-300'>Property</th>
                            <th className='border border-slate-300'>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300'>id</td>
                            <td className='border border-slate-300'>{user.id}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>name</td>
                            <td className='border border-slate-300'>{user.name}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>username</td>
                            <td className='border border-slate-300'>{user.username}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>email</td>
                            <td className='border border-slate-300'>{user.email}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>address</td>
                            <td className='border border-slate-300'>{user.address.street}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>phone</td>
                            <td className='border border-slate-300'>{user.phone}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>website</td>
                            <td className='border border-slate-300'>{user.website}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300'>company</td>
                            <td className='border border-slate-300'>{user.company.name}</td>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return `No user to display: ${userFetched.error}`;
        }

    }

    return (
        <div>
            {showUser()}
        </div>
    )
}

export default ShowUser;
