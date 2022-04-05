import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import list from './data';

const Product=()=>{
    const {id}=useParams();
    const [search,setSearch]=useSearchParams();
    console.log(search.get('ok'));
    return<>
       {list.filter(itm=>itm.id==id).map((itm,i)=>(<h1 key={i}>{itm.name}</h1>))}
    </>
}
export default Product;