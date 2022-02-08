let statisticItems = document.getElementsByClassName('histogram__statistics-item');

for (let statisticItem of statisticItems) {
    statisticItem.style.height = Math.floor(Math.random() * 100) + '%';
}