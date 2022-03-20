import { useEffect, useState } from "react";

const GitApi = (props)=>
{
    const [data_1,setData] = useState();
    const {name} = props; 
    useEffect(()=>
    {
        fetch(`https://api.github.com/users/${name}`).then(data=> data.json()).then((data)=> {console.log(data)
        setData(data);
    }
        )
    },[])
    return (
        <>
        {
            JSON.stringify(data_1)
        }
        {data_1 && <> <img src={data_1.avatar_url}>
        </img> </> }
        </>

    )
}
export default GitApi;