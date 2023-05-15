// accordion containers expand/collapse
document.addEventListener('DOMContentLoaded', () => {
  const sectionHeaders = document.querySelectorAll('section h2');

  sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';

      // Toggle chevron icon
      const chevronIcon = header.querySelector('.fas');
      chevronIcon.classList.toggle('fa-chevron-down');
      chevronIcon.classList.toggle('fa-chevron-up');

        $(".owl-carousel").owlCarousel({
          lazyLoad: true,
          lazyLoadEager: 10,
          items: 5,
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        });
    });
  });

  // Display current month and year in the footer
  setCurrentMonthYear();
});

function setCurrentMonthYear() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const currentDate = `${currentMonth} ${currentYear}`;

  document.getElementById("copyrightdate").innerText = currentDate;
}
