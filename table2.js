const data = [
    {
        name: "alex",
        surname: "kuharenko",
        age: 26,
        test2: 123
    },
    {
        name: "Olcha",
        surname: "Kunica",
        age: 23,
        test2: 123
    },
    {
        name: "Test",
        surname: null,
        age: null,
        test2: 123
    },
    {
        name: "Test2",
        surname: "test2",
        age: null,
        test2: 123
    }
]



function buildTable() {

    if (data.length > 0) {

        let table = document.getElementById('table');
        let contentHeaders = "";
        let contentBody = "";

        //Забираю ключи из объекта
        let headers = Object.keys(data[0]);


        contentHeaders += "<tr>";

        headers.map((header) => {
            contentHeaders += "<th>" + header + "</th>";
        })

        contentHeaders += "</tr>";

        data.map((item) => {
            contentBody += "<tr>";
            //строку заполняем данными по каждой колонке
            headers.map(field => {
                contentBody += "<td>" + item[field] + "</td>";
            })
            contentBody += "</tr>";

        })

        table.innerHTML = contentHeaders + contentBody;
    }
}




