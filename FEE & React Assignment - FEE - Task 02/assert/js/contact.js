const form = document.getElementById("feedbackForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  alert(`Thanks, ${name || "friend"}! Your feedback has been sent.`);
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
