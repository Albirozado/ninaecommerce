let openShow1 = document.querySelector(".container_1")
let openShow2 = document.querySelector(".container_2")
let i = 1
let virarprimeiro = document.getElementsByTagName("i")[1]
let mulhee = document.querySelector(".mulher_responsive")
let virarsegundo = document.getElementsByTagName("i")[2]
let roupaMulhee = document.querySelector(".roupa_mulher")
let virarterceiro = document.getElementsByTagName("i")[3]
let calcadoMulhee = document.querySelector(".calcado_mulher")
let virarquarto = document.getElementsByTagName("i")[4]
let homee = document.querySelector(".homem_responsive")
let virarquinto = document.getElementsByTagName("i")[5]
let roupaHomem = document.querySelector(".roupa_homem")
let virarsexto = document.getElementsByTagName("i")[6]
let calcadoHomem = document.querySelector(".calcado_homem")
let openOn = document.querySelector(".parte_de_cima") 




   
document.querySelector(".mulheres").onmouseenter = () =>{
    openShow1.classList.add("active")
    openShow2.classList.remove("activer")
    



}

document.querySelector(".container_1").onmouseleave = () =>{
    openShow1.classList.remove("active")

}
document.querySelector(".homens").onmouseenter = () =>{
    openShow2.classList.add("activer")
    openShow1.classList.remove("active")


}
document.querySelector(".container_2").onmouseleave = () =>{
    openShow2.classList.remove("activer")

}


document.querySelector(".mulheres").onclick = () =>{
    virarprimeiro.classList.toggle("vira")
    mulhee.classList.toggle("mulher")
    virarquarto.classList.remove("vira")
    homee.classList.remove("homem")

    virarsexto.classList.remove("vira")
    calcadoHomem.classList.remove("calcadoH")
    roupaHomem.classList.remove("roupaH")
    virarquinto.classList.remove("vira")

    virarsegundo.classList.remove("vira")
    roupaMulhee.classList.remove("roupaM")
    calcadoMulhee.classList.remove("calcadoM")
    virarterceiro.classList.remove("vira")
}

document.querySelector(".homens").onclick = () =>{
    virarquarto.classList.toggle("vira")
    homee.classList.toggle("homem")
    virarprimeiro.classList.remove("vira")
    mulhee.classList.remove("mulher")
    
    virarsexto.classList.remove("vira")
    calcadoHomem.classList.remove("calcadoH")
    roupaHomem.classList.remove("roupaH")
    virarquinto.classList.remove("vira")

    virarsegundo.classList.remove("vira")
    roupaMulhee.classList.remove("roupaM")
    calcadoMulhee.classList.remove("calcadoM")

    virarterceiro.classList.remove("vira")
}
document.querySelector("#roupasM").onclick = () =>{
    virarsegundo.classList.toggle("vira")
    roupaMulhee.classList.toggle("roupaM")
    calcadoMulhee.classList.remove("calcadoM")
    virarterceiro.classList.remove("vira")
}
document.querySelector("#clacM").onclick = () =>{
    virarterceiro.classList.toggle("vira")
    calcadoMulhee.classList.toggle("calcadoM")
    roupaMulhee.classList.remove("roupaM")
    virarsegundo.classList.remove("vira")
}
document.querySelector("#roupasH").onclick = () =>{
    virarquinto.classList.toggle("vira")
    roupaHomem.classList.toggle("roupaH")
    calcadoHomem.classList.remove("calcadoH")
    virarsexto.classList.remove("vira")
}

document.querySelector("#calcH").onclick = () =>{
    virarsexto.classList.toggle("vira")
    calcadoHomem.classList.toggle("calcadoH")
    roupaHomem.classList.remove("roupaH")
    virarquinto.classList.remove("vira")
}

document.querySelector(".hambuerguer").onclick = () =>{
    openOn.classList.add("abrir")
}

document.querySelector(".close").onclick = () =>{
    openOn.classList.remove("abrir")
    virarprimeiro.classList.remove("vira")
    mulhee.classList.remove("mulher")
    virarquarto.classList.remove("vira")
    homee.classList.remove("homem")

    virarsexto.classList.remove("vira")
    calcadoHomem.classList.remove("calcadoH")
    roupaHomem.classList.remove("roupaH")
    virarquinto.classList.remove("vira")

    virarsegundo.classList.remove("vira")
    roupaMulhee.classList.remove("roupaM")
    calcadoMulhee.classList.remove("calcadoM")
    virarterceiro.classList.remove("vira")
}

window.onscroll = () =>{
    openOn.classList.remove("abrir")
    virarprimeiro.classList.remove("vira")
    mulhee.classList.remove("mulher")
    virarquarto.classList.remove("vira")
    homee.classList.remove("homem")

    virarsexto.classList.remove("vira")
    calcadoHomem.classList.remove("calcadoH")
    roupaHomem.classList.remove("roupaH")
    virarquinto.classList.remove("vira")

    virarsegundo.classList.remove("vira")
    roupaMulhee.classList.remove("roupaM")
    calcadoMulhee.classList.remove("calcadoM")
    virarterceiro.classList.remove("vira")
    
}


