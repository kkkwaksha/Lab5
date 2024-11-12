function validateForm(form) {
  const fullName = form.fullName;
  const group = form.group;
  const idCard = form.idCard;
  const birthDate = form.birthDate;
  const email = form.email;

  const fullNameRegex = /^[А-ЯІЇЄҐ'][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  const groupRegex = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
  const idCardRegex = /^[A-Z]{2}\s№\d{6}$/;
  const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function resetBorderColor(inputField) {
    inputField.style.borderColor = "";
  }

  resetBorderColor(fullName);
  resetBorderColor(group);
  resetBorderColor(idCard);
  resetBorderColor(birthDate);
  resetBorderColor(email);

  let isValid = true;

  if (!fullNameRegex.test(fullName.value)) {
    fullName.style.borderColor = "red";
    isValid = false;
  }
  if (!groupRegex.test(group.value)) {
    group.style.borderColor = "red";
    isValid = false;
  }
  if (!idCardRegex.test(idCard.value)) {
    idCard.style.borderColor = "red";
    isValid = false;
  }
  if (!birthDateRegex.test(birthDate.value)) {
    birthDate.style.borderColor = "red";
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "red";
    isValid = false;
  }

  if (isValid) {
    const result = document.getElementById("result");
    result.innerHTML = `
        <h3>Введена інформація:</h3>
        <p><strong>ПІБ:</strong> ${fullName.value}</p>
        <p><strong>Група:</strong> ${group.value}</p>
        <p><strong>ID-card:</strong> ${idCard.value}</p>
        <p><strong>Дата народження:</strong> ${birthDate.value}</p>
        <p><strong>E-Mail:</strong> ${email.value}</p>
      `;
    result.style.display = "block";
  }

  return false;
}
