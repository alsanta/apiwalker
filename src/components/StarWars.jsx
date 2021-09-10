import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const StarWars = (props) => {
    const [info,setInfo] = useState({});
    const [hw,setHw] = useState({});
    const {cat, id} = useParams();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${cat}/${id}`)
            .then(res=>{
                setInfo(res.data)
                console.log(res.data);
            })
            .catch(err=> console.log(err))
    },[cat,id])

    useEffect(()=>{
        axios.get(`${info.homeworld}`)
            .then(results=>{
                setHw(results.data);
                console.log(results.data);
                console.log(hw.url);
            })
            .catch(err=> console.log(err))
    },[info])

    return (
        <div>
            {
            cat==="people"
            ?
            <>
            <h3>Name: {info.name}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birthyear: {info.birth_year}</h3>
            <h3>HomeWorld: {hw.name}</h3>
            </>
            : 
            cat==="planets"
            ?
            <>
            <h3>Name: {info.name}</h3>
            <h3>Height: {info.climate}</h3>
            <h3>Mass: {info.terrain}</h3>
            <h3>Population: {info.population}</h3>
            </>
            :
            cat==="films"
            ?
            <>
            <h3>Name: {info.title}</h3>
            <h3>Height: {info.director}</h3>
            <h3>Mass: {info.producer}</h3>
            <h3>Episode number: {info.episode_id}</h3>
            </>
            :
            <>
            <h1>These are not the droids you are looking for</h1>
            <img src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg" alt="" />
            </>
            }
        
        </div>
    );
}

export default StarWars;