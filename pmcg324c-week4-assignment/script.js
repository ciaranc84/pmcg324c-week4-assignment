
var form = document.getElementsByTagName('form')[0]
var prevData = window.localStorage.getItem('formData');

if (prevData != null) {
  prevData = JSON.parse(prevData);

  form.elements.name.value = prevData.name;
  form.elements.notes.value = prevData.notes;
}

function submitHandler(event) {
  event.preventDefault();

  window.localStorage.removeItem('formData');

  var _data = {
    name: form.elements.name.value,
    notes: form.elements.notes.value
  };

  console.log(_data);

  window.localStorage.setItem('formData', JSON.stringify(_data));
}

form.addEventListener('submit', submitHandler);