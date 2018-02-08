//
// function valida(){
//     var usuario = document.getElementById('usuario');
//     var pass = document.getElementById("password");
//
//     if((usuario == " ")||(pass == " ")){
//         window.alert("Los campos usuario y contraseña no pueden estar vacios");
//     }else{
//         envia('login');
//     }
// }
//
// function envia(pag){
//     document.form.action = 'collage.html';
//         document.form.submit();
// }


function envia(pag){
    document.form.action = 'collage.html';
        document.form.submit();
}
function valida(){
var usuario = document.getElementById('usuario');
var pass = document.getElementById("password");

if((usuario.value == "")||(pass.value == "")){
window.alert("Los campos usuario y contraseña no pueden estar vacios");
}
else{
envia('login');
}
}



// Referencia : http://www.forosdelweb.com/f13/validacion-sencilla-formulario-login-con-javascript-1071397/
