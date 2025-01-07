import './style.css';
import { setupTranslator } from './src/translator.js';
import { createTranslatorUI } from './src/components/TranslatorUI.js';

document.querySelector('#app').innerHTML = createTranslatorUI();
setupTranslator();