// Blocking head script: establish a complete palette before any page content paints.
(function () {
  var colors = {background:'#e8eef5',text:'#28394e',muted:'#596a80',accent:'#365d8c',surface:'#d4e0ef',onSurface:'#28394e',border:'#97abc4'};
  try {
    var saved = JSON.parse(localStorage.getItem('htwkr-theme-v1'));
    if (saved && saved.version === 1 && typeof saved.name === 'string' && saved.name.length <= 60 && saved.colors &&
        Object.keys(colors).every(function (key) { return /^#[\da-f]{6}$/i.test(saved.colors[key]); }) &&
        (saved.pageBrightness === undefined || (typeof saved.pageBrightness === 'number' && Number.isFinite(saved.pageBrightness) && saved.pageBrightness >= .7 && saved.pageBrightness <= 1.6))) colors = saved.colors;
  } catch (_) { /* Storage may be blocked or malformed; retain the complete default. */ }
  var style = document.documentElement.style;
  Object.keys(colors).forEach(function (key) { style.setProperty('--theme-' + key, colors[key]); });
  style.setProperty('--color-bg', colors.background);
  style.setProperty('--color-text', colors.text);
  style.setProperty('--preview-background', colors.background);
}());
