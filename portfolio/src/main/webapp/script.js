// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Fetch hard-coded string in servlet and display in page.
 */

async function hello() {
    const responseFromHello = await fetch('/hello');
    const jsonFromHello = await responseFromHello.json();

    const helloContainer = document.getElementById('hello-container');
    const num = Math.floor(Math.random() * jsonFromHello.length);
    const songRec = jsonFromHello[num];
    helloContainer.innerText = songRec;
}

/**
 * Adds a random piece of information to the page.
 */

function addRandomInformation() {
    const informations =
        ['I like cats!', 'I was born in Tianjin, China!', 'I play badminton!', 'I like philosophy!', 'I grew up in the Greater Toronto Area!'];
    const images = 
        ["images/oat.jpg", "images/tianjin.png", "images/badminton.png", "images/philosophy.avif", "images/gta.webp"];
  
    // Pick a random greeting.
    let number = Math.floor(Math.random() * informations.length);
    const info = informations[number];
    const image = images[number];
  
    // Add it to the page.
    const img = document.createElement("img");
    img.src = image;
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = info;
    greetingContainer.appendChild(img);
  }
  
  function displayMessage() {
    fetch('/list-contacts').then(response => response.json()).then((contacts) => {
        const contactListElement = document.getElementById('contact-list');
        contacts.forEach((contact) => {
          contactListElement.appendChild(createMessageElement(contact));
        })
      });
  }

  function createMessageElement(contact) {
    const contactElement = document.createElement('li');
    contactElement.className = 'contact';
  
    const nameElement = document.createElement('span');
    nameElement.innerText = contact.name;
  
    contactElement.appendChild(nameElement);
    return contactElement;
  }
  