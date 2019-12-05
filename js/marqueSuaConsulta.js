
class Paciente {
  constructor() {
    this.nome = null
    this.cpf = null
    this.sexo = null
    this.dadosNascimento = null
    this.convenio = null
  }

  setNome(p_nome) {

    let nome = String(document.getElementById(p_nome).value).trim()

    if (nome == "") {

      document.getElementById("label-nome").style.color = "red";
      document.getElementById("label-nome").innerHTML = "* Este campo deve ser preenchido";
      document.getElementById(p_nome).style.border = "2px solid red";

      this.nome = null

    } else {

      let arrayCaracteres = nome.split("")

      for (let i = 0; i < arrayCaracteres.length; i++) {

        if (isNaN(parseInt(arrayCaracteres[i])) === false) {

          document.getElementById("label-nome").style.color = "red";
          document.getElementById("label-nome").innerHTML = "* Este campo não aceita números";
          document.getElementById(p_nome).style.border = "2px solid red";

          this.nome = null
          break

        } else {

          document.getElementById("label-nome").style.color = "#00ceaf";
          document.getElementById("label-nome").innerHTML = "";
          document.getElementById(p_nome).style.border = "2px solid #00ceaf";

          this.nome = nome

        }
      }
    }
    console.log("Nome: " + this.nome)
  }
  getNome() {
    return this.nome
  }

  setCpf(p_cpf) {
    let cpf = Number((document.getElementById(p_cpf).value).trim())
    let cpfLength = (document.getElementById(p_cpf).value).trim().toString().length


    if (cpf === 0) {

      document.getElementById("label-cpf").style.color = "red";
      document.getElementById("label-cpf").innerHTML = "* Este campo deve ser preenchido";
      document.getElementById(p_cpf).style.border = "2px solid red";

      this.cpf = null

    } else if (isNaN(cpf) === true) {

      document.getElementById("label-cpf").style.color = "red";
      document.getElementById("label-cpf").innerHTML = "* Este campo aceita apenas números";
      document.getElementById(p_cpf).style.border = "2px solid red";

      this.cpf = null

    } else if (cpfLength !== 11) {

      document.getElementById("label-cpf").style.color = "red";
      document.getElementById("label-cpf").innerHTML = "* Este campo deve ter 11 dígitos";
      document.getElementById(p_cpf).style.border = "2px solid red";

      this.cpf = null

    } else if (isNaN(cpf) === false && cpfLength === 11) {

      document.getElementById("label-cpf").style.color = "#00ceaf";
      document.getElementById("label-cpf").innerHTML = "";
      document.getElementById(p_cpf).style.border = "2px solid #00ceaf";

      this.cpf = cpf

    }
    console.log("CPF: " + this.cpf)
  }
  getCpf() {
    return this.cpf
  }

  setSexo(p_sexo) {

    let sexo = document.getElementById(p_sexo).value

    if (sexo === "null") {

      document.getElementById("label-sexo").style.color = "red";
      document.getElementById("label-sexo").innerHTML = "* Selecione uma opção válida";
      document.getElementById(p_sexo).style.border = "2px solid red";

      this.sexo = null

    } else {

      document.getElementById("label-sexo").style.color = "#00ceaf";
      document.getElementById("label-sexo").innerHTML = "";
      document.getElementById(p_sexo).style.border = "2px solid #00ceaf";

      this.sexo = sexo
    }
    console.log("Sexo: " + this.sexo)
  }
  getSexo() {
    return this.sexo
  }

