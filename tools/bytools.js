(function(global){
  function createWidget(targetId='gosmarttools-widget') {
    const container = document.getElementById(targetId);
    if(!container) return console.warn('Container not found:', targetId);

    const link = document.createElement('a');
    link.href = 'https://gosmarttoolsapp.blogspot.com';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.cssText = `
      font-family: sans-serif;
      font-size: 14px;
      color: #555;
      text-decoration: none;
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all .2s;
    `;
    link.onmouseover = () => link.style.background = '#f0f0f0';
    link.onmouseout = () => link.style.background = 'transparent';
    link.textContent = 'powered by GoSmartTools';

    container.appendChild(link);
  }

  // Auto init
  if(document.getElementById('gosmarttools-widget')){
    createWidget();
  }

  global.GoSmartToolsWidget = { init: createWidget };
})(window);
