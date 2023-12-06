function confirmar(){
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    localStorage.setItem("nombre1",n1)
    localStorage.setItem("nombre2",n2)
    window.location="ahorcado.html"
}