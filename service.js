import { serviceData } from "./js/servicedata";
// const serviceIconList = document.querySelector(".service-icon__list");
class services {
    getService() {
        console.log(serviceData);
        return serviceData;
    }
}
class UI {
    displayServiceIcon(services) {
        const servicIconItems = "";
        services.forEach((item) => {
            servicIconItems += `<li class="service-icon__item">
            <img src="${item.icon}" class="service-icon__img" />
            <p class="service-icon__title">${item.title}</p>
        </li>`;
        });
        serviceIconList.innerHTML = servicIconItems;
    }
}
document.addEventListener("DOMContetnLoaded", () => {
    const service = new services();
    const servicesData = service.getService();
    const ui = new UI();
    ui.displayServiceIcon(servicesData);
});