const content = document.getElementById("contenuto")

const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Developer",
        ruolo: "Chief Editor",
        immagine: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/barbara-ramos-graphic-designer.jpg",
    },
]


for (let i = 0; i < team.length; i++) {
    const membro = team[i];
    content.innerHTML = content.innerHTML + `<div>${membro.nome}</div>`
    content.innerHTML = content.innerHTML + `<div>${membro.ruolo}</div>`
    content.innerHTML = content.innerHTML + `<img src="${membro.immagine}"></img>`

}