import React, { useEffect, useState } from "react";
import Result from "./components/result";
import Search from "./components/search";
import QueryString from "qs";
import { clearObj, useMount, useDebounce } from "utils";

// JS 的错误多发生在runtime（运行时）
// 我们希望静态代码中也能找到错误 --> 强类型
const URL = process.env.REACT_APP_API_URL;

export default function Home() {
  const [person, setPerosn] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncePerson = useDebounce(person, 2000);

  const setSerch = (
    v: React.SetStateAction<{ name: string; personId: string }>
  ) => {
    setPerosn(v);
  };

  useMount(() => {
    fetch(`${URL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  useEffect(() => {
    fetch(
      `${URL}/projects?${QueryString.stringify(clearObj(debouncePerson))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncePerson]);

  return (
    <div>
      this is home
      <Search person={person} setSerch={(v) => setSerch(v)} users={users} />
      <Result list={list} users={users} />
    </div>
  );
}
