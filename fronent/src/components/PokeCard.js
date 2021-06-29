import React,{useState,useEffect} from 'react';
import axios from "axios";
function PokeCard({urlPokemon}) {
    const [nombre,setNombre] = useState("");
    const [sprite, setSprite] = useState("");

    useEffect(()=>{
        axios.get(urlPokemon)
            .then((result)=>{
                setNombre((result.data.species.name))
                setSprite(result.data.sprites.front_default);
            })
             .catch(err=> console.log(err));
    },[urlPokemon]);

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={sprite} alt=""/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="has-text-centered is-size-5 is-bold">{nombre}</p>
                    </div>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi beatae consequuntur delectus dolorum ducimus excepturi inventore itaque maxime, nemo nihil obcaecati perspiciatis porro quaerat, similique sint tempora unde.
                </div>
            </div>
        </div>
    );
}

export default PokeCard;