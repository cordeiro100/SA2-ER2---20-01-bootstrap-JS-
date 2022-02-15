
// let menu = document.getElementById("menu");
//     function mostrarMenu(){
//         if(menu.style.display != "flex"){
//             menu.style.display = "flex"
//         }
//         else{
//             menu.style.display = "none"
//         }
//     }



    let email = document.getElementById("campo-email"); 

    function enviarEmail() {
        let emailDigitado = email.value;
        console.log(emailDigitado)
    }

        $(document).ready(function(){
            $("#barras").click(function(){
                $("#menu").toggleClass("menu-ativo")
            })
        
        })

  $(document).ready(function(){
      $("#carrosel img:eq(0)").addClass("banner-ativo").show()
  })
   
  
  setInterval(slide,1000);
  
  function slide() {
     
        if($(".banner-ativo").next().length){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $(".banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }
    }


let listaNoticias = [
         {
            titulo: "MaxVerstappen",
            descricao: "Verstappen revela cãibras nos momentos finais do GP de Abu Dhabi: “Não aguentaria mais uma volta”"
        },

        {
            titulo: "Sergio Perez",
            descricao:"Pérez admite dificuldade em parceria com Verstappen após 2021 de muita pressão"
        },
        
        {
            titulo: "Lewis Hamilton",
            descricao: "Lewis Hamilton volta às redes e divulga imagens de corrida por Londres"
        },

        {
            titulo: "Pierre Gasly",
            descricao: "Gasly elogia método de trabalho da Honda na F1"
        }
    
]


    function renderizarNoticias() {
        let espaco = document.getElementById("espaco-noticias")
   

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];
       
            template += `<div class="noticia1">
            <img src="img/f1-logo.png">
            <h3>Max Verstappen</h3>
            <p>Verstappen revela cãibras nos momentos finais do GP de Abu Dhabi: “Não aguentaria mais uma volta”</p>
        </div> ` 
       }
       espaco.innerHTML = template;
    }



