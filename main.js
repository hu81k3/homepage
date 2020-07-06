const name = "Hubert";
const age = 22;

const additional = document.querySelector('.author__description--js');
additional.innerHTML = 'Tutaj jest innerHTML wrzucony poprzez JS. W ten sposób wykonałem jedno z zadań domowych.';

// Zadania z tygodnia V

function greet(myNumber) {
    console.log(`Hej! Mam na imię ${name}. Mam ${age} lata i chcę zostać fullstack developerem. 😊`);
}

const myGreetings = greet(name, age);

console.log(age);