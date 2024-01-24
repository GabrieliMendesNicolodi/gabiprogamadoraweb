/** HOME CAROUSEL */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    center: true,
    loop:true,
    margin:20,
    autoplay:true,
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
        body += `<p>Detalhes técnicos:</p>
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

    if(work == "elabora"){
        title = 'Plataforma eLabora';
        body = '<p>Uma plataforma completa para estudantes, professores e escolas.</p>';
        body += '<p>Geração de simulados de todas as áreas de estudo e de todos os níveis.</p>';
        body += '<p><a href="https://www.sistemaelabora.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Painel para estudantes, professores e escolas:</p>
                <ul>
                    <li>Busca de questões por disciplina, ano, instituição aplicadora, nível de dificuldade.</li>
                    <li>Geração de simulado individual ou em grupo, com cronômetro e gabarito</li>
                    <li>Questões dissertativas, multipla escolha, verdadeiro ou falso.</li>
                    <li>Correção por especialistas</li>
                </ul>
                <p>Painel administrativo:</p>
                <ul>
                    <li>Inserção de questões</li>
                    <li>Configuração de valores de crédito</li>
                    <li>Lista de solicitações de lista de exercícios à corrigir</li>
                    <li>Inserção de usuários com privilégios administrativo por setor</li>
                </ul>`;
    }

    if(work == "hospitalstaclara"){
        title = 'Hospital Privado Santa Clara';
        body = '<p>Website institucional Hospital Santa Clara, São Paulo.</p>';
        body += '<p>Os pacientes podem consultar serviços disponíveis, agendamento de consultas, exames e muito mais de forma rápida.</p>';
        body += '<p><a href="http://hospitalstaclara.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Informações técnicas:</p>
                <ul>
                    <li>Construído com template HTML.</li>
                    <li>Formularios de contato utilizando tecnologia PHP para envio de emails.</li>
                    <li>Link para as redes sociais e Whatsapp</li>
                </ul>`;
    }

    if(work == "hospitaljardins"){
        title = 'Hospital Jardins';
        body = '<p>Website institucional Hospital Jardins, São Paulo.</p>';
        body += '<p>Informações sobre a instituição, contato e envio de currículo.</p>';
        body += '<p><a href="http://www.hospitaljardins.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Informações técnicas:</p>
                <ul>
                    <li>Construído com template HTML.</li>
                    <li>Formularios de contato utilizando tecnologia PHP para envio de emails.</li>
                </ul>`;
    }

    if(work == "hospitalsantoexpedito"){
        title = 'Hospital Santo Expedito';
        body = '<p>Website institucional Hospital Santo Expedito, São Paulo.</p>';
        body += '<p>Informações sobre a instituição, contato e envio de currículo.</p>';
        body += '<p><a href="http://hospitalsantoexpedito.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Informações técnicas:</p>
                <ul>
                    <li>Construído com template HTML.</li>
                    <li>Formularios de contato utilizando tecnologia PHP para envio de emails.</li>
                </ul>`;
    }

    if(work == "hospitalstaana"){
        title = 'Hospital Santa Ana';
        body = '<p>Website institucional Hospital Santo Expedito, São Paulo.</p>';
        body += '<p>Informações sobre a instituição, contato e envio de currículo.</p>';
        body += '<p><a href="http://hospitalsantoexpedito.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Informações técnicas:</p>
                <ul>
                    <li>Construído com template HTML.</li>
                    <li>Formularios de contato utilizando tecnologia PHP para envio de emails.</li>
                </ul>`;
    }

    if(work == "videofesta"){
        title = 'VideoFesta';
        body = '<p>Website institucional VideoFesta, especialista em organização de eventos, aluguel de equipamentos, DJs, Som e Bartender.</p>';
        body += '<p><a href="https://videofesta.com.br/" target="_blank">Acesse o site e conheça <span class="material-symbols-outlined">open_in_new</span></a></p>';
        body += `<p>Informações técnicas:</p>
                <ul>
                    <li>Construído Wordpress</li>
                    <li>Cliente tem possibilidade de visualizar a lista de músicas de cada Karaokê disponível para aluguel antes da locação, dentro do ambiente do site a qualquer momento.</li>
                </ul>`;
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


