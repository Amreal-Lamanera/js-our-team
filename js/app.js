// console.log('js ok');

// creo un array e lo riempio di oggetti
const ourTeam = new Array;
ourTeam.push(getObject('Wayne Bernett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));
ourTeam.push(getObject('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'));
ourTeam.push(getObject('Walter Gordon', 'Office Manager	', 'walter-gordon-office-manager.jpg'));
ourTeam.push(getObject('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'));
ourTeam.push(getObject('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'));
ourTeam.push(getObject('WBarbara Ramosayne', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));
// console.log(ourTeam);

// stampo in console le info
ourTeam.forEach(consolePrint);

// recupero info dal dom
const domContainer = document.querySelector('.container-lg')
// stampo nel dom sotto forma di stringhe
ourTeam.forEach(domStringPrint);

/**********************************************************
    Funzione che crea un oggetto con i dati forniti e lo
    ritorna.
**********************************************************/
function getObject(name, role, img) {
    const obj = new Object;
    obj.name = name;
    obj.role = role;
    obj.img = img;

    return obj;
}

/**********************************************************
    Funzione che stampa in console un oggetto.
**********************************************************/
function consolePrint(element) {
    console.log(`Nome e Cognome: ${element.name}, Ruolo: ${element.role}, Immagine ${element.img}`);
}

/**********************************************************
    Funzione che stampa gli oggetti nel dom sotto
    forma di stringhe.
**********************************************************/
function domStringPrint(element) {
    domContainer.innerHTML += `<p>Nome e Cognome: ${element.name},</p> <p>Ruolo: ${element.role},</p> <p>Immagine: ${element.img}</p><hr>`;
}