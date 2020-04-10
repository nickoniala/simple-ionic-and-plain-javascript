const courseNameInput = document.querySelector('#input-name');
const courseRatingInput = document.querySelector('#input-rating');
const cancelBtn = document.querySelector('#btn-cancel');
const submitBtn = document.querySelector('#btn-submit');
const coursesList = document.querySelector('#courses-list');

const clear = () => {
  courseNameInput.value = '';
  courseRatingInput.value = '';
};

const errorAlert = () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Error';
  alert.message = 'Invalid input(s)';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
};

submitBtn.addEventListener('click', () => {
  const enteredCourseName = courseNameInput.value;
  const enteredCourseRating = courseRatingInput.value;

  if (
    enteredCourseName.trim().length <= 0 ||
    enteredCourseRating.trim().length <= 0 ||
    enteredCourseRating <= 0 ||
    enteredCourseRating > 5
  ) {
    errorAlert();
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<b>${enteredCourseName}:</b>&nbsp;${enteredCourseRating}/5`;
  coursesList.appendChild(newItem);
  clear();
});

cancelBtn.addEventListener('click', clear);
