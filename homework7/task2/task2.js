function fetchCharacterData() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {

            const cardsContainer = document.getElementById("cards")
            data.results.forEach(character => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img")
                img.src = character.image
                img.alt = character.name
                card.appendChild(img)

                const name = document.createElement("p")
                name.classList.add("card-name")
                name.textContent = character.name
                card.appendChild(name)

                const gender = document.createElement("p")
                gender.textContent = "Gender: " + character.gender
                card.appendChild(gender)

                const isAlive = document.createElement("p")
                isAlive.textContent = "Status: "
                const status = document.createElement("span")
                if (character.status === "Alive") {
                    status.textContent = character.status
                    status.classList.add("alive")
                } else if (character.status === "Dead") {
                    status.textContent = character.status
                    status.classList.add("dead")
                } else {
                    status.textContent = "Unknown"
                    status.classList.add("unknown")
                }
                isAlive.appendChild(status)
                card.appendChild(isAlive)

                const episodes = document.createElement("p")
                episodes.textContent = "Number of episodes: " + character.episode.length
                card.appendChild(episodes)

                cardsContainer.appendChild(card)
            })

        })
        .catch(error => console.log("Error: ", error))

}
fetchCharacterData()