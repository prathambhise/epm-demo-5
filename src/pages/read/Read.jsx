import { useState, useEffect  } from "react"
import { convertXML, createAST } from "simple-xml-to-json"


export const Read = () => {
    let [abc, setAbc] = useState({
        username: '',
        emails: {
            work: '',
            personel: '',
        },
        address: '',
        role: '',
        gender: '',

    })
    const readValues = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5500/index.xml");
            const empData = await response.text(); 
            
            const parser = new DOMParser();
            const xml = parser.parseFromString(empData, "application/xml");
            
            const convertedData = convertXML(empData);  
            setAbc({
                username: convertedData.request.children[0].username.content,
                emails: {
                    work: convertedData.request.children[1].emails.children[0].work.content,
                    personel: convertedData.request.children[1].emails.children[1].personel.content,
                },
                address: convertedData.request.children[2].address.content,
                role: convertedData.request.children[3].role.content,
                gender: convertedData.request.children[4].gender.content,
        
            })

        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    };
    
    useEffect(() => {
        readValues();  
    }, []);  

    return (
        <div>
            <h3>Loaded Data:</h3>  
            {abc.username} <br />
            {abc.emails.work} <br />
            {abc.emails.personel} <br />
            {abc.address} <br />
            {abc.role} <br />
            {abc.gender} <br />
        </div>
    );
};
