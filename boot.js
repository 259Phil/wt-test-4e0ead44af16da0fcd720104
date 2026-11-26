/* Theme/language boot — no inline script, so production CSP can be script-src 'self'. */
try {
  var p = JSON.parse(localStorage.getItem("wt:prefs") || "{}");
  if (p.themeId) document.documentElement.dataset.theme = p.themeId;
  if (p.contrast) document.documentElement.dataset.contrast = p.contrast;
  if (p.locale) document.documentElement.lang = p.locale;
} catch (e) {}
