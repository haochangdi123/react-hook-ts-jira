
import React from "react";

export default function Search(props) {
    return (
        <div>
            <span>name:</span>
            <input
                type="text"
                value={props.person.name}
                onChange={(evt) => props.setSerch({
                    ...props.person,
                    name:evt.target.value})
                }
            />
            <select
                value={props.person.personId}
                onChange={(evt) => props.setSerch({
                    ...props.person,
                    personId:evt.target.value})
                }
            >
                <option value="">负责人</option>
                {
                    props.users.map((item) => {
                        return <option value={item.id} key={item.id}>{item.name}</option>
                    })
                }
            </select>

        </div>
    )
}