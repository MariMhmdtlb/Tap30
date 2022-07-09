import { cardData } from "./cardData";

const cardContainer = document.querySelector(".card-container");

class Cards {
    getCards() {
        return cardData;
    }
}
class UI {
    displayCard(cards) {
        let result = "";

        cards.forEach((item) => {
            result += `<div class="card ">
            <div class="card__heading">
                <div class="card__heading-entry">
                    <p>${item.type}</p>
                    <span class="badge">${item.offPercentage}% off</span>
                </div>
                <p class="card__heading-price"><span>${item.price}</span> ماهانه/تومان</p>
                <p class="card__tittle">${item.title}</p>
            </div>
            <div class="card__body">
                <ul class="list list--tick">
                    <li class="list__item">${item.quality}</li>
                    <li class="list__item">${item.noise}</li>
                    <li class="list__item">${item.timeLimite}</li>
                    <li class="list__item">${item.service}</li>
                </ul>
                <button class="btn btn-block">ثبت سفارش</button>
            </div>
        </div>`;
        });

        cardContainer.innerHTML = result;
    }

    cardClasses() {
        const allCards = cardContainer.querySelectorAll(".card");
        let primaryCard;
        primaryCard = allCards[1];

        makeCardPrimary(primaryCard);
        console.log(primaryCard);
        makeCardSecondary(primaryCard);

        function makeCardSecondary(primaryCard) {
            allCards.forEach((card) => {
                if (card != primaryCard) {
                    //heading style
                    card.classList = "card card--secondary";
                    //badge style
                    let badge = card.querySelector(".badge");
                    badge.classList = "badge badge--secondary";
                    //btn style
                    let btn = card.querySelector(".btn");
                    btn.classList = "btn btn--secondary";
                }
            });
        }

        function makeCardPrimary(primaryCard) {
            //heading style
            primaryCard.classList = "card card--primary";
            //badge style
            let badge = primaryCard.querySelector(".badge");
            badge.classList = "badge badge--primary";
            //btn style
            let btn = primaryCard.querySelector(".btn");
            btn.classList = "btn btn--primary";
        }
        //mouseenter changes
        allCards.forEach((c) => {
            c.addEventListener("mouseenter", (e) => {
                primaryCard = e.target;
                makeCardPrimary(primaryCard);
                makeCardSecondary(primaryCard);
            });
        });
        //mouseleavechanges
        allCards.forEach((c) => {
            c.addEventListener("mouseleave", (e) => {
                primaryCard = allCards[1];
                makeCardPrimary(primaryCard);
                makeCardSecondary(primaryCard);
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = new Cards();
    const cardData = cards.getCards();
    const ui = new UI();
    ui.displayCard(cardData);
    ui.cardClasses();
});