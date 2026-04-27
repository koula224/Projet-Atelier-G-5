/* ═══════════════════════════════════════════
   CAHIERSMART — Logique principale
═══════════════════════════════════════════ */

/**
 * Ouvre une modale par son identifiant.
 * @param {string} id - Identifiant partiel (ex: 'demo', 'doc')
 */
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Ferme une modale par son identifiant complet.
 * @param {string} id - Identifiant complet de l'élément (ex: 'modal-demo')
 */
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Ferme la modale si l'utilisateur clique sur l'overlay (fond).
 * @param {MouseEvent} e
 * @param {string} id - Identifiant complet de l'overlay
 */
function closeOnOverlay(e, id) {
  if (e.target === document.getElementById(id)) {
    closeModal(id);
  }
}

/**
 * Affiche un onglet de documentation et masque les autres.
 * @param {string} name    - Nom de l'onglet (ex: 'intro', 'api')
 * @param {HTMLElement} btn - Le bouton onglet cliqué
 */
function showTab(name, btn) {
  // Désactiver tous les onglets et contenus
  document.querySelectorAll('.doc-tab').forEach(function(t) {
    t.classList.remove('active');
  });
  document.querySelectorAll('.doc-content').forEach(function(c) {
    c.classList.remove('active');
  });

  // Activer l'onglet et le contenu cibles
  const targetContent = document.getElementById('tab-' + name);
  if (targetContent) targetContent.classList.add('active');
  if (btn) btn.classList.add('active');
}

/**
 * Soumet le formulaire de demande de démo.
 * Valide les champs requis et affiche un message de succès.
 */
function submitDemo() {
  var prenom = document.getElementById('f-prenom').value.trim();
  var email  = document.getElementById('f-email').value.trim();

  if (!prenom || !email) {
    alert('Merci de remplir au moins votre prénom et votre email.');
    return;
  }

  // Masquer le bouton et afficher la confirmation
  var submitBtn = document.querySelector('#modal-demo .btn-submit');
  var successMsg = document.getElementById('demo-success');

  if (submitBtn) submitBtn.style.display = 'none';
  if (successMsg) successMsg.style.display = 'block';
}

/* ═══════════════════════════════════════════
   FERMETURE AVEC TOUCHE ECHAP
═══════════════════════════════════════════ */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

