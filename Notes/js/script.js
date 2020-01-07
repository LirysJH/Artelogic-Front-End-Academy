/*
<div class="note__box">
  <h4 class="note__label">Label</h4>
  <div class="note__img">
    <img class="pin-img" src="images/pin.png" alt="" />
  </div>
  <div class="note__text">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>
*/

const button = document.getElementById('submit-btn');
button.addEventListener("click", function()
  {
    let info = {
      label: '',
      text: ''
    };

    info.label = document.getElementById('label').value;
    info.text = document.getElementById('note-text').value;

    let content = '<div class="note__box"><h4 class="note__label">' + info.label +
    '</h4><div class="note__img"><img class="pin-img" src="images/pin.png" alt="" /></div>'
    + '<div class="note__text"><p>' + info.text + '</p></div></div>';

    document.getElementById("notes").innerHTML += content;
  });
