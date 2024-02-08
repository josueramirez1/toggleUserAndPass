const passwords = document.querySelectorAll('[type="password"]');

document.addEventListener("click", (e) => {
  if (!e.target.matches('[type="checkbox"]')) return;

  for (let password of passwords) {
    if (
      e.target.checked &&
      e.target.closest("form") === password.closest("form")
    ) {
      password.type = "text";
    } else if (
      !e.target.checked &&
      e.target.closest("form") === password.closest("form")
    ) {
      password.type = "password";
    }
  }
});
