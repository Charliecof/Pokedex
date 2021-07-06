import React,{useState,useEffect} from 'react';
import axios from "axios";
import Badge from "./Badge";
function PokeCard({urlPokemon}) {
    const [nombre,setNombre] = useState("");
    const [sprite, setSprite] = useState("");
    const [info,setInfo] = useState("");

    useEffect(()=>{
        axios.get(urlPokemon)
            .then((result)=>{
                setInfo(result.data)
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
                    <div className=" media-content">
                        <div className="titulo is-flex is-align-content-space-between">
                            <p className="title is-size-4 ">{nombre}</p>
                            <p className=" is-size-4"> #{info.order}</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="is-flex" style={{width:"100%"}}>

                    { info !== "" ?
                        info.types.map((element)=>{
                            return <Badge colorCode="#ccc" text={element.type.name}/>
                        })
                    :
                        <p>Info</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;