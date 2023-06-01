/*
    @lvkaszus : lvkasz.us
    lvkaszusLanguageSelector Script (languageselector.js)

    GitHub: https://github.com/lvkaszus/lvkaszuswebsite-core

    "I tried to make my code as less spaghetti as possible :(" - lvkaszus 2023
*/


// Get the language parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

// Get the language cookie
const cookieLang = getCookie('lang');

// Determine the language to use
let language = 'pl'; // Default language is Polish
if (langParam === 'en') {
  language = 'en'; // Use English language if lang=en parameter
} else if (cookieLang) {
  language = cookieLang; // Use language preference from cookie
}

// Set the language in the cookie
setCookie('lang', language, 30); // store the language preference for 30 days

// Load the language-specific content
loadLanguageContent(language);

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=None;Secure`;
}

function loadLanguageContent(language) {
  // Translations for the content
  const content = {
    'pl': {

      // Header Menu
      'header_link-main': 'główna',
      'header_link-about_me': 'o mnie',
      'header_link-contact': 'kontakt',
      'header_link-pgp': 'klucz pgp',
      'header_link-info': 'informacje',

      // Main Page
      'main-subtext-1': 'moje media społecznościowe poniżej:',
      'main-social_media-link-ngl': '<i class="fa-solid fa-circle-question">&nbsp;</i>NGL (Anonimowe pytania)',
      'main-currentSongName': 'Aktualna piosenka: ',

      // About Me Page
      'about_me-subtext-1': 'kim jestem?',
      'about_me-description': 'Nazywam się Łukasz, znany bardziej jako "lvkaszus". Interesuję się informatyką każdego rodzaju oraz programowaniem. Lubię odkrywać nowe rzeczy 😃 Moim celem jest pracować w dziale serwerowym w dużych firmowych halach z serwerami i innymi urządzeniami teleinformatycznymi. Urodziłem się w 2006 roku i mieszkam w okolicach Kamienia Pomorskiego. To, że interesuję się informatyką nie oznacza że nie dotknąłem żadnej dziewczyny jak wiele głupich ludzi myśli. 😉<br><br>Mój opis który teraz czytasz, jak i ogólnie całą tą stronę napisałem samemu korzystając z własnego doświadczenia zaczynając od czystego pliku HTML i pustego arkusza stylów CSS, ciekawie prawda? 😄',
      'about_me-info_for_mobiles': 'Na tej stronie jest moje zdjęcie. Aby je wyświetlić, uruchom tę stronę na komputerze!',
      'about_me-social_page-link-1': 'Moje media społecznościowe znajdziesz, klikając w ten link',

      // Contact Page
      'contact-subtext-1': 'chcesz się ze mną skontaktować?',
      'contact-description': 'Jeżeli chciałbyś lub chciałabyś się ze mną skontaktować w sposób pisemny lub głosowy, możesz napisać do mnie lub zadzwonić korzystając z moich mediów społecznościowych. Pozatym, zawsze możemy się umówić na spotkanie i pogadać 😁<br><br>Możesz również napisać do mnie wiadomość e-mail, zarówno w tradycyjnej metodzie jak i szyfrowanej kluczem PGP którego znajdziesz u góry klikając w link pod tytułem "klucz pgp"<br><br><span style="font-weight: 500; color: #ff0000;">Pamiętaj tylko, że nigdy nie podam ci mojego prywatnego numeru telefonu. Mam ku temu swoje powody 😉</span>',
      'contact-social_media-link-socials': '<i class="fa-solid fa-share-from-square">&nbsp;</i>Moje media społecznościowe',
      'contact-social_media-link-normal_email': '<i class="fa-solid fa-envelope">&nbsp;</i>Mój Adres E-mail (tradycyjny)',
      'contact-social_media-link-pgp_email': '<i class="fa-solid fa-lock">&nbsp;</i>Mój Adres E-mail (tylko PGP!)',

      // PGP Key Page
      'pgp-subtext-1': '<i class="fa-solid fa-key">&nbsp;</i>Mój Klucz PGP - <u>tylko dla zaawansowanych</u>&nbsp;<i class="fa-solid fa-triangle-exclamation"></i>',
      'pgp-description': 'Chcesz podpisać,  zaszyfrować lub<br>odszyfrować jakąś wiadomość lub plik związany ze mną i mi to wysłać?<br><u>Pobierz mój klucz publiczny PGP!</u>',
      'pgp-fingerprint-subtext-1': 'Fingerprint klucza publicznego:',
      'pgp-download_signature-button': '<i class="fa-solid fa-file-signature">&nbsp;</i>Pobierz sygnaturę klucza',
      'pgp-download_key-button': '<i class="fa-solid fa-download">&nbsp;</i>Pobierz klucz PGP',
      'pgp-homepage-button-link': '<i class="fa-solid fa-house">&nbsp;</i>Powrót do strony głównej',

      // Informations Page
      'info-subtext-2': 'Strona internetowa (twoja_nazwa)! 😁',
      'info-description': 'Witaj na oficjalnej i jedynej mojej stronie w internecie!',
      'info-github-link-1': 'Zobacz kod źródłowy tej strony! 😄',
      'info-title-used_software-authors': 'Autorzy strony, komponentów, grafiki oraz design:',
      'info-used_software-authors': '<li><span style="font-weight: 600;">lvkaszus (Cała strona od zera aż do końca wraz z oskryptowaniem itp.)</span></li',
      'info-title-used_software-backend': 'Użyte oprogramowanie na serwerze:',
      'info-used_software-backend': '<li><span style="font-weight: 600;">DNS:</span> CloudFlare DNS + <span style="font-weight: 600;">Wsparcie:</span> lvkaszusDNS Server-side</li><li><span style="font-weight: 600;">Certyfikat SSL/TLS:</span> Cloudflare <span style="font-weight: 600;">(Google Trust Services)</span></li><li><span style="font-weight: 600;">Serwer:</span> Custom lvkaszusLinux arm64, najnowsza wersja stabilna</li><li><span style="font-weight: 600;">Reverse-Proxy:</span> Nginx</li><br><li><span style="font-weight: 600;">Oskryptowanie:</span> Python 3</li><li><span style="font-weight: 600;">Wykorzystane biblioteki:</span> Flask, <span style="font-weight: 600;">lvkaszusSocialMediaAPI</span>, telethon (Telegram), python: requests + json + APScheduler + asyncio, GUnicorn</li>',
      'info-title-used_software-frontend': 'Użyte oprogramowanie na stronie:',
      'info-used_software-frontend': '<li><span style="font-weight: 600;">Szkielet strony:</span> HTMLv5 + CSSv3</li><li><span style="font-weight: 600;">Czcionki:</span> Font Awesome v6.3 + Fira_Code v6.2</li><li><span style="font-weight: 600;">Pozostałe skrypty:</span> JavaScript</li><li><span style="font-weight: 600;">Zmiana języka:</span> lvkaszusLanguageSelector-JS</li><li><span style="font-weight: 600;">Odtwarzacz muzyki:</span> lvkaszusAudioPlayer Minimal (czysty JavaScript)</li>',

  },
    'en': {

      // Header Menu
      'header_link-main': 'home',
      'header_link-about_me': 'about me',
      'header_link-contact': 'contact',
      'header_link-pgp': 'pgp key',
      'header_link-info': 'informations',

      // Main Page
      'main-subtext-1': 'my social media below:',
      'main-social_media-link-ngl': '<i class="fa-solid fa-circle-question">&nbsp;</i>NGL (Anonymous questions)',
      'main-currentSongName': 'Current song: ',

      // About Me Page
      'about_me-subtext-1': 'who am i?',
      'about_me-description': 'My name is Lucas, better known as "lvkaszus". I am interested in computer science of all kinds and programming. I like to discover new things 😃 My goal is to work in large server rooms with lots of servers, switches and other equipment. I was born in 2006 and I live near Kamień Pomorski city in Poland. Just because I am interested in IT it does not mean that I have not touched any girl like many stupid people think 😉<br><br>My description that you are reading right now, as well as this whole site in general I wrote myself using my own experience starting with a clean HTML file and a blank CSS stylesheet, interesting right? 😄',
      'about_me-info_for_mobiles': 'There is my photo on this page. To view it, open this site on a computer or a laptop!',
      'about_me-social_page-link-1': 'You will find my social media, by clicking on this link',

      // Contact Page
      'contact-subtext-1': 'do you want to contact me?',
      'contact-description': 'If you would like to contact me by texting to me or by voice, you can write to me or call me using my social media. Besides, we can always meet up and talk 😁<br><br>You can also email me, both in the traditional way or an encrypted way by importing my Public PGP Key, which you can find at the top by clicking on the link with "pgp key" text<br><br><span style="font-weight: 500; color: #ff0000;">Just remember that I will never give you my private phone number. I have my reasons for that 😉</span>',
      'contact-social_media-link-socials': '<i class="fa-solid fa-share-from-square">&nbsp;</i>My social media',
      'contact-social_media-link-normal_email': '<i class="fa-solid fa-envelope">&nbsp;</i>My E-mail Address (traditional)',
      'contact-social_media-link-pgp_email': '<i class="fa-solid fa-lock">&nbsp;</i>My E-mail Address (only PGP!)',

      // PGP Key Page
      'pgp-subtext-1': '<i class="fa-solid fa-key">&nbsp;</i>My PGP Key - <u>advanced users only</u>&nbsp;<i class="fa-solid fa-triangle-exclamation"></i>',
      'pgp-description': 'Do you want to sign, encrypt or<br>decrypt any message or file and send it to me?<br><u>Download my PGP Public Key!</u>',
      'pgp-fingerprint-subtext-1': 'My Public Key Fingerprint:',
      'pgp-download_signature-button': '<i class="fa-solid fa-file-signature">&nbsp;</i>Download key signature', 
      'pgp-download_key-button': '<i class="fa-solid fa-download">&nbsp;</i>Download PGP Public Key',
      'pgp-homepage-button-link': '<i class="fa-solid fa-house">&nbsp;</i>Back to homepage',

      // Informations Page
      'info-subtext-2': '(your_name) Website!😁',
      'info-description': 'Welcome to my official and only website on the internet!',
      'info-github-link-1': 'Check out the source code of this website! 😄',
      'info-title-used_software-authors': 'Authors of the site, components, graphics and design:',
      'info-used_software-authors': '<li><span style="font-weight: 600;">lvkaszus (Entire site from scratch all the way to completion including scripting etc.)</span></li',
      'info-title-used_software-backend': 'Used software on server (backend):',
      'info-used_software-backend': '<li><span style="font-weight: 600;">DNS:</span> CloudFlare DNS + <span style="font-weight: 600;">Support:</span> lvkaszusDNS Server-side</li><li><span style="font-weight: 600;">SSL/TLS Certificate:</span> Cloudflare <span style="font-weight: 600;">(Google Trust Services)</span></li><li><span style="font-weight: 600;">Server:</span> Custom lvkaszusLinux arm64, latest stable release</li><li><span style="font-weight: 600;">Reverse-Proxy:</span> Nginx</li><br><li><span style="font-weight: 600;">Scripting:</span> Python 3</li><li><span style="font-weight: 600;">Used libraries:</span> Flask, <span style="font-weight: 600;">lvkaszusSocialMediaAPI</span>, telethon (Telegram), python: requests + json + APScheduler + asyncio, GUnicorn</li>',
      'info-title-used_software-frontend': 'Used software on site (frontend):',
      'info-used_software-frontend': '<li><span style="font-weight: 600;">Backbone of the site:</span> HTMLv5 + CSSv3</li><li><span style="font-weight: 600;">Fonts:</span> Font Awesome v6.3 + Fira_Code v6.2</li><li><span style="font-weight: 600;">Other scripts:</span> JavaScript</li><li><span style="font-weight: 600;">Language Changer:</span> lvkaszusLanguageSelector-JS</li><li><span style="font-weight: 600;">Music Player:</span> lvkaszusAudioPlayer Minimal (pure JavaScript)</li>'

    }
  };

  // Get the elements to update
  var header_link_main = document.querySelector('#header_link-main');
  var header_link_about_me = document.querySelector('#header_link-about_me');
  var header_link_contact = document.querySelector('#header_link-contact');
  var header_link_pgp = document.querySelector('#header_link-pgp');
  var header_link_info = document.querySelector('#header_link-info');

  var main_subtext_1 = document.querySelector('#subtext-1');
  var main_social_media_link_ngl = document.querySelector('.social_media-link-ngl');
  var main_currentsongname = document.querySelector('#currentSongName');

  var about_me_subtext_1 = document.querySelector('#subtext-1');
  var about_me_description = document.querySelector('.about_me-description');
  var about_me_info_for_mobiles = document.querySelector('#info_for_mobiles');
  var about_me_social_page_link_1 = document.querySelector('#social_page-link-1');

  var contact_subtext_1 = document.querySelector('#subtext-1');
  var contact_description = document.querySelector('.contact-description');
  var contact_social_media_link_socials = document.querySelector('.social_media-link-socials');
  var contact_social_media_link_normal_email = document.querySelector('.social_media-link-normal_email');
  var contact_social_media_link_pgp_email = document.querySelector('.social_media-link-pgp_email-link');


  var pgp_subtext_1 = document.querySelector('#subtext-1');
  var pgp_description = document.querySelector('#pgp-description');
  var pgp_fingerprint_subtext_1 = document.querySelector('#pgp-fingerprint-subtext-1');
  var pgp_download_signature_button = document.querySelector('.download_signature-button');
  var pgp_download_key_button = document.querySelector('.download_key-button');
  var pgp_homepage_button_link = document.querySelector('.homepage-button-link');

  var info_subtext_2 = document.querySelector('#subtext-2');
  var info_description = document.querySelector('#info-description');
  var info_github_link_1 = document.querySelector('#github-link-1');
  var info_title_used_software_authors = document.querySelector('#info-title-used_software-authors');
  var info_used_software_authors = document.querySelector('#info-used_software-authors');
  var info_title_used_software_backend = document.querySelector('#info-title-used_software-backend');
  var info_used_software_backend = document.querySelector('#info-used_software-backend');
  var info_title_used_software_frontend = document.querySelector('#info-title-used_software-frontend');
  var info_used_software_frontend = document.querySelector('#info-used_software-frontend');

  // Update the elements to desired language
  header_link_main.innerText = content[language]['header_link-main'];
  header_link_about_me.innerText = content[language]['header_link-about_me'];
  header_link_contact.innerText = content[language]['header_link-contact'];
  header_link_pgp.innerText = content[language]['header_link-pgp'];
  header_link_info.innerText = content[language]['header_link-info'];

  if (window.location.pathname == "/") {
    main_subtext_1.innerText = content[language]['main-subtext-1'];
    main_social_media_link_ngl.innerHTML = content[language]['main-social_media-link-ngl'];
    if (language == "pl") {
      main_social_media_link_ngl.style.padding = "5px 21px";
    } else {
      main_social_media_link_ngl.style.padding = "5px 14px";
    }
    main_currentsongname.innerHTML = content[language]['main-currentSongName'] + '<span id="currentSongTitle">' + yourSongName + '</span>';
    document.querySelector('#currentSongTitle').style.fontWeight = '300';

  } else if (window.location.pathname == "/about_me") {
    about_me_subtext_1.innerText = content[language]['about_me-subtext-1'];
    about_me_description.innerHTML = content[language]['about_me-description'];
    about_me_info_for_mobiles.innerText = content[language]['about_me-info_for_mobiles'];
    about_me_social_page_link_1.innerHTML = content[language]['about_me-social_page-link-1'];
  } else if (window.location.pathname == "/contact") {
    contact_subtext_1.innerText = content[language]['contact-subtext-1'];
    contact_description.innerHTML = content[language]['contact-description'];
    contact_social_media_link_socials.innerHTML = content[language]['contact-social_media-link-socials'];
    contact_social_media_link_normal_email.innerHTML = content[language]['contact-social_media-link-normal_email'];
    contact_social_media_link_pgp_email.innerHTML = content[language]['contact-social_media-link-pgp_email'];
  } else if (window.location.pathname == "/pgp") {
    pgp_subtext_1.innerHTML = content[language]['pgp-subtext-1'];
    pgp_description.innerHTML = content[language]['pgp-description'];
    pgp_fingerprint_subtext_1.innerText = content[language]['pgp-fingerprint-subtext-1'];
    pgp_download_signature_button.innerHTML = content[language]['pgp-download_signature-button'];
    pgp_download_key_button.innerHTML = content[language]['pgp-download_key-button'];
    pgp_homepage_button_link.innerHTML = content[language]['pgp-homepage-button-link'];
    if (language == "pl") {
      pgp_download_signature_button.style.padding = "5px 46px";
      pgp_download_key_button.style.padding = "5px 78px";
      pgp_homepage_button_link.style.padding = "5px 46px";
    } else {
      pgp_download_signature_button.style.padding = "5px 55px";
      pgp_download_key_button.style.padding = "5px 52px";
      pgp_homepage_button_link.style.padding = "5px 80px";
    }
  } else if (window.location.pathname == "/info") {
    info_subtext_2.innerText = content[language]['info-subtext-2'];
    info_description.innerText = content[language]['info-description'];
    info_github_link_1.innerText = content[language]['info-github-link-1'];
    info_title_used_software_authors.innerText = content[language]['info-title-used_software-authors'];
    info_used_software_authors.innerHTML = content[language]['info-used_software-authors'];
    info_title_used_software_backend.innerText = content[language]['info-title-used_software-backend'];
    info_used_software_backend.innerHTML = content[language]['info-used_software-backend'];
    info_title_used_software_frontend.innerText = content[language]['info-title-used_software-frontend'];
    info_used_software_frontend.innerHTML = content[language]['info-used_software-frontend'];
  }
}

var parentDiv = document.querySelector('#parent-container');
var languageSelectorDiv = document.createElement('div');

languageSelectorDiv.id = "lvLangSelector";

if (window.location.pathname == "/") {
   var secondDiv = parentDiv.children[10];
   parentDiv.insertBefore(languageSelectorDiv, secondDiv);
} else if (window.location.pathname == "/about_me") {
   var secondDiv = parentDiv.children[9];
   parentDiv.insertBefore(languageSelectorDiv, secondDiv);
} else if (window.location.pathname == "/contact") {
   var secondDiv = parentDiv.children[8];
   parentDiv.insertBefore(languageSelectorDiv, secondDiv);
} else if (window.location.pathname == "/pgp") {
   var secondDiv = parentDiv.children[11];
   parentDiv.insertBefore(languageSelectorDiv, secondDiv);
} else if (window.location.pathname == "/info") {
   var secondDiv = parentDiv.children[13];
   parentDiv.insertBefore(languageSelectorDiv, secondDiv);
}


var languageSelectorButton = document.createElement('button');
languageSelectorButton.addEventListener('click', function() {
   const currentLang = getCookie('lang');

   let newLang;
  if (currentLang === 'pl') {
    newLang = 'en';
  } else {
    newLang = 'pl';
  }

  // Set the new language in the lang cookie
  setCookie('lang', newLang);

  // Reload the page to apply the new language
  window.location.reload();
});

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : null;
}

// Helper function to set a cookie value
function setCookie(name, value) {
  document.cookie = name + '=' + value + '; SameSite=None; Secure';
}

const currentLang = getCookie('lang');

if (currentLang == 'pl') {
  languageSelectorButton.textContent = 'Change language to English';
} else {
  languageSelectorButton.textContent = 'Zmień język na Polski';
}

languageSelectorButton.id = "lvLangSelector-btn";
document.querySelector('#lvLangSelector').appendChild(languageSelectorButton);
