document.addEventListener('theme-toggle', function(event) {
  // set theme value to live demo container
  parent.document.getElementById(pandora.id).setAttribute('theme', event.detail);
  pandora.reload();
});
