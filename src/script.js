const linkForm = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errorMsg = document.getElementById('err-msg');

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function validateURL(url) {
  // Remove whitespace
  url = url.trim();

  // Check if empty
  if (url === '') {
    return false;
  }

  // Regular expression for URL validation
  const urlPattern =
    /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d-._~:/?#[\]@!$&'()*+,;=%]*)?$/i;

  // Test the URL against the pattern
  return urlPattern.test(url);
}

const formSubmit = function (e) {
  e.preventDefault();

  if (input.value === '') {
    errorMsg.textContent = 'Please fill the input field';
    input.classList.add('border-red-500');
  } else if (!validateURL(input.value)) {
    errorMsg.textContent = 'Please fill the input field';
    input.classList.add('border-red-500');
  } else {
    errorMsg.textContent = '';
    input.classList.remove('border-red-500');
    alert('success');
  }
};

// Toggle mobile menu
const navToggle = function () {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
};

// Attaching Event Listener
linkForm.addEventListener('submit', formSubmit);
btn.addEventListener('click', navToggle);
