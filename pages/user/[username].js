import {useRouter} from 'next/router';

const ind=()=>{
    const r=useRouter();
    console.log(r);
    return(
        <div>
            <h1>This is {r.query.username} of user.....</h1>
        </div>
    )
}

export default ind;