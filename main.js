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
    ticketContainer.innerHTML ="block"
    }
}

//Task 3: Display Tickets Dynamically on the Page

async function displayTickets() {
    const tickets = await fetchTickets();

    if(tickets && tickets.length > 0) {
        tickets.forEach(ticket => {
            const ticketDiv = document.create Element();
            ticketDiv.classList.add("ticket");

            const customerName = document.createElement("div");
            customerName.textContent = "Customer Name: ${ticket.userId)";

            const ticketId = document.createElement("div");
            ticketID.textContent = "Customer Name: User ${ticket.userId}";

            const issueDesc = document.createElement("div");
            issueDesc.textContent = "Issue Description: ${ticket.title}";

            const details = document.createElement("div");
            details.textContent = "Details: ${ticket.body}";

            ticketDiv.appendChild(ticketId);
            ticketDiv.appendChild(customerName);
            ticketDiv.appendChild(issueDesc);
            ticketDiv.appendChild(details);

            ticketContainer.appendChild(ticketDiv);
        });
    }
}

//Task 4: Use finally to Ensure Cleanup

finally {
    loadingIndicator.style.display = "none";
}

