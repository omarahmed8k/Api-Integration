let hadithText = document.querySelector('.hadithText'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev');
    let hadithCounter = 0;

    hadith();

function hadith() {
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
        .then(response => response.json())
        .then(data => {

            let allHadith = data.data.hadiths;

            changer();

            next.addEventListener('click', () => {
                hadithCounter == 299 ? hadithCounter = 0 : hadithCounter++;
                changer()
            })

            prev.addEventListener('click', () => {
                hadithCounter == 0 ? hadithCounter = 299 : hadithCounter--;
                changer()
            })
            function changer() {
                hadithText.innerText = allHadith[hadithCounter].arab;
            }
        })
}