  setDadosNasc(p_dataN) {

    let dataNasc = document.getElementById(p_dataN).value

    let arrayDataNasc = dataNasc.split("-")

    let diaNasc = arrayDataNasc[2]
    let mesNasc = arrayDataNasc[1] - 1
    let anoNasc = arrayDataNasc[0]

    let dataNascEmDiasAprox = ((Number(anoNasc) * 365) + (Number(mesNasc) * 30) + Number(diaNasc))

    let dataAtual = new Date()

    let diaAtual = dataAtual.getDate()
    let mesAtual = dataAtual.getMonth()
    let anoAtual = dataAtual.getFullYear()

    let dataAtualEmDiasAprox = ((Number(anoAtual) * 365) + (Number(mesAtual) * 30) + Number(diaAtual))

    let idadeMax = (130 + 1) * 365

    if (dataAtualEmDiasAprox < dataNascEmDiasAprox) {

      document.getElementById("label-dataNasc").style.color = "red";
      document.getElementById("label-dataNasc").innerHTML = "* Você não pode ter nascido no futuro...";
      document.getElementById(p_dataN).style.border = "2px solid red";

      this.dadosNascimento = null

    } else if ((dataAtualEmDiasAprox - dataNascEmDiasAprox) > idadeMax) {

      document.getElementById("label-dataNasc").style.color = "red";
      document.getElementById("label-dataNasc").innerHTML = "* Selecione uma data de nascimento válida";
      document.getElementById(p_dataN).style.border = "2px solid red";

      this.dadosNascimento = null

    } else if (anoNasc < 1800) {

      document.getElementById("label-dataNasc").style.color = "red";
      document.getElementById("label-dataNasc").innerHTML = "* Selecione uma data de nascimento válida";
      document.getElementById(p_dataN).style.border = "2px solid red";

      this.dadosNascimento = null

    } else {

      document.getElementById("label-dataNasc").style.color = "#00ceaf";
      document.getElementById("label-dataNasc").innerHTML = "";
      document.getElementById(p_dataN).style.border = "2px solid #00ceaf";

      this.dadosNascimento = {
        "dia": String(diaNasc),
        "mes": String(mesNasc + 1),
        "ano": String(anoNasc)
      }
    }

    console.log("Data de Nascimento: " + JSON.stringify(this.dadosNascimento))
    //console.log("Dia de Nascimento: " + diaNasc)
    //console.log("Mês de Nascimento: " + mesNasc)
    //console.log("Ano de Nascimento: " + anoNasc)
    //console.log(dataNascEmDiasAprox)
    //console.log(dataAtualEmDiasAprox)
  }
  getDadosNasc() {
    return this.dadosNascimento
  }

  setConvenio(p_convenio) {
    let convenio = Number((document.getElementById(p_convenio).value).trim())
    let convenioLength = (document.getElementById(p_convenio).value).trim().toString().length


    if (convenio === 0) {

      document.getElementById("label-convenio").style.color = "red";
      document.getElementById("label-convenio").innerHTML = "* Este campo deve ser preenchido";
      document.getElementById(p_convenio).style.border = "2px solid red";

      this.convenio = null

    } else if (isNaN(convenio) === true) {

      document.getElementById("label-convenio").style.color = "red";
      document.getElementById("label-convenio").innerHTML = "* Este campo aceita apenas números";
      document.getElementById(p_convenio).style.border = "2px solid red";

      this.convenio = null

    } else if (convenioLength !== 10) {

      document.getElementById("label-convenio").style.color = "red";
      document.getElementById("label-convenio").innerHTML = "* Este campo deve ter 10 dígitos";
      document.getElementById(p_convenio).style.border = "2px solid red";

      this.convenio = null

    } else if (isNaN(convenio) === false && convenioLength === 10) {

      document.getElementById("label-convenio").style.color = "#00ceaf";
      document.getElementById("label-convenio").innerHTML = "";
      document.getElementById(p_convenio).style.border = "2px solid #00ceaf";

      this.convenio = convenio

    }
    console.log("Nº o Convenio: " + this.convenio)
  }
  getConvenio() {
    return this.convenio
  }


}

class Consulta extends Paciente {
  constructor() {

    super()

    this.historico = null
    this.dadosConsulta = null
    this.hora = null
    this.medicos = []
    this.medico = null
  }

  setHistorico(p_historico) {

    let historico = document.getElementById(p_historico).value

    if (historico === "null") {

      document.getElementById("label-historico").style.color = "red";
      document.getElementById("label-historico").innerHTML = "* Selecione uma opção válida";
      document.getElementById(p_historico).style.border = "2px solid red";

      this.historico = null
    } else {

      document.getElementById("label-historico").style.color = "#00ceaf";
      document.getElementById("label-historico").innerHTML = "";
      document.getElementById(p_historico).style.border = "2px solid #00ceaf";

      this.historico = historico
    }
    console.log("Histórico: " + this.historico)
  }
  getHistorico() {
    return this.historico
  }


