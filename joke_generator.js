let get = document.getElementById("get");

async function myfun() {
    try {
        let response = await fetch("https://official-joke-api.appspot.com/random_joke", {
            headers: {
                accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        let joke = await response.json();
        let data = `${joke.setup} <br> ${joke.punchline}`; // Fixed the template literal
        get.innerHTML = data;
        console.log(joke);

        // Automatically call telljoke with fetched joke
        telljoke(joke.setup, joke.punchline);

    } catch (error) {
        console.error("Error: " + error.message);
        get.innerHTML = "Failed to load joke, please try again.";
    } finally {
        console.log("Joke request finished.");
    }
}

function telljoke(setup, punchline) {
    try {
        if (!setup || !punchline) {
            throw new Error("Setup or punchline is missing");
        }
        console.log("Joke: " + setup);
        console.log("Punchline: " + punchline);
    } catch (error) {
        console.error("Error: " + error.message);
    } finally {
        console.log("Thanks for enjoying the joke!");
    }
}

// Add event listener for button
document.getElementById("jokeButton").addEventListener("click", myfun);
