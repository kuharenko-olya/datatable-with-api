//Объявляем const c двумерным массивом(массив в массиве)
const data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
   
]


//Внутри функции  создается таблица

function buildTable(){
    //Получаем по Id элемент таблицу
    var table = document.getElementById('table');
    //Контент пустой 
    let content = "";
   
    
    //Перебираем массив 
    data.map(function (row){
        
        //Конкатенация строк "" + <tr> 
        //(в результате будет "<tr>")
        
        content+="<tr>"
        
        row.map(function (item){
            // "<td>1" 
            content += "<td>" + item
            
            //"+ </td>"
            
            
        })
        
        content += "</td>"
        
        
    })
    
    
     //Внутри таблицы контент
    table.innerHTML = content;

}