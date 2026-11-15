// Spanje Rendement. Alles rekent in de browser. Geen trackers, geen externe scripts.
(function () {
  'use strict';
  var D = window.SR_DATA || {};
  var euro = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  var pct1 = new Intl.NumberFormat('nl-NL', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });
  var MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  function el(id) { return document.getElementById(id); }
  function getal(id) {
    var e = el(id);
    var v = e ? parseFloat(String(e.value).replace(',', '.')) : NaN;
    return isFinite(v) ? v : 0;
  }
  function zet(id, tekst) { var e = el(id); if (e) e.textContent = tekst; }
  function alsEuro(v) { return isFinite(v) ? euro.format(v) : 'n.v.t.'; }
  function alsPct(v) { return (v === null || !isFinite(v)) ? 'n.v.t.' : pct1.format(v); }
  function nl(v, d) { return v.toLocaleString('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function maak(tag, klasse, tekst) {
    var e = document.createElement(tag);
    if (klasse) e.className = klasse;
    if (tekst !== undefined) e.textContent = tekst;
    return e;
  }
  function bedrag(mln) {
    if (mln === null || mln === undefined) return 'Bedrag niet gepubliceerd';
    if (mln >= 1000) return '€ ' + nl(mln / 1000, 1) + ' mld';
    return '€ ' + nl(mln, mln % 1 === 0 ? 0 : 1) + ' mln';
  }
  function datumTekst(d) {
    var p = d.split('-');
    var maand = MAANDEN[parseInt(p[1], 10) - 1] + ' ' + p[0];
    return p[2] ? parseInt(p[2], 10) + ' ' + maand : maand;
  }

  /* ---------- Tabbladen ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function open(naam, focus) {
    var gevonden = false;
    tabs.forEach(function (t) { if (t.getAttribute('data-tab') === naam) gevonden = true; });
    if (!gevonden) return;
    tabs.forEach(function (t) {
      var actief = t.getAttribute('data-tab') === naam;
      t.setAttribute('aria-selected', actief ? 'true' : 'false');
      t.tabIndex = actief ? 0 : -1;
      el(t.getAttribute('aria-controls')).hidden = !actief;
      if (actief && focus) t.focus();
      if (actief && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { open(t.getAttribute('data-tab')); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var v = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      open(v.getAttribute('data-tab'), true);
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-open]'), function (a) {
    a.addEventListener('click', function () { open(a.getAttribute('data-open')); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-bijgewerkt]'), function (s) {
    if (D.bijgewerkt) s.textContent = D.bijgewerkt;
  });

  /* ---------- Rendement ---------- */
  var VELDEN = ['prijs', 'kosten', 'bar', 'expl', 'ltv', 'rente', 'groei'];
  var IDS = [];
  ['t', 's'].forEach(function (p) { VELDEN.forEach(function (v) { IDS.push(p + '-' + v); }); });
  IDS.push('jaren');
  var STANDAARD = {};
  IDS.forEach(function (id) { STANDAARD[id] = el(id).value; });

  // Rendement per jaar over de looptijd: inleg nu, kasstroom per jaar, opbrengst bij verkoop aan het eind.
  function jaarrendement(inleg, kasstroom, eind, jaren) {
    if (inleg <= 0 || jaren < 1) return null;
    function waarde(r) {
      var som = -inleg;
      for (var t = 1; t <= jaren; t++) som += kasstroom / Math.pow(1 + r, t);
      return som + eind / Math.pow(1 + r, jaren);
    }
    var laag = -0.99, hoog = 2;
    if (waarde(laag) < 0 || waarde(hoog) > 0) return null;
    for (var i = 0; i < 90; i++) {
      var mid = (laag + hoog) / 2;
      if (waarde(mid) > 0) laag = mid; else hoog = mid;
    }
    return (laag + hoog) / 2;
  }
  function looptijd() { return Math.max(1, Math.min(30, Math.round(getal('jaren')) || 1)); }
  function belegging(p, jaren) {
    var prijs = getal(p + '-prijs');
    var kosten = prijs * getal(p + '-kosten') / 100;
    var lening = prijs * getal(p + '-ltv') / 100;
    var eigen = prijs + kosten - lening;
    var netto = prijs * getal(p + '-bar') / 100 * (1 - getal(p + '-expl') / 100);
    var rente = lening * getal(p + '-rente') / 100;
    var kas = netto - rente;
    var eind = prijs * Math.pow(1 + getal(p + '-groei') / 100, jaren);
    return {
      eigen: eigen, netto: netto, rente: rente, kas: kas,
      direct: eigen > 0 ? kas / eigen : null,
      totaal: jaarrendement(eigen, kas, eind - lening, jaren),
      zonder: jaarrendement(prijs + kosten, netto, eind, jaren)
    };
  }
  function toon(p, r) {
    zet(p + '-u-eigen', alsEuro(r.eigen));
    zet(p + '-u-netto', alsEuro(r.netto));
    zet(p + '-u-rente', alsEuro(r.rente));
    zet(p + '-u-kas', alsEuro(r.kas));
    zet(p + '-u-direct', alsPct(r.direct));
    zet(p + '-u-zonder', alsPct(r.zonder));
    zet(p + '-u-totaal', alsPct(r.totaal));
  }
  function balk(id, v, max) {
    var b = el(id);
    var w = (v === null || max <= 0) ? 0 : Math.min(100, Math.abs(v) / max * 100);
    b.style.width = Math.max(w, v === null ? 0 : 1.5) + '%';
    b.classList.toggle('is-negatief', v !== null && v < 0);
  }
  function rekenRendement() {
    var jaren = looptijd();
    var t = belegging('t', jaren), s = belegging('s', jaren);
    toon('t', t); toon('s', s);
    zet('u-jaren', String(jaren));
    var max = Math.max(Math.abs(t.totaal || 0), Math.abs(s.totaal || 0), 0.04) * 1.15;
    balk('balk-t', t.totaal, max); balk('balk-s', s.totaal, max);
    var zin = '';
    if (t.totaal !== null && s.totaal !== null) {
      var v = (s.totaal - t.totaal) * 100;
      if (Math.abs(v) < 0.05) zin = 'Met deze cijfers komen beide op hetzelfde uit.';
      else zin = 'Met deze cijfers ligt Spanje ' + nl(Math.abs(v), 1) + ' procentpunt per jaar ' + (v > 0 ? 'hoger.' : 'lager.');
    } else {
      zin = 'Vul bij beide een prijs in en een lening die lager is dan prijs plus kosten.';
    }
    zet('r-conclusie', zin);
  }

  function toestand() {
    var o = {};
    IDS.forEach(function (id) { o[id] = el(id).value; });
    return o;
  }
  function laad(o) {
    IDS.forEach(function (id) { if (o[id] !== undefined && o[id] !== null) el(id).value = o[id]; });
    rekenRendement();
  }
  function alsHash(o) { return 'r=' + IDS.map(function (id) { return o[id]; }).join('_'); }
  function uitHash() {
    var m = /(?:^|#|&)r=([-0-9._]+)/.exec(location.hash);
    if (!m) return null;
    var w = m[1].split('_');
    if (w.length !== IDS.length) return null;
    var o = {};
    for (var i = 0; i < IDS.length; i++) {
      if (!isFinite(parseFloat(w[i]))) return null;
      o[IDS[i]] = w[i];
    }
    return o;
  }
  function samenvatting() {
    var jaren = looptijd();
    var t = belegging('t', jaren), s = belegging('s', jaren);
    return 'Thuis: prijs ' + alsEuro(getal('t-prijs')) + ', lening ' + getal('t-ltv') + '%, rente ' + getal('t-rente') + '%, bruto huur ' + getal('t-bar') +
      '%, rendement op eigen geld ' + alsPct(t.totaal) + '. Spanje: prijs ' + alsEuro(getal('s-prijs')) + ', lening ' + getal('s-ltv') + '%, rente ' + getal('s-rente') +
      '%, bruto huur ' + getal('s-bar') + '%, rendement op eigen geld ' + alsPct(s.totaal) + '. Looptijd ' + jaren + ' jaar.';
  }
  function meld(tekst) { zet('r-melding', tekst); }

  /* Bewaarde scenario's: alleen in deze browser */
  var SLEUTEL = 'sr-scenarios';
  function lees() {
    try { var a = JSON.parse(localStorage.getItem(SLEUTEL) || '[]'); return Array.isArray(a) ? a : []; }
    catch (e) { return []; }
  }
  function schrijf(a) {
    try { localStorage.setItem(SLEUTEL, JSON.stringify(a)); return true; } catch (e) { return false; }
  }
  function toonBewaard() {
    var lijst = lees();
    var ul = el('bewaard-lijst');
    ul.textContent = '';
    el('bewaard').hidden = lijst.length === 0;
    lijst.forEach(function (sc, i) {
      var li = maak('li', 'bewaard__item');
      var kop = maak('div', 'bewaard__kop');
      kop.appendChild(maak('strong', '', sc.naam));
      kop.appendChild(maak('span', '', 'Thuis ' + sc.t + ', Spanje ' + sc.s));
      var laadKnop = maak('button', 'knop knop--tekst', 'Open');
      laadKnop.type = 'button';
      laadKnop.addEventListener('click', function () { laad(sc.o); meld('Scenario "' + sc.naam + '" geopend.'); });
      var weg = maak('button', 'knop knop--tekst', 'Verwijder');
      weg.type = 'button';
      weg.setAttribute('aria-label', 'Verwijder scenario ' + sc.naam);
      weg.addEventListener('click', function () { var a = lees(); a.splice(i, 1); schrijf(a); toonBewaard(); });
      li.appendChild(kop); li.appendChild(laadKnop); li.appendChild(weg);
      ul.appendChild(li);
    });
  }
  el('bewaar').addEventListener('click', function () {
    var lijst = lees();
    var jaren = looptijd();
    var naam = alsEuro(getal('s-prijs')) + ' in Spanje, ' + getal('s-ltv') + '% lening, ' + jaren + ' jaar';
    lijst.unshift({ naam: naam, o: toestand(), t: alsPct(belegging('t', jaren).totaal), s: alsPct(belegging('s', jaren).totaal) });
    if (schrijf(lijst.slice(0, 8))) { toonBewaard(); meld('Scenario bewaard in deze browser.'); }
    else meld('Bewaren lukt niet in deze browser. Kopieer de link naar de rekensom om hem te bewaren.');
  });
  el('deel').addEventListener('click', function () {
    var link = location.origin + location.pathname + '#' + alsHash(toestand());
    function klaar() { meld('Link gekopieerd. Wie hem opent, ziet dezelfde cijfers.'); }
    function anders() { meld('Kopiëren lukt niet. De link staat nu in de adresbalk.'); try { history.replaceState(null, '', '#' + alsHash(toestand())); } catch (e) {} }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(klaar, anders);
    else anders();
  });
  el('herstel').addEventListener('click', function () { laad(STANDAARD); meld('Voorbeeldcijfers teruggezet.'); });
  Array.prototype.forEach.call(document.querySelectorAll('#form-rendement input'), function (i) {
    i.addEventListener('input', function () { rekenRendement(); meld(''); });
  });
  var contact = document.querySelector('.contact__form');
  if (contact) contact.addEventListener('submit', function () {
    el('f-rekensom').value = el('f-meesturen').checked ? samenvatting() : '';
  });

  /* ---------- Staafjes ---------- */
  function staven(id, rijen, waarde, label) {
    var ul = el(id);
    if (!ul) return;
    ul.textContent = '';
    var max = 0;
    rijen.forEach(function (r) { max = Math.max(max, waarde(r)); });
    rijen.forEach(function (r) {
      var li = maak('li', 'staaf');
      li.appendChild(maak('span', 'staaf__naam', r.naam));
      var spoor = maak('span', 'staaf__spoor');
      var v = maak('span', 'staaf__vulling');
      v.style.width = (max > 0 ? waarde(r) / max * 100 : 0) + '%';
      spoor.appendChild(v);
      li.appendChild(spoor);
      li.appendChild(maak('span', 'staaf__getal', label(r)));
      if (r.actief) li.classList.add('is-actief');
      ul.appendChild(li);
    });
  }

  /* ---------- Aankoopkosten ---------- */
  var itp = (D.itp && D.itp.regios) || [];
  var keuze = el('k-regio');
  itp.forEach(function (r, i) {
    var o = maak('option', '', r.naam);
    o.value = String(i);
    if (r.naam === 'Regio Valencia') o.selected = true;
    keuze.appendChild(o);
  });
  function tarief(r) { return r.van === r.tot ? nl(r.van, r.van % 1 ? 1 : 0) + '%' : nl(r.van, 0) + ' tot ' + nl(r.tot, 0) + '%'; }
  function rekenKosten() {
    var r = itp[parseInt(keuze.value, 10)];
    if (!r) return;
    var prijs = getal('k-prijs');
    var overig = prijs * getal('k-overig') / 100;
    var bereik = r.van !== r.tot;
    zet('k-u-tarief', '(' + tarief(r) + ')');
    zet('k-u-itp', bereik ? alsEuro(prijs * r.van / 100) + ' tot ' + alsEuro(prijs * r.tot / 100) : alsEuro(prijs * r.van / 100));
    zet('k-u-overig', alsEuro(overig));
    zet('k-u-totaal', bereik ? alsEuro(prijs * r.van / 100 + overig) + ' tot ' + alsEuro(prijs * r.tot / 100 + overig) : alsEuro(prijs * r.van / 100 + overig));
    zet('k-u-noot', bereik ? r.naam + ' werkt met een oplopende schaal. Het bedrag ligt tussen de twee uitersten; het precieze bedrag hangt af van de prijs en de plaats.' : '');
    var gesorteerd = itp.map(function (x) { return { naam: x.naam, van: x.van, tot: x.tot, actief: x === r }; })
      .sort(function (a, b) { return a.tot - b.tot || a.van - b.van; });
    staven('k-staven', gesorteerd, function (x) { return x.tot; }, tarief);
  }
  Array.prototype.forEach.call(document.querySelectorAll('#form-kosten input, #form-kosten select'), function (i) {
    i.addEventListener('input', rekenKosten);
  });

  /* ---------- Projectcheck ---------- */
  function rekenProject() {
    var kosten = getal('o-grond') + getal('o-bouw') + getal('o-bij');
    var opbrengst = getal('o-opbrengst'), lening = getal('o-lening');
    var eigen = kosten - lening, winst = opbrengst - kosten;
    zet('o-u-kosten', alsEuro(kosten));
    zet('o-u-eigen', alsEuro(eigen));
    zet('o-u-winst', alsEuro(winst));
    zet('o-u-eigenpct', kosten > 0 ? alsPct(eigen / kosten) : 'n.v.t.');
    zet('o-u-ltc', kosten > 0 ? alsPct(lening / kosten) : 'n.v.t.');
    zet('o-u-ltgdv', opbrengst > 0 ? alsPct(lening / opbrengst) : 'n.v.t.');
    zet('o-u-margek', kosten > 0 ? alsPct(winst / kosten) : 'n.v.t.');
    zet('o-u-margeo', opbrengst > 0 ? alsPct(winst / opbrengst) : 'n.v.t.');
  }
  Array.prototype.forEach.call(document.querySelectorAll('#form-project input'), function (i) {
    i.addEventListener('input', rekenProject);
  });

  /* ---------- Markt ---------- */
  function bronLink(tekst, url) {
    var a = maak('a', '', tekst);
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    return a;
  }
  function toonMarkt() {
    var m = D.markt;
    if (!m) return;
    zet('m-volume', m.volume.kop);
    zet('m-volume-tekst', 'Zoveel is er van ' + m.volume.periode + ' in Spaans vastgoed geïnvesteerd. Dat is ' + m.volume.groei + ' en het hoogste bedrag dat CBRE over deze periode heeft gemeten.');
    function mld(r) { return '€ ' + nl(r.mln / 1000, 1) + ' mld'; }
    staven('m-segmenten', m.volume.segmenten, function (r) { return r.mln; }, mld);
    staven('m-regios', m.volume.regios, function (r) { return r.mln; }, mld);
    function p(r) { return nl(r.pct, 1) + '%'; }
    staven('m-landelijk', m.rendement.landelijk, function (r) { return r.pct; }, p);
    staven('m-steden', m.rendement.steden.slice().sort(function (a, b) { return b.pct - a.pct; }), function (r) { return r.pct; }, p);
    var b = el('m-bronnen');
    b.textContent = 'Bronnen: ';
    b.appendChild(bronLink(m.volume.bron, m.volume.url));
    b.appendChild(document.createTextNode(' voor het investeringsvolume en '));
    b.appendChild(bronLink(m.rendement.bron, m.rendement.url));
    b.appendChild(document.createTextNode(' voor het bruto huurrendement (' + m.rendement.periode + '). Bruto rendement is de jaarhuur gedeeld door de vraagprijs, vóór kosten en belasting.'));
  }

  /* ---------- Deals ---------- */
  var soort = 'financieringen';
  var segment = el('d-segment');
  function vulSegmenten() {
    var lijst = D[soort] || [];
    var uniek = [];
    lijst.forEach(function (d) { if (uniek.indexOf(d.segment) < 0) uniek.push(d.segment); });
    uniek.sort();
    segment.textContent = '';
    var alle = maak('option', '', 'Alle segmenten'); alle.value = '';
    segment.appendChild(alle);
    uniek.forEach(function (s) { var o = maak('option', '', s); o.value = s; segment.appendChild(o); });
  }
  function toonDeals() {
    var lijst = (D[soort] || []).filter(function (d) { return !segment.value || d.segment === segment.value; })
      .sort(function (a, b) { return a.datum < b.datum ? 1 : a.datum > b.datum ? -1 : (b.bedrag || 0) - (a.bedrag || 0); });
    var ol = el('d-lijst');
    ol.textContent = '';
    lijst.forEach(function (d) {
      var li = maak('li', 'deal');
      li.appendChild(maak('span', 'deal__datum', datumTekst(d.datum)));
      var midden = maak('div', 'deal__midden');
      midden.appendChild(maak('h3', '', d.titel));
      var partijen;
      if (soort === 'financieringen') partijen = d.detail;
      else partijen = 'Koper: ' + d.koper + (d.verkoper ? '. Verkoper: ' + d.verkoper + '.' : '.');
      midden.appendChild(maak('p', '', partijen));
      var labels = maak('p', 'deal__labels');
      labels.appendChild(maak('span', '', d.segment));
      labels.appendChild(maak('span', '', d.regio));
      if (soort === 'financieringen') labels.appendChild(maak('span', '', d.financier));
      midden.appendChild(labels);
      li.appendChild(midden);
      var rechts = maak('div', 'deal__rechts');
      rechts.appendChild(maak('strong', d.bedrag === null ? 'deal__bedrag deal__bedrag--geen' : 'deal__bedrag', bedrag(d.bedrag)));
      var bron = soort === 'financieringen' ? bronLink('Bron: ' + d.bron, d.url) : bronLink('Bron: Brainsre News', D.transactiesBron.url);
      rechts.appendChild(bron);
      li.appendChild(rechts);
      ol.appendChild(li);
    });
    zet('d-telling', lijst.length === 0 ? 'Geen deals in dit segment. Kies een ander segment.' :
      lijst.length + (soort === 'financieringen' ? ' financieringen' : ' aan- en verkopen') + ', nieuwste bovenaan. Bijgewerkt op ' + (D.bijgewerkt || '') + '.');
  }
  Array.prototype.forEach.call(document.querySelectorAll('.keuze__knop'), function (k) {
    k.addEventListener('click', function () {
      soort = k.getAttribute('data-soort');
      Array.prototype.forEach.call(document.querySelectorAll('.keuze__knop'), function (x) {
        x.setAttribute('aria-pressed', x === k ? 'true' : 'false');
      });
      vulSegmenten(); toonDeals();
    });
  });
  segment.addEventListener('input', toonDeals);

  /* ---------- Start ---------- */
  var gedeeld = uitHash();
  if (gedeeld) laad(gedeeld); else rekenRendement();
  toonBewaard();
  rekenKosten();
  rekenProject();
  toonMarkt();
  vulSegmenten();
  toonDeals();
  if (/^#(deals|markt|kosten|project)$/.test(location.hash)) open(location.hash.slice(1));
})();
