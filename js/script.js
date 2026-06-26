/* =============================================
   script.js — Nails by Ju
   Funcionalidades:
   1. Acordeão de perguntas frequentes
   2. Mostrar/ocultar serviços extras
   3. Confirmação visual do formulário
   ============================================= */

// Espera o HTML carregar antes de executar
document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     1. PERGUNTAS FREQUENTES (FAQ)
     Clica no botão → abre/fecha a resposta
  ------------------------------------------ */
  var botoesFaq = document.querySelectorAll('.btn-pergunta');

  botoesFaq.forEach(function (botao) {
    botao.addEventListener('click', function () {
      // Descobre qual resposta esse botão controla
      var idResposta = botao.getAttribute('aria-controls');
      var resposta = document.getElementById(idResposta);

      // Verifica se está aberto ou fechado
      var estaAberta = botao.getAttribute('aria-expanded') === 'true';

      // Fecha todas as outras antes de abrir a clicada
      botoesFaq.forEach(function (outroBotao) {
        var outroId = outroBotao.getAttribute('aria-controls');
        var outraResposta = document.getElementById(outroId);
        outroBotao.setAttribute('aria-expanded', 'false');
        outraResposta.hidden = true;
      });

      // Se estava fechada, abre. Se estava aberta, já fechou acima.
      if (!estaAberta) {
        botao.setAttribute('aria-expanded', 'true');
        resposta.hidden = false;
      }
    });
  });


  /* ------------------------------------------
     2. BOTÃO "VER MAIS SERVIÇOS"
     Mostra ou oculta os serviços extras
  ------------------------------------------ */
  var btnServicos = document.getElementById('btnServicos');
  var servicosExtras = document.getElementById('servicosExtras');

  if (btnServicos && servicosExtras) {
    btnServicos.addEventListener('click', function () {
      var estaVisivelAgora = !servicosExtras.hidden;

      if (estaVisivelAgora) {
        // Esconde os extras
        servicosExtras.hidden = true;
        btnServicos.textContent = 'Ver mais serviços ▼';
        btnServicos.setAttribute('aria-expanded', 'false');
      } else {
        // Mostra os extras
        servicosExtras.hidden = false;
        btnServicos.textContent = 'Ver menos ▲';
        btnServicos.setAttribute('aria-expanded', 'true');
      }
    });
  }


  /* ------------------------------------------
     3. FORMULÁRIO DE CONTATO
     Valida campos obrigatórios e mostra
     uma mensagem de confirmação ao enviar
  ------------------------------------------ */
  var formulario = document.querySelector('.formulario-contato');
  var msgConfirmacao = document.getElementById('msgConfirmacao');
  var btnEnviar = document.getElementById('btnEnviar');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      // Impede o envio real (simulação)
      evento.preventDefault();

      var nome = document.getElementById('nome').value.trim();
      var telefone = document.getElementById('telefone').value.trim();

      // Validação simples: nome e telefone são obrigatórios
      if (nome === '' || telefone === '') {
        alert('Por favor, preencha seu nome e WhatsApp para enviar a mensagem.');
        return;
      }

      // Exibe a mensagem de confirmação
      msgConfirmacao.hidden = false;

      // Muda o texto do botão para indicar sucesso
      btnEnviar.textContent = 'Mensagem enviada ✓';
      btnEnviar.disabled = true;
      btnEnviar.style.backgroundColor = '#6cba84';

      // Limpa os campos do formulário
      formulario.reset();

      // Após 5 segundos, oculta a mensagem e restaura o botão
      setTimeout(function () {
        msgConfirmacao.hidden = true;
        btnEnviar.textContent = 'Enviar mensagem';
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor = '';
      }, 5000);
    });
  }

});
