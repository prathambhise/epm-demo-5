import React, { useState, useEffect } from "react";
import { convertXML } from "simple-xml-to-json";

export const ReadList = () => {
    const [items, setItems] = useState([]);  

    useEffect(() => {
        const readValues = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5500/emp-list.xml");
                const empData = await response.text();
                
                const convertedData = convertXML(empData);
                
                const allEmployees = convertedData.list.children.map((item) => ({
                    id: item.request.id,
                    username: item.request.children[0].username.content,
                    emails: {
                        work: item.request.children[1].emails.children[0].work.content,
                        personal: item.request.children[1].emails.children[1].personel.content,
                    },
                    address: item.request.children[2].address.content,
                    role: item.request.children[3].role.content,
                    gender: item.request.children[4].gender.content,
                }));

                setItems(allEmployees); 
            } catch (error) {
                console.error("Error fetching or processing data:", error);
            }
        };

        readValues();  
    }, []); 

    return (
        <div>
            <h3>Employee List</h3>
            <ul>
                {items.map((emp) => (
                    <li key={emp.id}>
                        <strong>{emp.username}</strong> - {emp.role} - {emp.emails.work}
                    </li>
                ))}
            </ul>
        </div>
    );
};
