// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Grab all "Book Now" buttons
  const bookButtons = document.querySelectorAll(".book-btn");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // in case any default behavior exists
      // Open mail client with your address and subject "BOOK ME"
      window.location.href =
        "mailto:iamteddjames@gmail.com" +
        "?subject=" +
        encodeURIComponent("BOOK ME");
    });
  });
});
