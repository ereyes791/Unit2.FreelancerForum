document.addEventListener('DOMContentLoaded', function() {
    // Default freelancer list
    const freelancers = [
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
        { name: "Prof. Possibility", price: 43, occupation: "teacher" },
        { name: "Prof. Prism", price: 81, occupation: "teacher" },
        { name: "Dr. Impulse", price: 43, occupation: "teacher" },
        { name: "Prof. Spark", price: 76, occupation: "programmer" },
        { name: "Dr. Wire", price: 47, occupation: "teacher" },
        { name: "Prof. Goose", price: 72, occupation: "driver" },
    ];
    // List of occupations
    const occupations = [
        'Doctor',
        'Teacher',
        'Software Developer',
        'Engineer',
        'Nurse',
        'Lawyer',
        'Chef',
        'Artist',
        'Accountant',
        'Police Officer',
        'Firefighter',
        'Writer',
        'Electrician',
        'Plumber',
        'Architect',
        'Graphic Designer',
        'Psychologist',
        'Dentist',
        'Mechanic',
        'Veterinarian',
        'Pharmacist',
        'Pilot',
        'Journalist',
        'Musician',
        'Athlete',
        'Economist',
        'Biologist',
        'Entrepreneur',
        'Librarian',
        'Carpenter'
      ];
      //get all freelancers from the list
      function retriveAllFreelancers() {
      freelancers.forEach((freelancer) => {
        addFreeLancersToTheDOM(freelancer.name, freelancer.occupation, freelancer.price);
      });    
    }
      // insert default freelancer list to the DOM
    function addFreeLancersToTheDOM(name, occupation, price) {
        const parentElement = document.getElementById("freelancer-list");
        parentElement.insertAdjacentHTML('beforeend', `<tr><td>${name}</td><td>${occupation}</td><td>${price} $</td></tr>`);
    }
    // calculate average price of freelancers.
    function calculateAveragePrice() {
        let sum = 0;
        freelancers.forEach((freelancer) => {
            sum += freelancer.price;
        });
        return sum / freelancers.length;
    }
    // add average price to the DOM
    function addAveragePriceToTheDOM() {
        const parentElement = document.getElementById("average-price");
        parentElement.innerHTML = '';
        parentElement.insertAdjacentHTML('beforeend', `${calculateAveragePrice().toFixed(2)}`);
    }
    // generate a random freelancer using https://randomuser.me/ and occupation array
    function generateRandomFreelancer() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                const randomUserName =`${data.results[0].name.title} ${data.results[0].name.first}`;
                const randomUserOccupation = occupations[Math.floor(Math.random() * occupations.length)];
                const randomUserPrice = Math.floor(Math.random() * 100);
                freelancers.push({ name: randomUserName, price: randomUserPrice, occupation: randomUserOccupation });
                console.log(freelancers);
                addFreeLancersToTheDOM(randomUserName,randomUserOccupation,randomUserPrice)
                addAveragePriceToTheDOM();
            }
          });
    }
    const button = document.getElementById("add-freelancer");
    button.addEventListener('click', generateRandomFreelancer);
    addAveragePriceToTheDOM();
    generateRandomFreelancer();
    retriveAllFreelancers();
});