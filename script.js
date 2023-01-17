console.log("hola estas en tattoott");

document.getElementById("iconMenu").addEventListener("click", mostrar_menu);
//aca yo digo q cuando doy click en el icon menu me va aejecutar un evento, el evento click, y ese evento click me va a llamar a la funcion "mostrar menu"
function mostrar_menu(){
    document.getElementById("mostrarMenu").classList.toggle("show-lateral")
}



//---------------buscador de contenido-----------------

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("containerContent").addEventListener("click", ocultar_buscador);

//declarando variables
bars_search = document.getElementById("ctn-bars-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("boxSearch");


//funcion para mostrar el buscador

function mostrar_buscador(){
    bars_search.style.top = "50px";
    inputSearch.focus();
}

//funcion para mostrar el buscador

function ocultar_buscador(){
    bars_search.style.top = "-30px";
    inputSearch.value = "";
}

//funciones para mostrar el filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementByTag("li");

    //recorriendo elementos a filtrar por los "li"
    for (i = 0; i < li.length; i ++){
        a = li[i].getElementByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf("filter") > -1){
            li[i].style.display = "";
            box_search.style.display = "block";
        }
        else{
            li[i].style.display = "none";
        }
    }

}
