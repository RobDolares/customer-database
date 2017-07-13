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


// abbreviate states

  

  // const customers = {
  //   "results": [{
  //     "gender": "male",
  //     "name": {
  //       "title": "mr",
  //       "first": "curtis",
  //       "last": "ryan"
  //     },
  //     "location": {
  //       "street": "8073 rolling green rd",
  //       "city": "south valley",
  //       "state": "missouri",
  //       "postcode": 99356
  //     },
  //     "email": "curtis.ryan@example.com",
  //     "login": {
  //       "username": "beautifulmouse544",
  //       "password": "beardog",
  //       "salt": "kL9djbKk",
  //       "md5": "67bedf8307958366eb547d6bc8f23a9a",
  //       "sha1": "33f493d4301964dff559850470758e8f4fa78c13",
  //       "sha256": "4a9e0d3fd2cafc6f6a1fc05cd6b35ceb0cfe08fa2b9abc07f3bfad5c977be86c"
  //     },
  //     "dob": "1967-10-29 09:16:09",
  //     "registered": "2007-01-12 19:26:30",
  //     "phone": "(518)-664-5821",
  //     "cell": "(385)-917-9080",
  //     "id": {
  //       "name": "SSN",
  //       "value": "544-97-7715"
  //     },
  //     "picture": {
  //       "large": "https://randomuser.me/api/portraits/men/0.jpg",
  //       "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
  //       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
  //     },
  //     "nat": "US"
  //   }
