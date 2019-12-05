
let arrayConsultas = []

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem("Consulta 0") == null) {
        document.getElementById("1").innerHTML = "Ainda não foi marcada nenhuma consulta."
    } else {
        let consulta = JSON.parse(localStorage.getItem("Consulta " + i))

        if (consulta != null) {
            arrayConsultas.push(consulta)
            let dados = `Dados do(a) Paciente:<br><br>
              Nome: ${arrayConsultas[i].paciente.nome}<br>
              Sexo: ${arrayConsultas[i].paciente.sexo}<br>
              Data de Nascimento: ${arrayConsultas[i].paciente.dataNascimento.dia}/${arrayConsultas[i].paciente.dataNascimento.mes}/${arrayConsultas[i].paciente.dataNascimento.ano}<br>
              CPF: ${arrayConsultas[i].paciente.cpf}<br>
              Nº do Convênio: ${arrayConsultas[i].paciente.convenio}<br><br>
              Dados do(a) Médico(a): <br><br>
              Nome: ${arrayConsultas[i].medico.nome}<br>
              Especialidade: ${arrayConsultas[i].medico.especialidade}<br>
              CRM: ${arrayConsultas[i].medico.crm}<br>
              Sexo: ${arrayConsultas[i].medico.sexo}<br><br>
              Dados da Consulta:<br><br>
              Data: ${arrayConsultas[i].consulta.data.dia}/${arrayConsultas[i].consulta.data.mes}/${arrayConsultas[i].consulta.data.ano}<br>
              Hora: ${arrayConsultas[i].consulta.hora}<br>
              Histórico: ${arrayConsultas[i].consulta.historico}<br>
              Agendamento Realizado em: ${arrayConsultas[i].protocolo}`

            document.getElementById(i + 1).innerHTML = dados


        }

    }

}

for (let i = arrayConsultas.length + 1; i < 11; i++) {

    document.getElementById(i).style.display = "none"
}

