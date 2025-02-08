
function getHorarios(dia, body, id) {
    firebase.firestore().collection("agenda").doc(dia).get().then((array) => {

        $(body).append(
            `<ul class="list-group" id="${id}">
            </ul><br>`
        );
        
        var horarios = Object.entries(array.data());
        horarios.sort();

        for (let i = 0; i < horarios.length; i++) {
            let bkColor = ""
            let situacao = ""
            let descricao = ""
            if (horarios[i][1][1] === "A") {
                bkColor = "#65cc7f"
                situacao = horarios[i][1][2]
                descricao = ""
            } else if (horarios[i][1][1] === "U") {
                bkColor = "#ce677d"
                situacao = horarios[i][1][2]
                descricao = ""
            } else {
                bkColor = "#7785ff"
                situacao = horarios[i][1][1]
                descricao = horarios[i][1][2]
            }
            $(`#${id}`).append(
                `<li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <b>${horarios[i][0]} - </b>
                        ${descricao}
                        <span class="badge bg-secondary" style="background-color: ${bkColor} !important; font-weight: normal; font-size: medium;">${situacao}</span>
                    </div>
                </li>`
            )
        };
    });
}

//Segunda
getHorarios("segunda", "#bodySeg", "listSeg")
//Terca
getHorarios("terca", "#bodyTer", "listTer")
//Quarta
getHorarios("quarta", "#bodyQua", "listQua")
//Quinta
getHorarios("quinta", "#bodyQui", "listQui")
//Sexta
getHorarios("sexta", "#bodySex", "listSex")
//Sábado
getHorarios("sabado", "#bodySab", "listSab")
//Domingo
getHorarios("domingo", "#bodyDom", "listDom")