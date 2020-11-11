function build() {

    //Запрос api
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/character/", false);
    xhr.send();
    console.log(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));


    //Массив с полученным результатом
    var data = JSON.parse(xhr.responseText).results;

    let table = document.getElementById('table');
    let contentHeaders = "";
    let contentBody = "";

    //   Забираю ключи из объекта
    //       let responses = Object.keys(data[0]);
    // не в этом случае


    //Объявила переменную с массивом нужных полей
    var fields = ["id", "name", "status", "species",
                              "type", "gender", "image"];



    //Создала строку таблицы с помощью конкатенации строк 
    // в результате будет ("<tr>")
    contentHeaders += "<tr>";

    //Перебрала массив полей и выбрала из массива поле
    fields.map((field) => {

        //добавила динамически заголовок поля

        contentHeaders += "<th>" + field + "</th>";

    })

    contentHeaders += "</tr>"

    // Перебрала массив data и выбрала из массива значение-данные

    data.map((value) => {

        contentBody += "<tr>";



        //Перебираю массив
        fields.map((field) => {


            //Cравнивает блоки для совпадения
            switch (field) {
                case 'image':
                    contentBody += "<td><img src='" + value.image + "'/></td>";
                    break;
                default:
                    contentBody += "<td>" + value[field] + "</td>";
                    // console.log(value[field]);
                    //Cколько полей было выбрано столько и строк данных
                    //
                    break;

            }

        })

        contentBody += "</tr>";


    })

    //Записываю в HTMl в таблицу
    table.innerHTML = contentHeaders + contentBody;
}



function clickNext() {

    nextPage = new XMLHttpRequest();
    nextPage.open("GET", "https://rickandmortyapi.com/api/character/?page=2", false);
    nextPage.send();
    console.log(nextPage.responseText);
    console.log(JSON.parse(nextPage.responseText));

    var arrayWithObjects = JSON.parse(nextPage.responseText).results;
    let table = document.getElementById('table');


    let contentHeaders = "";
    let contentBody = "";

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
     
     
     // перебираем снова массив headers методом map 
        map принимает в качестве первого параметра элемент
      этот массив содержит заголовки таблицы и имеет вид :
        ["id","name","status","type","gender","image"]
     // элемент имеет вид : "id"
     // 
     
     
     // arrayWithObjects.id // 1
        