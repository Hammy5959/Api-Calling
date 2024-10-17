"use client";

import { useState } from "react";

export default function Home() {
  const [todo, setTodos] = useState([
    {
      id: null,
      todo: "",
    },
  ]);

  async function apiCall() {
    const res = await fetch("https://dummyjson.com/todos");
    const apiData = await res.json();
    setTodos(apiData.todos);
  }
  return (
    <>
      <button onClick={apiCall} className="bg-green-400 p-4 mt-2 ">
        {" "}
        Api Call Button
      </button>
      {todo.map((item) => {
        return (
          <div className="bg-slate-400 p-7 mt-7">
            {item.id} -{item.todo}
          </div>
        );
      })}
    </>
  );
}
