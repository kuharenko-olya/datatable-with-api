// Получаем элемент ol по id
var list = document.getElementById('list');


//Обработчик принимает один параметр - одно событие
function Update(e) {
    //Объявила переменную , которая указывает , что e.currentTarget.liID - button-1
    //Объявила переменную , которая указывает ,
    ///    что e.currentTarget.liLastElem - button = liLast 
    let ID = e.currentTarget.liID;
    let lastLi = e.currentTarget.liLastElem;

    //Получаем значение span в переменную
    let span = document.querySelector('#item-' + ID + ' span');
    let value = span.innerText;
    //Удаляем элемент span
    span.remove();
    //Создаем новый элемент
    let input = document.createElement('input');
    //Записываем значение span в input
    input.value = value;

    // ---------------------------------------------
    // Новое свойство liLastElem = liLast
    input.liLastElem = lastLi;

    // ---------------------------------------------

    lastLi.append(input);
    //Добавила input фокус
    input.focus();

    //Навешаем обработчик на событие keydown на input
    input.addEventListener('keydown', function (event) {
        // если нажата клавиша enter
        if (event.keyCode == 13) {

            let input = event.currentTarget;

            //Объявляем переменную и достаем значение из inputa
            let valueInput = input.value;
            // Если нет значения в inpute элемент удаляется
            if (!valueInput) {
                input.liLastElem.remove();
            }
            input.remove();
            //Cоздаем span
            let new_span = document.createElement('span');
            //Значение input записали в span
            new_span.innerText = valueInput;
            //Через атрибут сurrentTarget получаем доступ к liLastElem
            input.liLastElem.prepend(new_span);

        }

    })

}


function DeleteElem(e) {
    // Удаляет родителя - li кнопки button-delete
    e.currentTarget.parentElement.remove();

}

//Навешаем обработчик на событие keydown нажатие на клавишу enter
document.addEventListener('keydown', function (e) {
    //Объявляем переменную val и присваиваем ей значение инпута
    var val = document.getElementById('input').value;

    //Проверка условия , что val не пустой
    if (e.keyCode == 13 && val) {
        //Объявляем переменную,которая считает количество элементов li в элементе 
        // родителе ol с идентификатором list
        var countIdNum = document.querySelector('#list').children.length + 1;


        //Создала элемент
        var liLast = document.createElement('li');
        //Добавила id элементу
        liLast.setAttribute("id", "item-" + countIdNum);

        //Добавила элемент span в li .
        liLast.innerHTML = `<span>${val}</span>`;
        list.append(liLast);
        //Очищаю input
        document.getElementById('input').value = '';
        //Создаю элемент кнопку
        var button = document.createElement('button');
        //

        button.innerText = 'Update';
        //Устанавливаю атрибут id для кнопки
        button.setAttribute("id", "button-" + countIdNum);
        //Внутрь liLast (li) добавила кнопку
        liLast.append(button);

        //Новое свое свойство liID для кнопки = значению переменной countIdNum 
        button.liID = countIdNum;

        // ---------------------------------------------

        button.liLastElem = liLast;

        // --------------------------------------------- 
        //Новое свое свойство liLastElem для кнопки = 
        // значению переменной liLast

        //Cоздала кнопку удаления
        var buttonDelete = document.createElement('button');
        //Внутри элемента кнопки будет такой текст:delete
        buttonDelete.innerText = 'Delete';
        liLast.append(buttonDelete);


        //Навешаем обработчик update на событие onclick на кнопку,но не вызывая
        // обработчик сработает когда произойдет это событие.
        button.onclick = Update;
        buttonDelete.onclick = DeleteElem;
    }
});


















