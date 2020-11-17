var headers = ["id", "name", "status", "species", "type", "gender", "image"];
var table = document.getElementById('table');
var page = 1;

function build() {
    //Запрос api
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/character/", false);
    xhr.send();

    //Записываем полученные данные в переменную 
    var data = JSON.parse(xhr.responseText).results;
    let tableHTML = buildTable(data, headers);
    table.innerHTML = tableHTML;    
}

function clickHandler(page) {
    nextPage = new XMLHttpRequest();
    //                                                              добавляется номер страницы
    nextPage.open("GET", "https://rickandmortyapi.com/api/character/?page=" + page, false);
    nextPage.send();

    var arrayWithObjects = JSON.parse(nextPage.responseText).results;
    
    let tableHTML = buildTable(arrayWithObjects, headers);

    // Удаляем старые данные 
    table.innerHTML = "";
    //Записываем новые
    table.innerHTML = tableHTML;
}

//Функция клик на предыдущую страницу
function clickPrev() {
    clickHandler(--page);
}


function clickNext() {
    clickHandler(++page);

    // перебираем массив с объектами arrayWithObjects с помощью метода map
    // метод map получает в качестве первого параметра элемент нашего массива
    // элемент массива является объектом

    /*
     {
        id:1,
        name:'Morty Smith',
        status:'alive',
        type:'',
        gender:'male',
        image:'url',
        
     }
     
     */
    

    // cделать заголовки таблицы:
    
    // мы берем ключи объекта и из них создаем массив headers
    // перебираем массив headers который содержит заголовки
    // заголовок добавляем в тег "<th>" + header + "</th>"
    // таким образом мы строим заголовок таблицы
    // оборачиваем заголовки в тег "<tr>"

    
    
    
    // заполнить данными таблицу:
    
    // перебираем элементы массива arrayWithObjects 
    // элемент массива с которым мы сейчас работаем имеет примерно такой вид : 
 /*  {
        id:1,
        name:'Morty Smith',
        status:'alive',
        type:'',
        gender:'male',
        image:'url',
        
     }
     */
     
     
     // перебираем снова массив headers методом map 
       // map принимает в качестве первого параметра элемент
      //этот массив содержит заголовки таблицы и имеет вид :
       // ["id","name","status","type","gender","image"]
     // элемент имеет вид : "id"
     // 
     
     
     // arrayWithObjects.id // 1
    

    }


function buildTable(data, headers) {

    let contentHeaders = "";
    let contentBody = "";

    //   Забираю ключи из объекта
    //       let headers = Object.keys(data[0]);
    // если нужны все ключи



    //Создала строку таблицы с помощью конкатенации строк 
    // в результате будет ("<tr>")
    contentHeaders += "<tr>";

    //Перебрала массив заголовков и выбрала из массива заголовок
    headers.map((header) => {

        //добавила динамически заголовок 

        contentHeaders += "<th>" + header + "</th>";

    })

    contentHeaders += "</tr>"

    // Перебрала массив data и выбрала из массива объект elem

    data.map((elem) => {

        contentBody += "<tr>";



        //Перебираю массив
        headers.map((header) => {

            // console.log(elem[header]);

            //Конструкция switch cравнивает блоки для совпадения
            switch (header) {
                case 'image':
                    contentBody += "<td><img src='" + elem.image + "'/></td>";
                    break;
                default:
                    contentBody += "<td>" + elem[header] + "</td>";
                    // console.log(elem[header]);
                    //у объекта elem забираю по ключу заголовка данные 
                    //
                    break;

            }
           
            })
            contentBody += "</tr>"
        })


    

    //Записываю в таблицу HTML
    return contentHeaders + contentBody;

}


// Рефакторинг кода - избавление от дубликата кода
// Выносим в глобальные переменные , то что используется  в нашем случае это headers,table,page
// Cоздаем новую функцию buildTable в которую передаем параметры наши данные и заголовки
// В параметры передаем , то что меняется
