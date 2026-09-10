import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // 1. Portada (Cover)
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // 2. Nombre y Apellido
  let name = variables.name ? variables.name : "Mr";
  let lastName = variables.lastName ? variables.lastName : "Robot";

  // 3. Rol
  let role = variables.role ? variables.role : "Hacker";

  // 4. Ciudad y País
  let city = variables.city ? variables.city : "New York";
  let country = variables.country ? variables.country : "USA";

  // 5. Posición de redes sociales (position-left o position-right)
  let socialMediaPosition = variables.socialMediaPosition
    ? variables.socialMediaPosition
    : "position-right";

  // 6. Redes sociales
  let twitter = variables.twitter ? variables.twitter : "4geeksacademy";
  let github = variables.github ? variables.github : "4geeksacademy";
  let linkedin = variables.linkedin ? variables.linkedin : "4geeksacademy";
  let instagram = variables.instagram ? variables.instagram : "4geeksacademy";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://raw.githubusercontent.com/syntax-samurai/fsociety/master/preview.png",
    // this is the url for the profile avatar
    avatarURL:
      "https://static.wikia.nocookie.net/mrrobot/images/8/81/Season_4_Mr._Robot.jpg/revision/latest?cb=20240127174830",
    // social media bar position (position-left or position-right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
