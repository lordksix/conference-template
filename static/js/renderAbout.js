import RenderModule from './renderModule.js';

let body = document.querySelector('body');
let mobile = window.innerWidth < 768;

function removeChilds(body) {
  const removeSponsor = document.querySelector('.sponsors') || '';
  if (removeSponsor) body.removeChild(removeSponsor);
  const removeFooter = document.querySelector('footer') || '';
  if (removeFooter) body.removeChild(removeFooter);
}

function renderPage() {
  body = document.querySelector('body');
  mobile = window.innerWidth < 768;
  removeChilds(body);
  const docFrag = document.createDocumentFragment();
  if (mobile) {
    docFrag.appendChild(RenderModule.renderSponsorSec(mobile));
    docFrag.appendChild(RenderModule.renderFoot(mobile));
  } else {
    docFrag.appendChild(RenderModule.renderFoot(mobile, false));
  }
  body.appendChild(docFrag);
  const footer = document.querySelector('footer');
  footer.classList.add('white');
}

window.addEventListener('load', renderPage);
window.addEventListener('resize', renderPage);