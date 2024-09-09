import author from "./author/main.js"
import date from "./date/main.js"

export default function authorDate(){
    const authorDate = document.createElement("div")
    authorDate.appendChild(author())
    authorDate.appendChild(date())
    return(authorDate)
}