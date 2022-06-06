$(function () {
    const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
    const url2 = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $.get(url, function (data, status) {
        console.log(data);
        console.log(status);

        $("#date").html("Last Update : " + data[0].update_date)
        $("#total_Case").html(numberWithCommas(data[0].total_case))
        $("#new_case").html(numberWithCommas(data[0].new_case))
        $("#total_death").html(numberWithCommas(data[0].total_death))

    });

    $.get(url2, function (data, status) {
        console.log(data);
        console.log(status);

        for (let index = 0; index < data.lenght; index++) {
            const element = array[index];
            const row =
                `<tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`
        }


    });
})