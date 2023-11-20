import { useState } from "react";

export const ToDoList = () => {
   const [list, setList] = useState([""]);
   const [listItem, setListItem] = useState("");
   return (
      <div className="w-full">
         <div className="grid p-10">
            <input
               className="border"
               onChange={(e) => setListItem(e.target.value)}
               value={listItem}
            />
            <button
               className=""
               onClick={() => {
                  setList([...list, listItem]);
                  setListItem("");
               }}
            >
               add
            </button>
            {list.map((item) => (
               <div>{item}</div>
            ))}
         </div>
      </div>
   );
};
