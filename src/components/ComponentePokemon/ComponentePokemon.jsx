import React,{useEffect,useState} from "react";
import axios from 'axios';

const ComponentePokemon = () =>{
    
    
    const[pokemon,setPokemon] = useState([]);
    const[click,setClick] = useState(true);



    const HizoClick = () => {
        setClick(prev => !prev);
    }

    useEffect(()=>{
        if(!click){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response =>{
                console.log(response)
                setPokemon(response.data.results);
            })
        }else{
            setPokemon([]);
        }
    },[click]);
    
    return(
        <div className="container">
            <br></br>
            <button className="btn btn-success" onClick={HizoClick} type="button">fetch pokemon</button>
            <ul>{
            pokemon.map( (item, i) => 
                <li key={ i }>{ item.name }</li>
            )
        }</ul>

        </div>
    );

}
export default ComponentePokemon;