import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../responsesApi/getGifs";

export default function SearchResults({ params }){
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function (){
        setLoading(true)
        getGifs({ keyword })
            .then( gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
    {loading
        ? <i>Cargando</i>
        : <ListOfGifs gifs={gifs} />
    }
    </>
}