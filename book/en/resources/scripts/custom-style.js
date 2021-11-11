// Support custom CSS properties in browsers which do not natively have support.
document.addEventListener('DOMContentLoaded', function () {
  if ('ShadyCSS' in window && ShadyCSS.nativeCss === false) {
    const styleTags = document.querySelectorAll('style:not([scope])');
    // Some browsers do not support NodeList.forEach, so we do this instead...
    Array.prototype.forEach.call(styleTags, function (style) {
      // Only add the style if it's not already registered.
      if (ShadyCSS.CustomStyleInterface.customStyles.indexOf(style) === -1) {
        ShadyCSS.CustomStyleInterface.addCustomStyle(style);
      }
    });
  }
});
