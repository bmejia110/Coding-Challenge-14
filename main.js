//Task 2: Fetch Tickets Using Async/Await and Handle Errors
//dom elements
const ticketContainer = document.getElementById("ticketContainer");
const errorMessage = document.getElementById("errorMessage");

//async function to fetch tickets

async function fetchTickets() {
    try {
        ticketContainer.innnerHTML = "<p>Loading tickets</p>";

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// handle fetch error
        if(!response.ok) {
            throw new Error("Failed to fetch tickets")
        }

        const tickets = await response.json();
// throw error if no tickets 
        if(tickets.length === 0) {
            throw new Error("No unresolved tickets ");
        }

        return tickets;
    } catch (error) {

        errorMessage.textContent = error.message;
    } finally {

    //clears the loading message
    ticketContainer.innerHTML =" "
    }
}

//Task 3: Display Tickets Dynamically on the Page
