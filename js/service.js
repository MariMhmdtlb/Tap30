import { serviceData } from "./servicedata.js";

const serviceIconList = document.querySelector(".service-icon__list");
class services {
    getService() {
        return serviceData;
    }
}
class UI {
    displayServiceIcon(services) {
        let servicIconItems = "";
        services.forEach((item) => {
            servicIconItems += `<li class="service-icon__item">
            <img src="${item.icon}" class="service-icon__img" />
            <h4 class="service-icon__title">${item.title}</h4>
        </li>`;
        });
        console.log();

        serviceIconList.innerHTML = servicIconItems;
        const serviceItems = document.querySelectorAll(".service-icon__item");
        const serviceDescription = document.querySelector(".service-description");
        let theIntendedIcon;
        intendedIcon(serviceItems);

        function intendedIcon(serviceItems) {
            theIntendedIcon = serviceItems[0];
            addOpacity(theIntendedIcon);
            showIntendedDescription(theIntendedIcon);
            serviceItems.forEach((item) => {
                item.addEventListener("click", (item) => {
                    theIntendedIcon = item.target.parentElement;
                    addOpacity(theIntendedIcon);
                    showIntendedDescription(theIntendedIcon);
                });
            });

            function showIntendedDescription(theIntendedIcon) {
                let intendentData = serviceData.filter((item) => {
                    if (item.title == theIntendedIcon.querySelector("h4").textContent)
                        return item;
                })[0];

                let description = `<div class="service-description__text">
                <h3>${intendentData.title}</h3>
                <p>${intendentData.description}</p>
            </div>
            <img class="service-description__img" src="${intendentData.img}"></img>`;

                serviceDescription.innerHTML = description;
            }

            function addOpacity(theIntendedIcon) {
                serviceItems.forEach((item) => {
                    if (item != theIntendedIcon) {
                        {
                            item.querySelector("img").style.opacity = 0.7;
                        }
                    } else item.querySelector("img").style.opacity = 1;
                });
            }
        }

        serviceItems.forEach((item) => {
            item.addEventListener("mouseover", (item) => {
                item.target.parentElement.querySelector("img").style.opacity = 1;
            });
        });
        serviceItems.forEach((item) => {
            item.addEventListener("mouseout", (item) => {
                if (item.target.parentElement != theIntendedIcon) {
                    item.target.parentElement.querySelector("img").style.opacity = 0.7;
                }
            });
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const service = new services();
    const servicesData = service.getService();
    const ui = new UI();
    ui.displayServiceIcon(servicesData);
});
//slider