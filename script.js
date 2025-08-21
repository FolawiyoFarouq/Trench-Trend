// Show main site after loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.display = "none";
  content.classList.remove("hidden");
});

// WhatsApp Button
document.getElementById("whatsappBtn").addEventListener("click", () => {

  window.location.href = "https://wa.me/2347080779562";
});
