import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [user_list, setUserList] = useState([])


    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUserList(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    // 第二引数に依存する変数を代入する（省略できる。）
    console.log(user_list)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <ul>
                {user_list.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}

            </ul>
        </>
    )
}

export default Form;
