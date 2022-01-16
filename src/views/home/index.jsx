
import React, { useEffect, useState } from "react";
import Result from './components/result';
import Search from './components/search';
import QueryString from "qs";
import { clearObj } from "utils";

const URL = process.env.REACT_APP_API_URL

export default function Home() {
    const [person, setPerosn]  = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    const setSerch = (v) => {
        setPerosn(v)
    }

    useEffect(() => {
        fetch(`${URL}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])

    useEffect(() => {
        fetch(`${URL}/projects?${QueryString.stringify(clearObj(person))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [person])

    return (
        <div>
            this is home
            <Search person={person} setSerch={(v) => setSerch(v)} users={users}/>
            <Result list={list} users={users}/>
        </div>
    )
}