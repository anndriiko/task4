// Функция которая изменяет цвет исходя из атрибута value у option
function changeBackground(event) {
    document.body.style.background = colors;
}
 
function changeColor(event) {
    document.body.style.color = colors;
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'selectColor';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
