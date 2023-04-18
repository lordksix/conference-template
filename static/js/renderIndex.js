import RenderModule from './renderModule.js';

let body = document.querySelector('body');
let mobile = window.innerWidth < 768;

function renderReminder(moreBTn, mobile) {
  const speaker = document.querySelector('.speakers');
  const speakerCtn = document.querySelector('.speakers .speakers-ctn');
  const index = parseInt(document.querySelector('.speakers .speakers-ctn li:last-child').dataset.speaker, 10);
  const speakerCtnFrag = document.createDocumentFragment();
  if (index + 1 < RenderModule.speakers.length) {
    for (let i = index + 1; i < RenderModule.speakers.length; i += 1) {
      speakerCtnFrag.appendChild(RenderModule.renderSpeaker(RenderModule.speakers[i], i));
    }
  }
  speakerCtn.appendChild(speakerCtnFrag);
  speaker.removeChild(moreBTn);
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(RenderModule.renderSponsorSec(mobile));
  docFrag.appendChild(RenderModule.renderFoot(mobile));
  body.appendChild(docFrag);
}

function removeChilds(body) {
  const removeSpeaker = document.querySelector('.speakers') || '';
  if (removeSpeaker) body.removeChild(removeSpeaker);
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
  if (mobile) docFrag.appendChild(RenderModule.renderSpeakerSec(mobile));
  else {
    docFrag.appendChild(RenderModule.renderSpeakerSec(mobile));
    docFrag.appendChild(RenderModule.renderSponsorSec(mobile));
    docFrag.appendChild(RenderModule.renderFoot(mobile));
  }
  body.appendChild(docFrag);

  const moreBTn = document.querySelector('.speakers .btn-more') || '';
  if (moreBTn) moreBTn.addEventListener('click', () => renderReminder(moreBTn, mobile));
}

window.addEventListener('load', renderPage);
window.addEventListener('resize', renderPage);