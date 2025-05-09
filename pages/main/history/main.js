import title from "./title/main.js"
import section from "./section/main.js"

export default function history(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:95%;
            margin:40px 0px 0px 0px;
        }`

    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const history = cE("div", style)
    history.id = "história"
    history.appendChild(title())
    history.appendChild(section(lorem+lorem+lorem, "", 0))
    history.appendChild(section(lorem+lorem+lorem, "", 1))
    history.appendChild(section(lorem+lorem+lorem, "", 0))
    history.appendChild(section(lorem+lorem+lorem, "", 1))
    history.appendChild(section(lorem+lorem+lorem, "", 0))
    history.appendChild(section(lorem+lorem+lorem, "", 1))
    return(history)
}