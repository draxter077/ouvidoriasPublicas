import post from "./post/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            padding:0px 0px 0px 40px;
            transition:transform var(--transitionTime);
        }`

    const scroller = cE("div", style)
    scroller.appendChild(post())
    scroller.appendChild(post())
    scroller.appendChild(post())
    scroller.appendChild(post())

    window.addEventListener(
        "load",
        async function a(){
            let c = scroller.children.length, i = 0, w
            if(window.innerWidth > 1000){w = 400 + 20}
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