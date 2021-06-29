import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav";
import PokeCard from "../components/PokeCard";
import axios from "axios";

function Home(props) {
    const [pokemones,setPokemones] = useState([]);
    const [page,setPage] = useState(0);
    const cards ={};

        useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset="+ page +"&limit=10")
            .then(res=>{
                setPokemones(res.data.results);
            })
            .catch(err=>console.log(err));
    },[page]);


    return (
        <div className="p-0 container is-fluid">
            <Nav></Nav>
            <div className="section">
                <h1 className="title has-text-centered">Pokemon</h1>
                <div className="columns">
                    {pokemones.map((poke,index)=>{
                        if (index<5){
                            return(
                                <div className="column is-one-fifth">
                                    <PokeCard key={index} urlPokemon={poke.url}></PokeCard>
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })}
                </div>
                <div className="columns">
                    {pokemones.map((poke,index)=>{
                        if (index>=5){
                            return(
                                <div className="column is-one-fifth">
                                    <PokeCard key={index} urlPokemon={poke.url}></PokeCard>
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })}
                </div>
                <button className="button" onClick={()=>{ if (page!=0) setPage(page-10)}}>Back</button>
                <button className="button" onClick={()=>{setPage(page+10)}}>Next</button>
            </div>

        </div>
    );
}

export default Home;