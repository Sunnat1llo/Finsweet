function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector(".icon");

    content.classList.toggle("open");
    icon.classList.toggle("rotate");
  }