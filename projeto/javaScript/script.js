function toggleDescription(imageElement) {
  const allDescriptions = document.querySelectorAll(".description");

  allDescriptions.forEach((desc) => {
    if (desc !== imageElement.nextElementSibling) {
      desc.classList.remove("show");
    }
  });

  const description = imageElement.nextElementSibling;
  description.classList.toggle("show");
}
