// JavaScript Document


function frameModal(id, urlm){
        //armazena a largura e a altura da tela
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $(id).html('');
              
        //Define largura e altura do div#mask iguais ßs dimens§es da tela
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //efeito de transiþÒo
        //$('#mask').fadeIn(300);
        $('#mask').fadeTo("fast",0.7);
        
        //armazena a largura e a altura da janela
        var winH = $(window).height();
        var winW = $(window).width();
        //centraliza na tela a janela popup
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
        //efeito de transiþÒo
        $.ajax({
          url: urlm,
          success: function(data) {
             //$(id).fadeOut('slow',function(){  
              $(id).html(data);
              //});
              
              $(id).fadeIn('slow',function(){
                    
                   
              }); 
          }
        });
        $(id).fadeIn(500);
}
function windowModal(id, data){
        //armazena a largura e a altura da tela
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        
        //Define largura e altura do div#mask iguais ßs dimens§es da tela
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //efeito de transiþÒo
        //$('#mask').fadeIn(300);
        $('#mask').fadeTo("fast",0.7);
        
        //armazena a largura e a altura da janela
        var winH = $(window).height();
        var winW = $(window).width();
        //centraliza na tela a janela popup
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).css('height', '400px');
        //efeito de transiþÒo
        //$.ajax({
        //  url: urlm,
        //  success: function(data) {
        //$(id).fadeOut('slow',function(){  
              $(id).html(data);
              //});
              
        //      $(id).fadeIn('slow'); 
        //}
        //});
        
        $(id).fadeIn(500);
}

function frameClose(){
        $('#mask').fadeOut();
        $('.window').fadeOut();

}

function exibeImagemPacote(pacote, quantidade){
      
      windowModal('#dialog','<div style="font-size:0.6em;text-align:right"><a href="javascript:frameClose()">[X] Fechar</a></div><img id="imgpctfoto"  src="imagens/pacotes/' + pacote  + '/'+pacote+'2.jpg " width="100%" /><div style="text-align:right; position:absolute; right:15px; bottom:10px"><a id="pctfotoprox" href="javascript:proximaImagemPacote(\''+pacote+'\',3,'+quantidade+')">Próxima</a></div> ' );

}

function proximaImagemPacote(prefImagem,index, max){
     var im;
     
     if (index>max)index = 1;
     $('#imgpctfoto').fadeOut('slow', function(){
         $('#imgpctfoto').attr('src', 'imagens/pacotes/' + prefImagem  + '/'+prefImagem + index +'.jpg');
     
     });
     im = index+1;
     $('#imgpctfoto').fadeIn('slow');
     $('#pctfotoprox').attr('href', "javascript:proximaImagemPacote('"+prefImagem +"',"+im+","+max+") " );
     
}