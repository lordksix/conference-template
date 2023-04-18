const speakers = [
  {
    src: './images/speaker_03.svg',
    name: 'Minister Lin Hui Hui',
    pos: 'Minister for Foreign Affairs of the Republic of China',
    descrip: 'Current Minister for Foreign Affairs of the Republic of China. Carrer diplomat.',
  },
  {
    src: './images/speaker_02.svg',
    name: 'Minister Jose Cuellar',
    pos: 'Minister for Foreign Affairs of the Republic of Peru',
    descrip: 'Current Minister for Foreign Affairs of the Republic of Peru. Carrer diplomat.',
  },
  {
    src: './images/speaker_06.svg',
    name: 'Ambassador Jean Couturier',
    pos: 'Chief of SouthEast Asia Region, MOFA, Peru',
    descrip: 'Current Chief of the Deparment of SouthEast Asia Region of the MOFA, Peru. Carrer diplomat. Former Ambassador to the US, Former Ambassador to France',
  },
  {
    src: './images/speaker_04.svg',
    name: 'Ambassador Tang Po-kai',
    pos: 'Chief of Americas Region, MOFA, Taiwan',
    descrip: 'Current Chief of the Americas Region of the MOFA, Peru. Carrer diplomat. Former Ambassador to the Honduras, Former TECO Representative to the US, Former Representative to the WHO',
  },
  {
    src: './images/speaker_05.svg',
    name: 'Consul Jennifer Lee',
    pos: 'Chief of the Trade, Economic and Cultural Office of Taiwan in Peru',
    descrip: 'Current Chief of the Trade, Economic and Cultural Office of Taiwan in Peru. Currently in the post for more than 3 years. Former TECO Repesentative to Bolivia',
  },
  {
    src: './images/speaker_01.svg',
    name: 'Consul Raul Perez',
    pos: 'Chief of the Trade, Economic and Cultural Office of Peru in Taiwan',
    descrip: 'Current Chief of the Trade, Economic and Cultural Office of Peru in Taiwan. Former Consul General of Peru in Manila, Former Consul General of Peru in Bombay',
  },
];

const sponsors = [
  {
    name: 'Google',
    src: './images/sponsor_google.svg',
  },
  {
    name: 'Don Piter',
    src: './images/LOGO DON PITER.svg',
  },
  {
    name: 'New Begin Project',
    src: './images/NewLogo.svg',
  },
  {
    name: 'AirBnB',
    src: './images/sponsor_airbnb.svg',
  },
  {
    name: 'New Life Company',
    src: './images/NewLogo3.svg',
  },
];

const logoDescripArr = [
  '2023 Peru Taiwan International Summits',
  'Ministry of Foreign Affairs (MOFA) of the Republic of China (Taiwan)',
  'Ministry of Foreign Affairs (Torre Tagle) of the Republic of Peru',
];

const dateSummit = [
  {
    name: '2023.06.23(FRI) - 25(SUN)',
    descrip: '@NATIONAL TAIWAN UNIVERSITY, Taipei',
  },
  {
    name: '2023.06.26(MON) - 28(WED)',
    descrip: '@GREATER TAICHUNG INT\'L EXPO CENTER, Taichung',
  },
  {
    name: '2023.06.29(THURS) - 07.01(SAT)',
    descrip: '@KAOHSIUNG EXHIBITION CENTER, Kaohsiung',
  },
  {
    name: '2023.07.14(FRI) - 16(SUN)',
    descrip: '@CONVENTION CENTER, Lima',
  },
  {
    name: '2023.07.17(MON) - 19(WED)',
    descrip: '@CONVENTION CENTER LOS CONQUISTADORES, Trujillo',
  },
  {
    name: '2023.07.20(THURS) - 22(SAT)',
    descrip: '@CONVENTION CENTER CERRO JULI, Arequip',
  },
];

function renderSpeaker(speaker, index) {
  const speakerTag = document.createElement('li');
  speakerTag.classList.add('speaker');
  speakerTag.setAttribute('data-speaker', `${index}`);
  const speakerPic = document.createElement('img');
  speakerPic.classList.add('work-image');
  speakerPic.src = speaker.src;
  speakerPic.alt = `Speaker ${speaker.name}, 2023`;
  speakerTag.appendChild(speakerPic);
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker-right');
  const speakerDivHead = document.createElement('h3');
  speakerDivHead.classList.add('speaker-name');
  speakerDivHead.textContent = speaker.name;
  speakerDiv.appendChild(speakerDivHead);
  const speakerDivPos = document.createElement('p');
  speakerDivPos.classList.add('speaker-pos');
  speakerDivPos.textContent = speaker.pos;
  speakerDiv.appendChild(speakerDivPos);
  const speakerDivDescrip = document.createElement('p');
  speakerDivDescrip.classList.add('speaker-descrip');
  speakerDivDescrip.textContent = speaker.descrip;
  speakerDiv.appendChild(speakerDivDescrip);
  speakerTag.appendChild(speakerDiv);
  return speakerTag;
}

function renderSponsor(sponsor) {
  const sponsorTag = document.createElement('li');
  sponsorTag.classList.add('activiy');
  const sponsorPic = document.createElement('img');
  sponsorPic.src = sponsor.src;
  sponsorPic.alt = `${sponsor.name}, 2023`;
  sponsorPic.classList.add('work-image');
  sponsorTag.appendChild(sponsorPic);
  return sponsorTag;
}

