import construct from "./pages/construct.js"

window.createElementToPage = function createElementToPage(t, s){
    function addClass(stl){
        function randomName(names){
            const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            let name = ""
            while(true){
                for(let k = 0; k < 10; k++){
                    let n = Math.floor((chars.length)*Math.random())
                    name += chars[n]
                }
                for(let l = 0; l < names.length; l++){
                    if(name == names[l]){
                        name = ""
                        break
                    }
                }
                if(name != ""){
                    break
                }
            }
            return(name)
        }

        let stylesTag = document.getElementsByTagName("style")[0].innerHTML
        let styles = stylesTag
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .split("}")
        let stylesNames = []
        let stylesNamesObject = []
        for(let i = 0; i < styles.length; i++){
            let s = styles[i].split("{")
            let n = s[0]
            let b = s[1]
            if(n[0] == "."){
                stylesNames.push(n)
            }
            if(b != undefined && b != ""){
                let bs = b.split(";")
                let atrValues = []
                for(let j = 0; j < bs.length; j++){
                    let ats = bs[j].split(": ")
                    if(ats[0] != undefined && ats[0] != ""){
                        atrValues.push([ats[0], ats[1]])
                    }
                }
                stylesNamesObject.push([n, atrValues])
            }
        }

        const className = randomName(stylesNames)
        document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl}`
        return(className)
    }

    const el = document.createElement(t)
    el.className = addClass(s)
    return(el)
}

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
construct()