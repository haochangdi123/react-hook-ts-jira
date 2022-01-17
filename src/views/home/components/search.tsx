import React from "react";

export interface User {
  id: string;
  name: string;
  organization: string;
  title: string;
  email: string;
}

interface SearchProps {
  person: {
    name: string;
    personId: string;
  };
  users: User[];
  setSerch: (param: SearchProps["person"]) => void;
}

export default function Search(props: SearchProps) {
  return (
    <div>
      <span>name:</span>
      <input
        type="text"
        value={props.person.name}
        onChange={(evt) =>
          props.setSerch({
            ...props.person,
            name: evt.target.value,
          })
        }
      />
      <select
        value={props.person.personId}
        onChange={(evt) =>
          props.setSerch({
            ...props.person,
            personId: evt.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {props.users.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
