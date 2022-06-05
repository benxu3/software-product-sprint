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
  