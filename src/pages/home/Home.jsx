import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
        <h2>Welcome</h2>
        <ul>
            <li>
                <Link to='add-emp'>Add New Employee</Link>
            </li>
        </ul>
        </>
    )
}
