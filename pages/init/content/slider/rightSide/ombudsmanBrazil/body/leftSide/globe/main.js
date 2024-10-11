import img from "./img/main.js"
import option from "./option/main.js"

export default function globe(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 90%;
            width: fit-content;
            position: relative;
        }`

    const globe = document.createElement("div")
    globe.className = "initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe"
    globe.appendChild(img())

    const c = [{t: "Rede de ouvidoria de Alagoas", top: "41%", left: "92%"},
        {t: "Rede de ouvidorias do Amapá", top: "13%", left: "55%"},
        {t: "Rede de ouvidorias do Amazonas", top: "28%", left: "26%"},
        {t: "Rede de ouvidorias do Estado da Bahia", top: "48%", left: "79%"},
        {t: "Rede de ouvidorias do Estado do Ceará", top: "30%", left: "75%"},
        {t: "Rede de ouvidorias públicas do Distrito Federal", top: "54%", left: "64%"},
        {t: "Rede de ouvidoria estadual do Espírito Santo", top: "64%", left: "81%"},
        {t: "Rede de ouvidorias de Goiás", top: "55%", left: "60%"},
        {t: "Rede de ouvidorias do Estado do Maranhão", top: "30%", left: "71%"},
        {t: "Rede de ouvidorias públicas do Mato Grosso do Sul", top: "66%", left: "50%"},
        {t: "Rede mineira de Ouvidorias Públicas", top: "62%", left: "72%"},
        {t: "Rede de ouvidorias públicas do Pará", top: "27%", left: "52%"},
        {t: "Rede de ouvidorias da Paraíba", top: "35%", left: "93%"},
        {t: "Rede de ouvidorias do Paraná", top: "76%", left: "55%"},
        {t: "Rede de ouvidorias do Estado de Pernambuco", top: "38%", left: "93%"},
        {t: "Rede de ouvidorias públicas do Piauí", top: "36%", left: "77%"},
        {t: "Rede de ouvidorias e transparência do Rio de Janeiro", top: "70%", left: "77%"},
        {t: "Rede RS de ouvidorias públicas", top: "88%", left: "51%"},
        {t: "Rede de ouvidorias de Rondônia", top: "43%", left: "28%"},
        {t: "Rede estadual de ouvidorias de Roraima", top: "12%", left: "32%"},
        {t: "Rede paulista de Ouvidorias", top: "71%", left: "62%"},
        {t: "Rede de ouvidorias estadual do Sergipe", top: "44%", left: "90%"}
        ]

    for(let i = 0; i < c.length; i++){
        globe.appendChild(option(c[i].t, c[i].top, c[i].left))
    }
    return(globe)
}