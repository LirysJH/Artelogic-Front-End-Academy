
const info = {
  caption: '',
  text: '',
  label: ''
};

const pushToStorage = (key, value) => { return localStorage.setItem(key, value); };

const getFromStorage = (key) => { return localStorage.getItem(key); };

const button = document.getElementById('submit-btn');
button.addEventListener("click", () =>
{
  pushToStorage("caption", document.getElementById('label').value);
  pushToStorage("text", document.getElementById('note-text').value);
  pushToStorage("label", document.getElementById("label-select").value);

  info.caption = getFromStorage("caption");
  info.text = getFromStorage("text");
  info.label = getFromStorage("label");

  const content = `<div class="note__box"><h4 class="note__label">${info.caption}
  </h4><div class="note__img"><img class="pin-img" src="images/pin.png" alt="" /></div>
  <div class="note__text"><p>${info.text}</p></div><div class="label-box"><p>
  #${info.label.toLowerCase()}</p></div></div>`;

  if ( info.label === '' || info.text === '' || info.label === '' )
  {
     alert('Looks like you missed to select some info!');
  }
  else
  {
    document.getElementById("notes").innerHTML += content;

    document.getElementById('label').value =
    document.getElementById('note-text').value =
    document.getElementById('note-text').value = "";
  }

});
