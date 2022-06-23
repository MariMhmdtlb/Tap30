const planCards = document.querySelectorAll(".card");
const autoPrimaryPlan = document.querySelector(".card:nth-child(2)");
autoPrimaryPlan.classList.add("card--primary");

planCards.forEach((c) => {
    c.addEventListener("mouseenter", makeCardPrimary);
});
planCards.forEach((c) => {
    c.addEventListener("mouseleave", autoCardClasses);
});

function makeCardPrimary(e) {
    const card = e.target;
    const cardClasses = card.classList;
    if (cardClasses.contain != "card--primary") {
        cardClasses.add("card--primary");
    } else {
        cardClasses = "card";
    }
}

function autoCardClasses() {
    planCards.forEach(
        (c) => {
            //if (c != autoPrimaryPlan) {
            if ((c.classList.contains = "card--primary") && c != autoPrimaryPlan) {
                c.classList = "card";
            }
        }
        //}
    );
}
class UI {
    displayCard(cards) {
        let resault = "";
        planCards.forEach((item) => {
            resault = `<div class="card">
            <div class="card__heading">
                <div class="card__heading-entry">
                    <p>${type}</p>
                    <span class="badge">${offPercentage}off</span>
                </div>
                <p class="card__heading-price"><span>${price}</span> ماهانه/تومان</p>
                <p class="card__tittle">${tittle}</p>
            </div>
            <div class="card__body">
                <ul class="list list--tick">
                    <li class="list__item">${quality}</li>
                    <li class="list__item">${noise}</li>
                    <li class="list__item">${timeLimite}</li>
                    <li class="list__item">${service}</li>
                </ul>
                <button class="btn btn-block btn--secondary">ثبت سفارش</button>
            </div>
        </div>`;
        });
    }
}