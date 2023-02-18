// Функция которая изменяет цвет исходя из атрибута value у option
function changeBackground(event) {
    document.body.style.background = value;
}
 
function changeColor(event) {
    document.body.style.color = value;
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'change';
// Создаем события на тег select.
document.addEventListener('change',e => console.log(e.target))
select_element.addEventListener('change', function() {
    console.log( colors [this.value] );
});
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
