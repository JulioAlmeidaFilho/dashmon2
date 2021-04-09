
function filtrar(){

    window.alert("http://localhost:8080/eventos/" + 
    document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").value)

    fetch("http://localhost:8080/eventos/" + 
    document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").value)
        .then(res => res.json())
        .then(res => {
            var tabela =
            "<table border='1' align='center'>" +
            "<tr>" +
            "<th>Data Evento</th>" + 
            "<th>Nome Alarme</th>" + 
            "<th>Descrição Alarme</th>" +
            "<th>Hostname do Equipamento</th>" +
            "<th>IP do Equipamento</th>" + 
            "</tr>";
            // preencher a tabela (for)

            for (cont=0;cont<res.length;cont++){
                tabela+=
                "<tr>"+
                "<td>"+ res[cont].data + "</td>" +
                "<td>"+ res[cont].alarme.nome + "</td>" +
                "<td>"+ res[cont].alarme.descricao + "</td>" +
                "<td>"+ res[cont].equip.hostname + "</td>" +
                "<td>"+ res[cont].equip.ipaddr + "</td>" +
                "</tr>"
            }

            tabela+="</table>";
            document.getElementById("resultado").innerHTML = tabela;
        });


}
