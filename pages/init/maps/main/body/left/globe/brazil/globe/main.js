import img from "./img/main.js"
import option from "./option/main.js"

export default function globe(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 90%;
            width: fit-content;
            position: relative;
        }`

    const globe = createElementToPage(undefined, "div", style)
    globe.appendChild(img())

    const c = [{t: "Alagoas", top: "41%", left: "92%"},
        {t: "Amapá", top: "13%", left: "55%"},
        {t: "Amazonas", top: "28%", left: "26%"},
        {t: "Bahia", top: "48%", left: "79%"},
        {t: "Ceará", top: "30%", left: "75%"},
        {t: "Distrito Federal", top: "54%", left: "64%"},
        {t: "Espírito Santo", top: "64%", left: "81%"},
        {t: "Goiás", top: "55%", left: "60%"},
        {t: "Maranhão", top: "30%", left: "71%"},
        {t: "Mato Grosso do Sul", top: "66%", left: "50%"},
        {t: "Minas Gerais", top: "62%", left: "72%"},
        {t: "Pará", top: "27%", left: "52%"},
        {t: "Paraíba", top: "35%", left: "93%"},
        {t: "Paraná", top: "76%", left: "55%"},
        {t: "Pernambuco", top: "38%", left: "93%"},
        {t: "Piauí", top: "36%", left: "77%"},
        {t: "Rio de Janeiro", top: "70%", left: "77%"},
        {t: "Rio Grande do Sul", top: "88%", left: "51%"},
        {t: "Rondônia", top: "43%", left: "28%"},
        {t: "Roraima", top: "12%", left: "32%"},
        {t: "São Paulo", top: "71%", left: "62%"},
        {t: "Sergipe", top: "44%", left: "90%"}
        ]

    for(let i = 0; i < c.length; i++){
        globe.appendChild(option(c[i].t, c[i].top, c[i].left))
    }
    return(globe)
}