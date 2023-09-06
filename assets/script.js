/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede  */



/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

const teamMembers = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: './assets/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: './assets/img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        img: './assets/img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: './assets/img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        job: 'Developer',
        img: './assets/img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]



/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome,
 ruolo e la stringa della foto*/

for (const key in teamMembers) {
    console.log(teamMembers[key]);
    console.log(teamMembers[key].name)
    console.log(teamMembers[key].job)
    console.log(teamMembers[key].img)
}
