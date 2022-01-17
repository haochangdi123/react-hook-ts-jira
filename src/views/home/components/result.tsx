import React from "react";
import { User } from "./search";

interface project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ResultParams {
  list: project[];
  users: User[];
}

export default function Result({ list, users }: ResultParams) {
  return (
    <table>
      <thead>
        <th>名称</th>
        <th>负责人</th>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{users.find((item) => item.id === project.id)?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
