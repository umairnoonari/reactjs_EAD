import { NavLink,Link, useSearchParams, createSearchParams } from 'react-router-dom'
import list from './data'
const Products=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const newParams=createSearchParams();
    newParams.set('price','400')
    return<>
    <h1>Product details</h1>
    <button onClick={()=>(setSearchParams(newParams))}>200</button>
    {list.map((itm,i)=>(<li><NavLink key={i} to={`/product/${itm.id}`}>{itm.name}</NavLink></li>))}  
    {/* {list.map((item,i)=> (<Link key={i} to={`/product/${item.id}`}> {item.name}</Link>))} */}

    </>
}
export default Products;