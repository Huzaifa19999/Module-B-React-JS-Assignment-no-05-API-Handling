import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from '../components/Button';
import '../App.css';




function ApiHandlingScreen () {

    const [userList,setUserList] = useState<any>([]);

    const getApiData = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res.data,"Response Success");
            setUserList([...res.data])
        }).catch((err) => {
            console.log(err, "Response Failed");
        })
    }

    const deleteAllApiData = () => {

        setUserList([]);
    }

    const deleteApiData = (i:any) => {

        userList.splice(i,1);
        setUserList([...userList])
    }

    

    return (
        <>
        <Button className='btn btn-primary mt-4' label={"Get Api data"} onClick={getApiData} />
        <Button className='btn ms-4 btn-primary mt-4' label={"Delete All Api data"} onClick={deleteAllApiData} />
        <table className='mt-4 table table-bordered table-striped'>
            <thead className='thead-dark    '>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((e:any,index:any) => (
                    <tr key={index}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.address.street}</td>
                        <td>{e.phone}</td>
                        <td>
                       <Button className={'btn btn-primary'} label='Delete' onClick={deleteApiData} />
                        </td>
                    </tr>
                ) )}
            </tbody>
        </table>
        </>
    )

}



export default ApiHandlingScreen