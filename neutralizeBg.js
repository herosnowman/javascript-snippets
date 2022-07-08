// finds specified hex color from background and replaces it with something else
// for when some site owner decides to burn your eyes ( for example: https://medium.com/hackernoon/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46 )
function lookForColor(parent, hexColor, replaceWith) {

  var r = parseInt(hexColor.slice(1, 3), 16),
        g = parseInt(hexColor.slice(3, 5), 16),
        b = parseInt(hexColor.slice(5, 7), 16);

  const rgba = "rgba(" + r + ", " + g + ", " + b + ", " + 1 + ")";
  const rgb = "rgb(" + r + ", " + g + ", " + b + ")";

  parent.childNodes.forEach((child) => {

    try {
      const style = window.getComputedStyle(child);

      if (style.backgroundColor === hexColor, style.backgroundColor === rgba || style.backgroundColor === rgb) {
        child.style.backgroundColor = replaceWith;
      }
    } 
    catch {}

    if (child.childElementCount > 0) {
      lookForColor(child, hexColor, replaceWith);
    }
  });
}

lookForColor(document.body, '#00ff00', '#ffffff');
