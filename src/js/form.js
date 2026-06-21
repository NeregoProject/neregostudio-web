// form.js — Formulario de consulta → webhook n8n

(function () {
  'use strict';

  var WEBHOOK_URL = 'https://proyecto-demo-n8n.6lb6ds.easypanel.host/webhook/captacion-leads-v2';

  // -------------------------------------------------------------------------
  // FORMULARIO DE CONSULTA
  // Valida los tres campos requeridos, envía JSON al webhook n8n y gestiona
  // los estados de carga, éxito y error.
  // -------------------------------------------------------------------------

  function initContactForm() {
    var form     = document.getElementById('contact-form');
    var submitBtn = document.getElementById('form-submit');
    var successEl = document.getElementById('form-success');
    var errorEl   = document.getElementById('form-error');
    if (!form || !submitBtn) return;

    var inputs = form.querySelectorAll('.cta-form__input');

    // Limpia el estado de error de un campo al escribir
    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        input.classList.remove('cta-form__input--error');
        if (errorEl) errorEl.hidden = true;
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre   = form.querySelector('[name="nombre"]').value.trim();
      var telefono = form.querySelector('[name="telefono"]').value.trim();
      var negocio  = form.querySelector('[name="negocio"]').value.trim();

      // Validación: todos los campos obligatorios
      var hasError = false;
      form.querySelectorAll('.cta-form__input').forEach(function (input) {
        if (!input.value.trim()) {
          input.classList.add('cta-form__input--error');
          hasError = true;
        }
      });
      if (hasError) return;

      // Estado de carga
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:   nombre,
          telefono: telefono,
          negocio:  negocio
        })
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          // Éxito
          form.hidden = true;
          if (successEl) {
            successEl.hidden = false;
            successEl.focus();
          }
        })
        .catch(function () {
          // Error de red o respuesta no OK
          if (errorEl) errorEl.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar consulta';
        });
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);

}());
