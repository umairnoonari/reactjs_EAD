import { Link } from "react-router-dom"
import list from "./data"

export default function Listview()
{

    
    return(
        list.map((item,i)=> (<Link key={i} to={`${item.id}`}> {item.name}</Link>))

    )
}