// @ts-nocheck

// document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
// document.querySelector('#name').textContent = '<em>Gipsz Jakab</em>';

const nameHU = 'Fülöp Tamás';
const nameEN = 'Tamas Fulop';
const professionHU = 'Szoftverfejlesztő';
const professionEN = 'Software Developer';
const addressHU = 'Magyarország, Dunaújváros';
const addressEN = 'Dunaujvaros, Hungary';

initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

function languageChangeHU() {
  document.getElementById('name').textContent = nameHU;
  document.getElementById('profession').textContent = professionHU;
  document.getElementById('address').textContent = addressHU;
}

function languageChangeEN() {
  document.getElementById('name').textContent = nameEN;
  document.getElementById('profession').textContent = professionEN;
  document.getElementById('address').textContent = addressEN;
}