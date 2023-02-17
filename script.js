// Функция которая изменяет цвет исходя из атрибута value у option
function changeBackground(selectColor) {
    document.body.style.background = selectColor;
}
 
function changeColor(event) {
    document.body.style.color = "yellow";
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = '';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
