document.addEventListener('DOMContentLoaded', function () {
  if ('elf' in window) {
    var root = top.location.pathname.split('.html')[0].replace(top.Pandora.page.current.filename.split('.html')[0], 'bundles');
    var themeVariant = parent.document.getElementById(pandora.id).getAttribute('theme') || 'light';
    var script = document.createElement('script');
    script.src = root + '/halo-' + themeVariant + '-theme.js';;
    document.head.appendChild(script);
  }
})
