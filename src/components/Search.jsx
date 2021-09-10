import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Search = (props) => {
    const [categories,setCategories] = useState([]);

    const [formInfo,setFormInfo] = useState({
        cat:'people',
        id:'',
    })
    
    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                setCategories(Object.keys(res.data))
            })
            .catch(err=> console.log(err))
    },[])

    const changeHandler = (e)=>{
        setFormInfo({...formInfo,
            [e.target.name]:e.target.value
    })
}

    const submitHandler = (e)=>{
        e.preventDefault();
        history.push(`/${formInfo.cat}/${formInfo.id}`)
    }



    return (
        <div>
            <form onSubmit={(e)=> submitHandler(e)} action="">
                <div className="form-group">
                    <label className="me-1" htmlFor="">Search for: </label>
                    <select className="me-3" onChange={(e)=>changeHandler(e)}name="cat" id="">
                        {
                        categories.map((cat,i)=>{
                            return <option key= {i}value={cat}>{cat}</option>
                        })
                        }
                    </select>
                    <label className="me-1" htmlFor="">ID: </label>
                    <input onChange={(e)=>changeHandler(e)}name="id" className="me-3" type="number" />
                    <input className="btn btn-success" type="submit" value="Search" />
                </div>
            </form>
        </div>
    );
}


export default Search;