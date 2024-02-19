const fetchuserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        const usersContainer = document.getElementById("users")

        data.forEach((user) => {
            const userBlock = document.createElement("div")
            userBlock.classList.add("user-block")
            userBlock.innerHTML = `
            <h2>${user.name}</h2>
            <p>Phone: ${user.phone}</p>
            <p>Company: ${user.company.name}</p>
            `
            usersContainer.appendChild(userBlock)
       })
    } catch (error) {
        alert('Error fetching data:', error);
    }
}

fetchuserData()

