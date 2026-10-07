  // ==================== TIMESTAMP ====================
  function setTimestamp() {
    try {
      let timestampField = document.getElementById("timestamp") 
                        || document.querySelector('input[name="timestamp"]');
      if (!timestampField) {
        const form = document.querySelector("form");
        if (!form) return console.error("No <form> found for timestamp.");
        timestampField = document.createElement("input");
        timestampField.type = "hidden";
        timestampField.id = "timestamp";
        timestampField.name = "timestamp";
        form.appendChild(timestampField);
      }
      timestampField.value = new Date().toISOString();
    } catch (err) {
      console.error("Error setting timestamp:", err);
    }
  }

// ===================== MODALES =====================
(function() {

  // Abrir modales
  function initModals() {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.modal .close');

    modalButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if(modal) {
          modal.style.display = 'flex';
        }
      });
    });

    // Cerrar al hacer clic en "x"
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
      });
    });

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
      if(e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  }

  // ===================== INICIAR CUANDO EL DOM ESTÉ LISTO =====================
  function init() {
    initModals();
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

