const freelancers = [
    {name: "Dr. Slice", price: 25, occupation: "gardener"},
    {name: "Dr. Pressure", price: 51, occupation: "programmer"},
    {name: "Prof. Possibility", price: 43, occupation: "teacher"},
    {name: "Prof. Prism", price: 81, occupation: "teacher"},
    {name: "Dr. Impulse", price: 43, occupation: "teacher"},
    {name: "Prof. Spark", price: 76, occupation: "programmer"},
    {name: "Dr. Wire", price: 47, occupation: "teacher"},
    {name: "Prof. Goose", price: 72, occupation: "driver"},
];

const names = ["Sahara Vigil",
    "Ian Parson",
    "Tomas Heckman",
    "Janet Mancini",
    "Ariel Rosenthal",
    "Jena Head",
    "Kamren Coleman",
    "Itzel Briggs",
    "Allissa Nagle",
    "Brennan Braun",
    "Eva Botello",
    "Jacoby Kilgore",
    "Tierra Flood",
    "Rena Marion",
    "Danae Rojas",
    "Varun Booth",
    "Erick McGowan",
    "Ezra Mabry",
    "Rashawn Royal",
    "Mitchell Tong",
    "Keith Muller",
    "Bradford Perez",
    "Savion Fowler",
    "Josiah Runyon",
    "Camron Milligan",
    "Scarlett Epperson",
    "Daniella Kish",
    "Babygirl Norris",
    "Shamya Snider",
    "Rosalie Foltz"];
const occupations = ["Computer Support Specialist",
    "Zoologist",
    "Clinical Laboratory Technician",
    "Web Developer",
    "Paramedic",
    "Registered Nurse",
    "Professional athlete",
    "Software Developer",
    "Bus Driver",
    "Systems Analyst",
    "Epidemiologist",
    "Microbiologist",
    "Construction Manager",
    "Database administrator",
    "Actor",
    "Designer",
    "Architect",
    "Electrician",
    "Writer",
    "Referee",
    "Reporter",
    "Physician",
    "Social Worker",
    "Drafter",
    "Respiratory Therapist",
    "Logistician",
    "Physical Therapist",
    "Computer Systems Administrator",
    "Mason",
    "Insurance Agent"
];
const addFreelancerIntervalId = setInterval(addFreelancer, 5000);
render();

function render() {
    const table = document.querySelector("#freeLancerTbl");
    const avg = document.querySelector("#average");
    let average = freelancers.reduce((accumulator, currentValue) => {
        accumulator += currentValue.price;
        return Math.round(accumulator / freelancers.length)
    }, 0);
    avg.innerHTML = 'The average starting price is $' + average + '.';

    const tableData = freelancers.map((obj) => {
        const tableRows = document.createElement('tr');
        const element2 = document.createElement('td');
        element2.textContent = obj.name;
        const element3 = document.createElement('td');
        element3.textContent = obj.occupation.toUpperCase()
        const element4 = document.createElement('td');
        element4.textContent = '$ ' + obj.price
        tableRows.append(element2, element3, element4);
        return tableRows;
    });
    table.append(...tableData);
}

function addFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1;

    freelancers.push({name: randomName, price: randomPrice, occupation: randomOccupation});
    //render();
}

