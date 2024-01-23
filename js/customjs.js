/** HOME CAROUSEL */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    center: true,
    loop:true,
    margin:20,
    autoplay:false,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

/** GO TO TOP */
function scrollToTop() {
    $("html").animate({ scrollTop: "0"}, 1500);
}

/** GO TO SECTION */
function scrollToSection(toSectionName){
    $("html").animate({ scrollTop: $("#"+toSectionName).offset().top}, 1500);
}

/** OPEN AN MODAL DIALOG */

function openModalWork(work){
    jQuery('.modal-work').attr('id', work);
    jQuery('#'+work).modal('show');

    var html = 'Carregando informações...aguarde';
    var contentHTML = '...';
    var title = '';
    var body = '';
    if(work == "amaraldeandradeadvogados"){
        title = 'Website Amaral de Andrade e Pinheiro Lima';
        body = '<p>Website institucional para firma de advogados em São Paulo.</p>';
        body += '<p><a href="https://amaraldeandrade.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Detalhes tecnicos:</p>
                <ul>
                    <li>Wordpress 100%</li>
                    <li>Template customisável</li>
                    <li>Blog</li>
                    <li>Facilidade em atualização de conteúdo pelo cliente</li>
                </ul>`;
    }

    if(work == "arianemakeup"){
        title = 'Aplicativo Ariane Ferreira Make Up';
        body = '<p>Site mobile para agendamento de horários, com painel exclusivo para clientes e área administrativa para a profissonal.</p>';
        body += `<p>Painel administrativo, a profissional pode gerenciar:</p>
                <ul>
                    <li>Seus horários disponiveis</li>
                    <li>Horários com solicitação de agendamento</li>
                    <li>Cancelamentos</li>
                    <li>Serviço solicitado</li>
                    <li>Permitindo a profissional aceitar, reagendar ou cancelar horários conforme sua necessidade.</li>
                </ul>
                <p>Painel do cliente:</p>
                <ul>
                    <li>Consultar os serviços</li>
                    <li>Consultar os dias e horários disponiveis</li>
                    <li>Efetuar um agendamento</li>
                    <li>Solicitar reagendamento ou cancelamento</li>
                    <li>Consultar valores</li>
                </ul>`;
                /**TODO: por uma galeria com as imagens do app */
    }
    html =`<div class="modal-header">
        <h5 class="modal-title">`+title+`</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        `+body+`
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>`;

    jQuery('.modal-work .modal-content').html(html);
}


