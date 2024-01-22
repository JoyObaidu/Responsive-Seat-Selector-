const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movies');
const confirmBtn = document.getElementById('btn');
const closeModal = document.querySelector('.close');
const modal = document.querySelector('.modal');

let ticketPrice = +movieSelector.value;
populateUI();
//get data from localstorage and populate the UI
function populateUI() {
     const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
     ;
     if (selectedSeats !== null && selectedSeats.length > 0) {
          seats.forEach((seats, index) => {
               if (selectedSeats.indexOf(index) > -1) {
                    seats.classList.add('selected');
               }
          });
     }

     const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
     if (selectedMovieIndex != null) {
       movieSelector.selectedIndex = selectedMovieIndex;    
     }
}

//seave selected movie index
function setMovieData(movieIndex, moviePrice) {
     localStorage.setItem('selectedMovieIndex', movieIndex);
     localStorage.setItem('selectedMoviePrice', movieIndex);
}



//Update total and count
function updateSelectedCount() {
    const selectedSeats = 
    document.querySelectorAll('.row .seat.selected');

     const seatsIndex = [...selectedSeats].map(function(seat) {
          return[...seats].indexOf(seat);
     });
     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
;
     const selectedSeatsCount = selectedSeats.length;
     
     count.innerText = selectedSeatsCount;
     total.innerText = selectedSeatsCount * ticketPrice;
}

//movie select event
movieSelector.addEventListener('change', (e) =>{
     ticketPrice = +e.target.value;
     console.log(e.target.selectedIndex, e.target.value);
     updateSelectedCount();
});



container.addEventListener('click', (e) => {
   if (e.target.classList.contains('seat') && 
   !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
   }

   updateSelectedCount();
});

confirmBtn.addEventListener('click', (e) => {
     modal.style.display = 'block';
     if () {
          
     }
});

closeModal.addEventListener('click', (e) => {
     modal.style.display = 'none';
});

updateSelectedCount();
