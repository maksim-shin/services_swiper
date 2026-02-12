document.addEventListener("DOMContentLoaded", function () {

  const headers = document.querySelectorAll(".services__table thead th");
  const tableRows = document.querySelectorAll(".services__table tbody tr");
  const wrapper = document.querySelector(".services-swiper .swiper-wrapper");

  tableRows.forEach(row => {
    const cells = row.querySelectorAll("td");

    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
  <div class="services__row">

    <div class="services__cell">
      <div class="services__label">${headers[0].textContent}</div>
      <div class="services__value">${cells[0].textContent}</div>
    </div>

    <div class="services__cell">
      <div class="services__label">${headers[1].textContent}</div>
      <div class="services__value">${cells[1].textContent}</div>
    </div>

    <div class="services__cell services__cell--period">
      <div class="services__period-block">
        <div>
          <div class="services__label">${headers[2].textContent}</div>
          <div class="services__value">${cells[2].textContent}</div>
        </div>

        <div class="services__button">
          ${cells[3].innerHTML}
        </div>
      </div>
    </div>

  </div>
`;




    wrapper.appendChild(slide);
  });

  new Swiper(".services-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
