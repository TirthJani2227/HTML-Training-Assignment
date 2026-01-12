let currentActiveTab = 0;
let currentActiveSaleLink = 2;
const contentToBeShown = [` Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the
    release of Letraset sheets containing`, "I am here", "Okay no worries"];

    
const saleLinks = Array.from(document.getElementsByClassName('link-sale'));
const navBottom = Array.from(document.getElementsByClassName('nav-hover'));
const content = document.getElementById('tab-content');


navBottom.forEach((div, idx) => {
    div.addEventListener('click', () => {
        if (currentActiveTab != idx) {
            navBottom[currentActiveTab].classList.remove('nav-hover-active')
            currentActiveTab = idx;
            div.classList.add('nav-hover-active')
            content.textContent = contentToBeShown[currentActiveTab]
        }
    });
});

saleLinks.forEach((div, idx) => {
    div.addEventListener('click', () => {
        if (currentActiveSaleLink != idx) {
            saleLinks[currentActiveSaleLink].classList.remove('active-link-sale')
            currentActiveSaleLink = idx;
            div.classList.add('active-link-sale')
        }
    });
});




