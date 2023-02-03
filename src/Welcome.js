import React from "react"

export function Welcome ({name = "Buddy"} ) {
    return(
    <h2>Welcome, {name}</h2>
    )
}