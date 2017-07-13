let main = document.querySelector("#dir-container");
let results = customers.results;
let template = ("");

for (var i = 0; i < results.length; i++) {
  template += `
    <div class="user-box">
      <div class="img-container">
        <img src=${results[i].picture.large}>
      </div>
      <h3><span>${results[i].name.first} ${results[i].name.last}</span></h3>
      <a class="email" href ="mailto:${results[i].email}">${results[i].email}</a>
      <address>
        ${results[i].location.street}</br>
        ${results[i].location.city}, ${results[i].location.state}, ${results[i].location.postcode}</br>
      </address>
      <a class="phone" href="tel:${results[i].phone}">${results[i].phone}</a>
      <p class="ssn">${results[i].id.value}</p>
    </div>
  `
}

main.innerHTML = template;
