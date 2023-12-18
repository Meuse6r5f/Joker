document.addEventListener('DOMContentLoaded', function() {
  tellJoke();
  let btn = document.querySelector('.btn button');
  btn.addEventListener('click', tellJoke);
});

function tellJoke() {
  fetch("https://icanhazdadjoke.com/slack")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const jokeText = data.attachments[0].text;
      document.getElementById("joke").innerText = jokeText;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
