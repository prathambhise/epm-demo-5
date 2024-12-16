
// Read XML and convert to Json


import { convertXML, createAST } from "simple-xml-to-json"

function ToJson(newReq) {
    const myXMLString =
        `<?xml version="1.0" encoding="utf-8"?>            
            <request type="new-registration" logged="true">
                <username>${newReq.username}</username>
                <email>${newReq.email}</email>
                <address>${newReq.address}</address>
                <role>${newReq.role}</role>
                <gender>${newReq.gender}</gender>
            </request>
        `;


    const myJson = convertXML(myXMLString)

    console.log('')
    console.log('Extracting username from object xml-to-json\n'+
        'myJson.request.children[0].username.content: '+
        myJson.request.children[0].username.content
    )
    console.log('')

    console.log('Json Object=>')
    console.log(myJson)

    return myJson

    // const myYaml = convertXML(myXMLString, yamlConverter)
    // const myAst = createAST(myXMLString)

}

export default ToJson
