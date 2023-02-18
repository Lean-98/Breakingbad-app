import './style.css'
import { BreakingbadApp } from './src/breakingbad/breaking-bad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://breakingbadquotes.xyz/" target="_blank">
      <img src="./public/assets/images/danger-heinserberg.jpg" class="logo" alt="Danger Heinserberg logo" />
    </a>
    <a href="https://www.imdb.com/title/tt0903747/" target="_blank">
      <img src="./public/assets/images/breakingbad-01.png" class="logo vanilla" alt="Breakingbad logo" />
    </a>
    <h1 id="app-title"></h1>
    <div class="card">
      
    </div>

  </div>
`;

const element = document.querySelector('.card');

BreakingbadApp( element );
