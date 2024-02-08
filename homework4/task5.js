//Zadaca 5
// Да се дефинира функција со име countdown која ќе прима еден параметар seconds.Внатре во функцијата, користете setInterval за да 
// спринтате порака за одбројување во конзолата на секоја секунда, почнувајќи од дадената вредност на секунди до 0. 
// Откако одбројувањето ќе достигне 0, 
// да се испринта „Countdown complete!“.

const countdown = (seconds) => {
    let interval = setInterval(() => {
        if (seconds === 0) {
            console.log("Countdown complete")
            clearInterval(interval)
        } else {
            console.log(seconds)
            seconds--
        }
    }, 1000)
}

countdown(3)

