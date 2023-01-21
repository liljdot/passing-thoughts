import React, { useEffect } from "react";

export function Thought(props) {
    const { id } = props

    const removeThought = (e) => {
        props.removeThought(e)
    }



    useEffect(() => {
        setTimeout(() => { removeThought(id) }, 15000);


    }, [id])


    return (
        <div class='card'>
            <h1>{props.details}</h1>

        </div>
    )
}