import o2x from 'object-to-xml'

function ToXml(newEmp) {

    var obj = {
        '?xml version=\"1.0\" encoding=\"iso-8859-1\"?': null,
            request: {
                '@': {
                    type: 'employee',
                    id: 12344556
                },
                '#': {
                    employees: {
                        username: newEmp.username,
                        emails:{
                            work: newEmp.email,
                            personel: 'example@gmail.com'
                        },
                        address: newEmp.address,
                        role: newEmp.role,
                        gender: newEmp.gender,
                    }
                }
            }
    };

    const xmlValue = o2x(obj)
    console.log('')
    console.log('XML out put type: ' + typeof(xmlValue))
    console.log(xmlValue)

    return (xmlValue)
}

export default ToXml



//     for multiple concat the string
//     let x = xmlValue + xmlValue
//     console.log(x)
