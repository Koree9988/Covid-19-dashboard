$(function() {
    const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
    const url2 = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $.get(url, function(data, status) {
        console.log(data);
        console.log(status);

        $("#date").html("Last Update : " + data[0].update_date)
        $("#total_Case").html(numberWithCommas(data[0].total_case))
        $("#new_case").html(numberWithCommas(data[0].new_case))
        $("#total_death").html(numberWithCommas(data[0].total_death))

    });

    $.get(url2, function(data2, status2) {
        console.log(data2);
        console.log(status2);

        for (let index = 0; index < data2.length; index++) {
            const element = data2[index];
            console.log(data2[0].province);

            const row =
                `<tr>
                <th scope="row">${index+1}</th>
                <td>${element.province}</td>
                <td>${element.new_case}</td>
                <td>${element.total_casee}</td>
                </tr>`

            $("#list").append(row)
        }


    });
})