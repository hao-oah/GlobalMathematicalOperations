//////////////////////// Copyright(c) Hao ////////////////////////
///////////////////////// -Source Loader- ////////////////////////


window.onload = function loadStuff() {
  var win, doc, img, header, enhancedClass;
  
  if (!('addEventListener' in window)) {
    return;
  }
  
  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.post-header');
  enhancedClass = 'post-header-enhanced';

  var bigSrc = (function () {

    var styles = doc.querySelector('style').sheet.cssRules;
    var bgDecl = (function () {

      var bgStyle, i, l = styles.length;
      for (i=0; i<l; i++) {

        if (styles[i].selectorText &&
            styles[i].selectorText == '.'+enhancedClass) {

          bgStyle = styles[i].style.backgroundImage;

          break; 
        }
      }

      return bgStyle;
    }());       
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());

  // Assign an onLoad handler before assigning the src
  img.onload = function () {
    header.className += ' ' +enhancedClass;
  };
  // preloading chain
  if (bigSrc) {
    img.src = bigSrc;
  }
};