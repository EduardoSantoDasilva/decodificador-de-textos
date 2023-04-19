let textoDigitado = document.querySelector("textarea");
let mostrarTexto = document.querySelector(".mostrarTexto");
let descriptografar = document.querySelector(".descriptografar");
let criptografar = document.querySelector(".criptografar");
let imagem = document.querySelector("#imagem");
let h2 = document.querySelector("h2");
let copiar = document.querySelector(".copiar");

descriptografar.addEventListener('click', ()=>{
    
    let frase = textoDigitado.value;
   
 if(frase != ""){
    
    frase = frase.replaceAll("enter", "e");
    frase = frase.replaceAll("imes", "i");
    frase = frase.replaceAll("ai", "a");
    frase = frase.replaceAll("ober", "o");
    frase = frase.replaceAll("ufat", "u");
 
    imagem.style.display = "none";
    h2.style.display = "none";
    copiar.style.display = "block";
 
    mostrarTexto.innerHTML = " "+frase;
 }else{
    console.log("frase "+frase)
    alert("digite um texto por favor")
 }
    
});


criptografar.addEventListener('click', ()=>{
    let frase = textoDigitado.value;
    if(frase != ""){
        console.log("frase "+frase)
        frase = frase.replaceAll("e","enter");
        frase = frase.replaceAll("i","imes");
        frase = frase.replaceAll("a","ai");
        frase = frase.replaceAll("o","ober");
        frase = frase.replaceAll("u","ufat");
    
        imagem.style.display = "none";
        h2.style.display = "none";
        copiar.style.display = "block";
    
        mostrarTexto.innerHTML = " "+frase
    }
    else{
        console.log("txto")
        alert("digite um texto por favor")
    }
});

copiar.addEventListener('click', () => {
    
    navigator.clipboard.writeText(mostrarTexto.textContent);
    console.log(mostrarTexto.textContent)
    alert('Texto copiado com sucesso!');
});

