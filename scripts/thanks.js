const contactInfo = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () => {
  const results = document.querySelector('#results');

  const fullName = contactInfo.get('firstName') || 'No name provided';
  const phone = contactInfo.get('phone') || 'No phone provided';
  const email = contactInfo.get('email') || 'No email provided';
  const clientType = contactInfo.get('membership') === 'empresa' ? 'Empresa (por mayor)' : 'Persona particular';
  const timestamp = contactInfo.get('timestamp') || 'No timestamp available';

  results.innerHTML = `
    <h2>Thank you, ${fullName}!</h2>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Client Type:</strong> ${clientType}</p>
    <p><strong>Submitted on:</strong> ${timestamp}</p>
  `;
});
