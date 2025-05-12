import post from "./post/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
            padding:0px 0px 0px 40px;
            transition:transform var(--transitionTime);
        }
        :responsive{
            padding:0px 0px 0px 20px;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(post("https://ouvidoria.tcepe.tc.br/wp-content/uploads/2022/09/tce-A-Ouvidoria-Publica-capa-Andrey-Popov.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://img.freepik.com/fotos-gratis/pessoas-em-filmagem-media-trabalhando-juntas_23-2149636268.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://static.vecteezy.com/ti/fotos-gratis/p2/2978359-close-up-de-pessoas-trabalhando-no-escritorio-gratis-foto.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://media.istockphoto.com/id/1434212178/pt/foto/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=612x612&w=0&k=20&c=cqKEcdL2Rb0dilodWnJf7udizXbpyv_q8EaF94YRUqQ=", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://ouvidoria.tcepe.tc.br/wp-content/uploads/2022/09/tce-A-Ouvidoria-Publica-capa-Andrey-Popov.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://img.freepik.com/fotos-gratis/pessoas-em-filmagem-media-trabalhando-juntas_23-2149636268.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://static.vecteezy.com/ti/fotos-gratis/p2/2978359-close-up-de-pessoas-trabalhando-no-escritorio-gratis-foto.jpg", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))
    scroller.appendChild(post("https://media.istockphoto.com/id/1434212178/pt/foto/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=612x612&w=0&k=20&c=cqKEcdL2Rb0dilodWnJf7udizXbpyv_q8EaF94YRUqQ=", "1ª Ouvidoria Pública do Mundo nasce em Curitiba-PR na tarde de hoje. Estavam presentes Deus, Jesus, Greca e Manoel"))

    window.addEventListener(
        "load",
        async function a(){
            let c = scroller.children.length, i = 0, w
            if(window.innerWidth > 1000){w = 500 + 20}
            else{w = window.innerWidth*0.8 + 20}
            while(true){
                await new Promise(resolve => setTimeout(resolve,2000))
                scroller.style.transform = `translate(-${w*i}px)`
                i += 1
                if(i == c){
                    await new Promise(resolve => setTimeout(resolve,2000))
                    scroller.style.transform = `translate(0px)`
                    i = 1
                }
            }
        }
    )
    return(scroller)
}