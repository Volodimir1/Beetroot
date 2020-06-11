'use strict'

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.

const $button = `<div style="text-align: center"><input type="button" onclick="callModal()" style="width: 150px;" value="Открыть" /></div>`;
document.body.innerHTML = $button;