function buttonMore() {
  const speakerBtn = document.createElement('button');
  speakerBtn.classList.add('btn-more');
  const speakerBtnSpan = document.createElement('span');
  speakerBtnSpan.textContent = 'MORE';
  speakerBtn.appendChild(speakerBtnSpan);
  const speakerBtnImg = document.createElement('img');
  speakerBtnImg.src = './images/arrow_down.svg';
  speakerBtnImg.alt = 'Click to open languages';
  speakerBtnImg.classList.add('arrow');
  speakerBtn.appendChild(speakerBtnImg);
  return speakerBtn;
}

function renderSpeakers(mobile) {
  const speakerCtn = document.createElement('ul');
  speakerCtn.classList.add('speakers-ctn');
  const speakerCtnFrag = document.createDocumentFragment();
  for (let index = 0; index < speakers.length; index += 1) {
    if (index < 2 || !mobile) speakerCtnFrag.appendChild(renderSpeaker(speakers[index], index));
  }
  speakerCtn.appendChild(speakerCtnFrag);
  return speakerCtn;
}

function renderSponsors() {
  const sponsorCtn = document.createElement('ul');
  sponsorCtn.classList.add('activiy-ctn');
  const sponsorCtnFrag = document.createDocumentFragment();
  sponsors.forEach((sponsor) => sponsorCtnFrag.appendChild(renderSponsor(sponsor)));
  sponsorCtn.appendChild(sponsorCtnFrag);
  return sponsorCtn;
}

function renderSec(heading, mobile) {
  const docFrag = document.createDocumentFragment();
  const headTag = document.createElement('h2');
  headTag.classList.add('section-title');
  headTag.textContent = heading;
  docFrag.appendChild(headTag);
  const headUnder = document.createElement('img');
  headUnder.src = './images/title_underline.svg';
  headUnder.alt = '';
  switch (heading) {
    case 'Feature Speakers':
      docFrag.appendChild(headUnder);
      docFrag.appendChild(renderSpeakers(mobile));
      if (mobile) docFrag.appendChild(buttonMore());
      break;
    case 'Partners':
      docFrag.appendChild(headUnder);
      docFrag.appendChild(renderSponsors());
      break;
    default:
      break;
  }
  return docFrag;
}

function renderSpeakerSec(mobile) {
  const section = document.createElement('section');
  section.classList.add('section-light', 'modal-bg', 'speakers');
  section.id = 'speakers';
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(renderSec('Feature Speakers', mobile));
  section.appendChild(docFrag);
  return section;
}

function renderSponsorSec(mobile) {
  const section = document.createElement('section');
  section.classList.add('section-dark', 'modal-bg', 'sponsors');
  section.id = 'sponsors';
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(renderSec('Partners', mobile));
  section.appendChild(docFrag);
  return section;
}

function renderFoot(mobile, index = true) {
  const docFrag = document.createDocumentFragment();
  const footer = document.createElement('footer');
  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  const logoA = document.createElement('a');
  logoA.href = '#intro';
  const logoImg = document.createElement('img');
  logoImg.alt = 'Peru Taiwan Summits 2023';
  if (index || mobile) {
    logoImg.src = './images/Conference-logo.svg';
    footer.classList.add('modal-bg');
  } else {
    logoImg.src = './images/conference-logo-light.svg';
    footer.classList.add('modal-bg', 'dark');
  }
  logoA.appendChild(logoImg);
  logoDiv.appendChild(logoA);
  docFrag.appendChild(logoDiv);

  const logoDescrip = document.createElement('div');
  logoDescrip.classList.add('descrip');
  logoDescripArr.forEach((descrip) => {
    const logoP = document.createElement('p');
    logoP.textContent = descrip;
    logoDescrip.appendChild(logoP);
  });
  docFrag.appendChild(logoDescrip);
  footer.appendChild(docFrag);
  return footer;
}

function arrowTad(id, alt) {
  const prevArrowTag = document.createElement('a');
  prevArrowTag.href = '#';
  prevArrowTag.id = id;
  const prevArrowImg = document.createElement('img');
  prevArrowImg.src = './images/arrow.svg';
  prevArrowImg.classList.add('arrow');
  prevArrowImg.alt = alt;
  prevArrowTag.appendChild(prevArrowImg);
  return prevArrowTag;
}

function renderDates(dateSch) {
  const silderLi = document.createElement('li');
  const silderDiv = document.createElement('div');
  silderDiv.classList.add('content', 'date-schedule');
  const silderHead = document.createElement('h3');
  silderHead.textContent = dateSch.name;
  silderDiv.appendChild(silderHead);
  const silderDes = document.createElement('p');
  silderDes.textContent = dateSch.descrip;
  silderDiv.appendChild(silderDes);
  silderLi.appendChild(silderDiv);
  return silderLi;
}

function renderDataSchedule() {
  const silderUl = document.createElement('ul');
  const docFrag = document.createDocumentFragment();
  dateSummit.forEach((dateSch) => docFrag.appendChild(renderDates(dateSch)));
  silderUl.appendChild(docFrag);
  return silderUl;
}

function renderDatesCtn() {
  const datesCtn = document.createElement('div');
  datesCtn.classList.add('date-schedule-container');
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(arrowTad('prev', 'Previous'));
  const silderCtn = document.createElement('div');
  silderCtn.id = 'slider-wrapper';
  silderCtn.appendChild(renderDataSchedule());
  docFrag.appendChild(silderCtn);
  docFrag.appendChild(arrowTad('next', 'Next'));
  datesCtn.appendChild(docFrag);
  return datesCtn;
}

export default {
  renderSpeakerSec,
  renderSponsorSec,
  renderFoot,
  renderSec,
  speakers, 
  renderSpeaker, 
  renderDatesCtn,
};