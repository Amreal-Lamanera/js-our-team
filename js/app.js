// console.log('js ok');

const ourTeam = new Array;
ourTeam.push(getObject('Wayne Bernett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));
ourTeam.push(getObject('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'));
ourTeam.push(getObject('Walter Gordon', 'Office Manager	', 'walter-gordon-office-manager.jpg'));
ourTeam.push(getObject('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'));
ourTeam.push(getObject('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'));
ourTeam.push(getObject('WBarbara Ramosayne', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));

console.log(ourTeam);

function getObject(name, role, img) {
    const obj = new Object;
    obj.name = name;
    obj.role = role;
    obj.img = img;

    return obj;
}