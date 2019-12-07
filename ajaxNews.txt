<?php
     switch ($_GET['n']){
        case '1':
            noticia('Buenos Aires',
                    'Buenos Aires &eacute; o peda&ccedil;o mais europeu da Am&eacute;rica Latina, com ruas e avenidas planas, largas e arborizadas...',
                    'aviao',''
                    );
            break;
        case '2':
            noticia('Miami',
                    'Além das boas compras, a cidade do sul da Flórida tem bons programas culturais e vida noturna que podem agradar a qualquer brasileiro..',
                    'aviao' ,''
                    );
            break;
        case '3':
            noticia('Orlando',
                    'Imagine vários parques de diversões em uma só cidade. Bem vindo a Orlando, Flórida. Somente do complexo Disney são quatro parques temáticos e outros três aquáticos...',
                    'aviao',''
                    );
            break;
        case '4':
            noticia('Roma',
                    'Com 27 séculos de vida e uma história sem paralelo no mundo ocidental, a Cidade Eterna se renovou e está ainda mais bela....',
                    'aviao' ,''
                    );
            break;
        case '5':
            noticia('Paris',
                    'Paris é sinônimo de elegância e sofisticação. Capital internacional da cultura e da moda, exerce sobre o resto do mundo o eterno fascínio de tudo o que é encantador, refinado, exclusivo...',
                    'aviao',''
                    );
            break;
        case '6':
            noticia('Nova York',
                    'Vanguarda em quase tudo o que conta na sociedade moderna, Nova York dita o que é moda no globo e impõe seu estilo. ...',
                    'aviao' ,''
                    );
            break;
        default:
            noticia('Viaje conosco',
                    'Com a TATOUR você terá viagens incriveis.',
                    'aviao' ,''
                    );
            break;
     }

      function noticia($titulo, $noticia, $icone,$link){
?>
<div class="news">
     <div class="title"><?php echo $titulo?></div>
     <div class="text"><?php echo $noticia?></div>
</div>
     
<?php      
      }     
      
      
      
?>


