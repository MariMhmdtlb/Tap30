const navToggle = document.querySelector(".navigation__toggle");

navToggle.addEventListener("click", () => {
    const navigation = navToggle.parentElement;
    navigation.classList.toggle("change");
});