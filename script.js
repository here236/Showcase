(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.getElementById('terminalBody');
  var lines = [
    { html: '<span class="prompt">$</span> whoami', delay: 0 },
    { html: '<span class="out">alexandre.fontes — dev em formação</span>', delay: 250 },
    { html: '<span class="prompt">$</span> cat interesses.txt', delay: 700 },
    { html: '<span class="out">segurança de sistemas, jogos, backend</span>', delay: 950 },
    { html: '<span class="prompt">$</span> cat status.txt', delay: 1400 },
    { html: '<span class="comment"># cursando ADS na Fatec de Carapicuíba</span>', delay: 1650 },
    { html: '<span class="out">disponível para estágio e projetos</span>', delay: 1900 }
  ];

  if (reduce){
    body.innerHTML = lines.map(function(l){ return '<p class="line">' + l.html + '</p>'; }).join('');
    return;
  }

  lines.forEach(function(l){
    setTimeout(function(){
      var p = document.createElement('p');
      p.className = 'line';
      p.innerHTML = l.html;
      body.appendChild(p);
    }, l.delay);
  });

  setTimeout(function(){
    var c = document.createElement('span');
    c.className = 'cursor';
    body.appendChild(c);
  }, 2150);
})();
