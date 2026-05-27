/* AIToolPilot — Main JS */
document.addEventListener('DOMContentLoaded', function () {

  /* --- Mobile nav toggle ---------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Newsletter form ------------------------------------ */
  var form = document.querySelector('.newsletter-form');
  if (form) {
    var msgEl = document.querySelector('.newsletter-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]').value.trim();
      var btn = form.querySelector('button[type="submit"]');

      // Basic validation
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMsg('Please enter a valid email address.', 'error');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Subscribing…';

      // Replace NEWSLETTER_ENDPOINT with your actual endpoint (e.g. Mailchimp, ConvertKit, Beehiiv)
      var endpoint = form.getAttribute('data-endpoint') || '';

      if (!endpoint) {
        // Placeholder: simulate success
        setTimeout(function () {
          showMsg('You\'re in! Check your inbox for your first AI tool pick.', 'success');
          form.reset();
          btn.disabled = false;
          btn.textContent = 'Send Me the Weekly Tool';
        }, 800);
        return;
      }

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      })
        .then(function (res) {
          if (res.ok) {
            showMsg('You\'re in! Check your inbox for your first AI tool pick.', 'success');
            form.reset();
          } else {
            showMsg('Something went wrong. Please try again.', 'error');
          }
        })
        .catch(function () {
          showMsg('Network error. Please try again later.', 'error');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Send Me the Weekly Tool';
        });
    });

    function showMsg(text, type) {
      if (!msgEl) return;
      msgEl.textContent = text;
      msgEl.className = 'newsletter-msg ' + type;
    }
  }

  /* --- Affiliate link tracking ---------------------------- */
  document.querySelectorAll('a[data-affiliate]').forEach(function (link) {
    link.addEventListener('click', function () {
      var tool = this.getAttribute('data-affiliate');
      if (window.gtag) {
        gtag('event', 'affiliate_click', {
          event_category: 'Affiliate',
          event_label: tool
        });
      }
      // Also store in sessionStorage for analytics
      try {
        var clicks = JSON.parse(sessionStorage.getItem('atp_clicks') || '[]');
        clicks.push({ tool: tool, ts: Date.now() });
        sessionStorage.setItem('atp_clicks', JSON.stringify(clicks));
      } catch (e) {}
    });
  });

  /* --- Reading time --------------------------------------- */
  var postBody = document.querySelector('.post-body');
  var rtEl = document.querySelector('.reading-time');
  if (postBody && rtEl) {
    var words = postBody.innerText.trim().split(/\s+/).length;
    var mins = Math.max(1, Math.round(words / 200));
    rtEl.textContent = mins + ' min read';
  }

});
