var countNoticia=0;

function verConteudo(pagina, bgd){
    var bg = new String(bgd);
    var idelem = "#dynamicMain";
    $(idelem).fadeOut('slow',function(){
         $(idelem).html('');
         $(idelem).fadeIn('slow',function(){$(idelem).html('<div class="imgLoading"><img src="img/loading.gif" alt="" /><br>Carregando...</div>');});                
       });
    $.ajax({
          url: pagina,
          success: function(data) {
           $(idelem).fadeOut('slow',
                            function(){  
                                $(idelem).fadeIn('slow',function(){
                                $(idelem).html(data);
                            });
           }); 
          }
          ,
          cache: false,
          statusCode: { 
              404: function() {
                  $(idelem).fadeIn('slow',function(){
                    $(idelem).html('<h2>Página não encontrada</h2><img src="img/erro404.gif" style="float:left; width:100px" /><div class="msgErro">O pessoal que fez este site comeram bola. Esqueceram de criar ou colocar o arquivo "'+ pagina +'". Aí não dá né!</div>');
                  });
              }
          }    
           
    });
    if (bg.length > 9){
        $("body").css("background",bg); 
    }
    else{
        $("body").css("background","url('a')"); 
    }
}
function atualizaLateral(t){
    if (countNoticia>6){
        countNoticia = 1;
    } else {
        countNoticia++;
    }
    $.ajax({
          url: "ajaxNews.php?n=" + countNoticia,
          success: function(data) {
             $("#conteudoLateral").fadeOut('slow',function(){  
                 var d = $("#conteudoLateral").html();
              $("#conteudoLateral").html(data + d);
              });
              
              $("#conteudoLateral").fadeIn('slow',function(){
                    
                   
              }); 
          }
    });
    if (t!="")setTimeout('atualizaLateral()',9000);
}
  

function showFadeIn(idelem){
    $(idelem).fadeIn('slow',function(){});
}
function fadeOut(idelem){
    $(idelem).hide();
    
}
function forgetPassword(){            
    showFadeIn('#formForget'); 
    fadeOut('#formLogin *');
}
function showLogin(){
  showFadeIn('#formLogin *');
  fadeOut('.linkLogin')
}
function hideLogin(){
  fadeOut('#formLogin *');
  showFadeIn('.linkLogin')
}
function hideForget(){
  fadeOut('#formForget');
  showLogin();
}
function newUser(){
  
  
}
function showSelectSignin(id){
  $('#dLogin').hide();
  $('#dNew').hide();
  $('#dGuest').hide();
  
  switch (id) {
    case 1:
      $('#dLogin').fadeIn();
      
      break;
      
    case 2:
      $('#dNew').fadeIn();
     
      break;
    
    case 3:
      $('#dGuest').fadeIn();
      
  
  }

  
  
}
function isEmail(email){
        if (email.match($.regexpCommon('email')) ) {
          return 1;
        }
        return 0;
}
function msgCheckEmail(idemail, idmsg ){
     
     if (!isEmail($(idemail).val())){
         $(idmsg).fadeIn();
         $(idmsg).html('E-mail inválido');
         
     } else {
         $(idmsg).fadeOut();
     }
}
function msgCheckCPF(idcpf, idmsg ){
     
     if (!vercpf($(idcpf).val())){
         $(idmsg).fadeIn();
         $(idmsg).html('CPF inválido');
         
     } else {
         $(idmsg).fadeOut();
     }
}


function showTerms(){
      frameModal('#dialog', 'termos.html')

}
function showPrivacy(){
      frameModal('#dialog', 'privacidade.html')

}

function vercpf (cpf) {
      if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999") return false;
            add = 0;
      for (i=0; i < 9; i ++) add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(9))) return false;
      add = 0;
      for (i = 0; i < 10; i ++) add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(10)))return false;
      return true;
  }
        
 function onSubmitFormSignin(){
      if(!vercpf(document.formSignin.cpf.value)){
        alert('Insira um CPF valido');
        return false;
      }else{
        if(!isEmail($('#frmSigninEmail').val())){
            alert('Insira um e-mail valido');
            return false;
        }
      }

 }
