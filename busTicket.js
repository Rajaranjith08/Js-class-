
const TOTAL_SEATS = 10;
let seats = new Array(TOTAL_SEATS).fill(null);
// seats[0] ="raja"
// console.log(seats[0])

// // show seats
function showSeats() {
    console.log("\nSeat Status:");
    for (let i = 0; i < TOTAL_SEATS; i++) {
        // console.log(i)
        if (seats[i] === null) {
            // checking a seat is booked or not
            console.log(`Seat ${i + 1}: Available`);
        } else {
            console.log(`Seat ${i + 1}: Booked by ${seats[i]}`);
        }
    }
}

function bookMutipleSeat(seatsNumber, name){

    // This is also loop
    seatsNumber.forEach( seatNumber => {
        // console.log(seatNumber)
        bookSeat(seatNumber, name)
    });
}

function bookSeat(seatNumber, name) {
    if (seatNumber < 1 || seatNumber > TOTAL_SEATS) {
        return console.log("Invalid seat number.");
    }

    if (seats[seatNumber - 1] !== null) {
        return console.log("Seat already booked.",`Booked by: ${seats[seatNumber - 1]}`);
    }
    
    seats[seatNumber - 1] = name;
    console.log(`Seat ${seatNumber} successfully booked for ${name}`);
}

// cancel booking
function cancelSeat(seatNumber) {
    if (seatNumber < 1 || seatNumber > TOTAL_SEATS) {
        console.log("Invalid seat number.");
        return;
    }

    if (seats[seatNumber - 1] === null) {
        return console.log("Seat is already empty.");
    }

    seats[seatNumber - 1] = null;
    console.log(`Seat ${seatNumber} booking cancelled.`);
}

// Example usage
// showSeats();
bookMutipleSeat([1,4,5], "Rahul");
// bookSeat(5, "Anita");
// showSeats();
// cancelSeat(3);
showSeats();