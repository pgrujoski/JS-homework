//zadaca 4

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30,
                email: "john@example.com",
            })
        }, 2000)
    })
}

//Ваша задача е да дефинирате асинхрона функција displayUserDetails која што ќе ги испечати податоците во конзола. 
//Да се употребат try/catch блокови.

async function displayUserDetails(user) {
    try {
        const message = await fetchData(user)
        console.log(message)
    } catch {
        console.log(error)
    }
}

displayUserDetails()