  setDadosConsulta(p_dataC) {

    let dataConsu = document.getElementById(p_dataC).value

    let arrayDataConsu = dataConsu.split("-")

    let diaConsu = arrayDataConsu[2]
    let mesConsu = arrayDataConsu[1] - 1
    let anoConsu = arrayDataConsu[0]

    let dataConsuEmDiasAprox = ((Number(anoConsu) * 365) + (Number(mesConsu) * 30) + Number(diaConsu))

    let dataAtual = new Date()

    let diaAtual = dataAtual.getDate()
    let mesAtual = dataAtual.getMonth()
    let anoAtual = dataAtual.getFullYear()

    let dataAtualEmDiasAprox = ((Number(anoAtual) * 365) + (Number(mesAtual) * 30) + Number(diaAtual))

    let periodoAgend = 1 * 365

    if (dataAtualEmDiasAprox > dataConsuEmDiasAprox) {

      document.getElementById("label-consulta").style.color = "red";
      document.getElementById("label-consulta").innerHTML = "* Você não pode marcas consultas nessa data";
      document.getElementById(p_dataC).style.border = "2px solid red";

      this.dadosConsulta = null

    } else if (dataAtualEmDiasAprox == dataConsuEmDiasAprox) {

      document.getElementById("label-consulta").style.color = "red";
      document.getElementById("label-consulta").innerHTML = "* Marque sua consulta com pelo menos 12 horas de antecedência";
      document.getElementById(p_dataC).style.border = "2px solid red";

      this.dadosConsulta = null

    } else if ((dataConsuEmDiasAprox - dataAtualEmDiasAprox) > periodoAgend) {

      document.getElementById("label-consulta").style.color = "red";
      document.getElementById("label-consulta").innerHTML = "* Você não pode marcar consultas com mais de um ano de antecedência";
      document.getElementById(p_dataC).style.border = "2px solid red";

      this.dadosConsulta = null

    } else if (anoConsu < anoAtual) {

      document.getElementById("label-consulta").style.color = "red";
      document.getElementById("label-consulta").innerHTML = "* Você não pode marcas consultas nessa data";
      document.getElementById(p_dataC).style.border = "2px solid red";

      this.dadosConsulta = null

    } else {

      document.getElementById("label-consulta").style.color = "#00ceaf";
      document.getElementById("label-consulta").innerHTML = "";
      document.getElementById(p_dataC).style.border = "2px solid #00ceaf";

      this.dadosConsulta = {
        "dia": String(diaConsu),
        "mes": String(mesConsu + 1),
        "ano": String(anoConsu)
      }
    }

    console.log("Data da Consulta: " + JSON.stringify(this.dadosConsulta))
  }
  getDadosConsulta() {
    return this.dadosConsulta
  }

  setHora(p_hora) {
    let hora = document.getElementById(p_hora).value

    if (hora === "null") {

      document.getElementById("label-hora").style.color = "red";
      document.getElementById("label-hora").innerHTML = "* Selecione uma opção válida";
      document.getElementById(p_hora).style.border = "2px solid red";

      this.hora = null

    } else {

      document.getElementById("label-hora").style.color = "#00ceaf";
      document.getElementById("label-hora").innerHTML = "";
      document.getElementById(p_hora).style.border = "2px solid #00ceaf";

      this.hora = hora
    }
    console.log("Hora da Consulta: " + this.hora)
  }
  getHora() {
    return this.hora
  }


  setarMedicos() {

    let selectMedicos = document.getElementById("medicos")

    if (localStorage.getItem("Médico 0") == null) {

      document.getElementById("crm-medico").innerHTML = "Infelizmente ainda não temos nenhum médico em nossa plataforma"
      document.getElementById("crm-medico").style.color = "red"
      console.log("0 médicos cadastrados")
    } else {

      for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("Médico " + i)) {

          let medicos = JSON.parse(localStorage.getItem("Médico " + i))
          this.medicos.push(medicos)

          let option = document.createElement("option")
          option.text = String(this.medicos[i].nome)
          option.value = String(i)
          selectMedicos.add(option, selectMedicos[i + 50])

          console.log(this.medicos)
          console.log(option.value)
        }

      }

    }

  }

  setMedico(p_medicos) {

    let medicoSel = document.getElementById(p_medicos).value

    if (localStorage.getItem("Médico 0") == null) {

      document.getElementById("crm-medico").innerHTML = "Infelizmente ainda não temos nenhum médico em nossa platforma"
      document.getElementById("crm-medico").style.color = "red"
      console.log("0 médicos cadastrados")

      this.medico = null

    } else if (medicoSel === "null") {

      document.getElementById("label-medicos").style.color = "red";
      document.getElementById("label-medicos").innerHTML = "* Selecione uma opção válida";
      document.getElementById(p_medicos).style.border = "2px solid red";

      this.medico = null

    } else {

      document.getElementById("label-medicos").style.color = "#00ceaf";
      document.getElementById("label-medicos").innerHTML = "";
      document.getElementById(p_medicos).style.border = "2px solid #00ceaf";

      document.getElementById("nome-medico").innerHTML = "Nome: " + this.medicos[medicoSel].nome
      document.getElementById("especialidade-medico").innerHTML = "Especialidade: " + this.medicos[medicoSel].especialidade
      document.getElementById("crm-medico").innerHTML = "CRM: " + this.medicos[medicoSel].crm

      this.medico = this.medicos[medicoSel]

    }
  }
  getMedico() {
    return this.medico
  }
}

