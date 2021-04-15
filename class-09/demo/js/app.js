// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// create a kitten factory aka constructor function
function Kitten(name, photo, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.photo = photo;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
}

// global function that gives us a random age 
function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add a get age prototype method
Kitten.prototype.getAge = function() {
  this.age = randomAge(3, 12) + ' months'
}

Kitten.prototype.meow = function() {
  console.log('Meow!');
}

const kittenDivElem = document.getElementById('kittenProfiles');
Kitten.prototype.render = function() {
//   <!-- <article>
  const kittenArticleElem = document.createElement('article');
  kittenDivElem.appendChild(kittenArticleElem);
  //   <h2></h2>
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  kittenArticleElem.appendChild(h2Elem);
  // <img></img>
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', this.photo);
  kittenArticleElem.appendChild(imgElem);
//   <p></p>
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${this.age}`
  kittenArticleElem.appendChild(pElem)
  const pElem2 = document.createElement('p');
  pElem2.textContent = `interests:`
  kittenArticleElem.appendChild(pElem2)
//   <ul>
  const ulElem = document.createElement('ul');
  kittenArticleElem.appendChild(ulElem)
//     <li></li>
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  const tableElem = document.createElement('table');
  kittenArticleElem.appendChild(tableElem);
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);
  const thElem1 = document.createElement('th');
  thElem1.textContent = 'KIDS';
  trElem.appendChild(thElem1);
  const thElem2 = document.createElement('th');
  thElem2.textContent = 'DOGS';
  trElem.appendChild(thElem2);
  const thElem3 = document.createElement('th');
  thElem3.textContent = 'CATS';
  trElem.appendChild(thElem3);

  // new row for object values
  const trElem2 = document.createElement('tr');
  tableElem.appendChild(trElem2);
  // add td for each value
  const tdElem1 = document.createElement('td');
  tdElem1.textContent = this.isGoodWithKids;
  trElem2.appendChild(tdElem1);

  const tdElem2 = document.createElement('td');
  tdElem2.textContent = this.isGoodWithDogs;
  trElem2.appendChild(tdElem2);

  const tdElem3 = document.createElement('td');
  tdElem3.textContent = this.isGoodWithCats;
  trElem2.appendChild(tdElem3);

}

let frankie = new Kitten('Frankie', './images/frankie.jpeg', ['lazers', 'mice', 'string'], true, false, true);


const jumper = new Kitten('jumper', './images/jumper.jpeg', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true);

const serena = new Kitten('serena', './images/serena.jpeg', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true);



frankie.getAge();
jumper.getAge();
serena.getAge();
frankie.render();
jumper.render();
serena.render();