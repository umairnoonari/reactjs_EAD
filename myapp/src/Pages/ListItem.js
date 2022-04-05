import { useParams,useSearchParams } from "react-router-dom";
import list from "../data";

const ListItem  = ()=>
{
    
    const {item}  = useParams();
    const [search,setSearch ]=  useSearchParams();
    console.log(search.get("ok"))
    console.log(item)
   const findItem =  list.find(it => it.id == item)

    return (
        <>
        {
            JSON.stringify(findItem)
        }

        </>

    )
};
export default ListItem;