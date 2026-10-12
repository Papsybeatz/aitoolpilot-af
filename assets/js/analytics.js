/* ============================================================
   AIToolPilot — GA4 bootstrap
   Reads window.ATP_CONFIG.ga4Id from assets/js/config.js.
   Does nothing when the ID is empty.
   ============================================================ */
(function () {
  var cfg = window.ATP_CONFIG || {};
  var id = (cfg.ga4Id || "").trim();
  if (!id || id.indexOf("G-") !== 0) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id);
})();
