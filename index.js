let ratings = document.querySelectorAll('.circle-number');
let bnt = document.getElementById('btn');
let evaluationNote = document.querySelector('.evaluation-note');
let tks = document.querySelector('.tks');
let span = document.getElementById('rating');

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        let rating = ratings[i].innerHTML;
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected')
        }

        ratings[i].classList.add('selected');

        bnt.addEventListener('click', () => {
            evaluationNote.style.display = 'none';
            tks.style.display = 'block';
            span.innerHTML = rating;
        })
    })
}