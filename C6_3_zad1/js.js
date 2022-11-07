const checkbutton = document.querySelector('.checkbutton');
const imgChecked = document.querySelector('.checked');
const imgNotChecked = document.querySelector('.not-checked');

const showCheckbutton = () => {
  imgChecked.classList.toggle('visible');
  imgNotChecked.classList.toggle('visible');
  if (!checkbox.checked) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

}


imgChecked.addEventListener('click', showCheckbutton);
imgNotChecked.addEventListener('click', showCheckbutton)