let formulario = new Paciente()

let consulta = new Consulta()

function dataHoje() {

  let data = new Date()
  data.getDate()
  let dataDia

  if (data.getDate() < 10) {
    dataDia = String("0" + data.getDate())
  } else {
    dataDia = String(data.getDate())
  }

  let dataMes

  if ((data.getMonth() + 1) < 10) {
    dataMes = String("0" + (data.getMonth() + 1))
  } else {
    dataMes = String(data.getMonth() + 1)
  }

  let dataAno = data.getFullYear()
  let dataHoje = dataAno + "-" + dataMes + "-" + dataDia
  let dataMaisUmAno = (dataAno + 1) + "-" + dataMes + "-" + dataDia


  let dataAmanha = new Date()
  dataAmanha.setDate(dataAmanha.getDate() + 1)
  let dataMaisUmDiaEmDias

  if (dataAmanha.getDate() < 10) {
    dataMaisUmDiaEmDias = String("0" + dataAmanha.getDate())
  } else {
    dataMaisUmDiaEmDias = String(dataAmanha.getDate())
  }

  let dataMaisUmDiaEmMeses

  if (dataAmanha.getMonth() < 10) {
    dataMaisUmDiaEmMeses = String("0" + (dataAmanha.getMonth()) + 1)
  } else {
    dataMaisUmDiaEmMeses = String(dataAmanha.getMonth() + 1)
  }

  let dataMaisUmDiaAno = String(dataAmanha.getFullYear())

  let dataMaisUmDia = dataMaisUmDiaAno + "-" + dataMaisUmDiaEmMeses + "-" + dataMaisUmDiaEmDias

  document.getElementById("dataConsulta").setAttribute("min", dataMaisUmDia)
  document.getElementById("dataConsulta").setAttribute("max", dataMaisUmAno)

  document.getElementById("dataNasc").setAttribute("max", dataHoje)
}

function setarMedicos() {
  consulta.setarMedicos()

}

function validarNome() {
  formulario.setNome("nome")
}

function validarCpf() {
  formulario.setCpf("cpf")
}

function validarSexo() {
  formulario.setSexo("sexo")
}

function validarDataNasc() {
  formulario.setDadosNasc("dataNasc")
}

function validarConvenio() {
  formulario.setConvenio("convenio")
}

function validarHistorico() {
  consulta.setHistorico("historico")
}

function validarConsulta() {
  consulta.setDadosConsulta("dataConsulta")
}

function validarHora() {
  consulta.setHora("hora")
}

function validarMedicos() {
  consulta.setMedico("medicos")
}

function enviarFormulario() {

  let momentoDoAgendamento = new Date()

  let form = {
    "consulta": {
      "historico": consulta.getHistorico(),
      "data": consulta.getDadosConsulta(),
      "hora": consulta.getHora()
    },
    "paciente": {
      "nome": formulario.getNome(),
      "cpf": formulario.getCpf(),
      "sexo": formulario.getSexo(),
      "dataNascimento": formulario.getDadosNasc(),
      "convenio": formulario.getConvenio()
    },
    "medico": consulta.getMedico(),
    "protocolo": String(momentoDoAgendamento)
  }

  switch (true) {
    case form.consulta.historico == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.consulta.data == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.consulta.hora == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.paciente.nome == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.paciente.cpf == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.paciente.sexo == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.paciente.dataNascimento == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.paciente.convenio == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    case form.medico == null:
      alert("Por favor preencha todos os campos do formulário de forma adequada")
      break;
    default:


      let agendamento = "Consulta " + 0
      for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("Consulta " + i)) {
          agendamento = String("Consulta " + (i + 1))
        }
      }

      let successForm = JSON.stringify(form)
      localStorage.setItem(agendamento, successForm)
      alert("Consulta marcada com sucesso")
      break;
  }


  console.log(form)

}

window.addEventListener("load", dataHoje)
window.addEventListener("load", setarMedicos)
document.getElementById("nome").addEventListener("change", validarNome)
document.getElementById("cpf").addEventListener("change", validarCpf)
document.getElementById("sexo").addEventListener("change", validarSexo)
document.getElementById("dataNasc").addEventListener("change", validarDataNasc)
document.getElementById("convenio").addEventListener("change", validarConvenio)
document.getElementById("historico").addEventListener("change", validarHistorico)
document.getElementById("dataConsulta").addEventListener("change", validarConsulta)
document.getElementById("hora").addEventListener("change", validarHora)
document.getElementById("medicos").addEventListener("change", validarMedicos)
document.getElementById("enviar").addEventListener("click", enviarFormulario)

