// Show envelope after 8 seconds with fade-in
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var wrap = document.getElementById('envelopeWrap');
    if (wrap) {
      wrap.classList.add('envelope-fade-in');
      // Keep envelope-hidden for transition, then remove it after fade-in
      setTimeout(function() {
        wrap.classList.remove('envelope-hidden');
      }, 1200); // match the CSS transition duration
    }
  }, 8000);
});
// Initialize envelope interactivity after DOM is ready
window.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const messageDiv = document.getElementById('message');

  function openEnvelope(open) {
    if (!envelope || !letter) return;
    if (open) {
      // populate message from data attribute if present
      if (envelope.dataset && envelope.dataset.message && messageDiv) {
        messageDiv.textContent = envelope.dataset.message;
      }
      envelope.classList.add('open');
      letter.classList.add('show');
      setTimeout(() => {
        letter.classList.add('above');
      }, 1300);
    } else {
      envelope.classList.remove('open');
      letter.classList.remove('show');
      letter.classList.remove('above');
    }
  }

  function toggleEnvelope() {
    if (!envelope) return;
    const willOpen = !envelope.classList.contains('open');
    openEnvelope(willOpen);
  }

  if (envelope) {
    envelope.addEventListener('click', toggleEnvelope);
    envelope.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEnvelope();
      }
    });
  }

  // allow clicking the letter itself to close
  if (letter) {
    letter.addEventListener('click', function(e) {
      e.stopPropagation();
      openEnvelope(false);
    });
  }
});