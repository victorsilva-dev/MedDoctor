
class Medico {
    constructor() {
        this.nome = null
        this.crm = null
        this.sexo = null
        this.dadosNascimento = null
        this.especialidade = null
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

    setCrm(p_crm) {
        let crm = Number((document.getElementById(p_crm).value).trim())
        let crmLength = (document.getElementById(p_crm).value).trim().toString().length


        if (crm === 0) {

            document.getElementById("label-crm").style.color = "red";
            document.getElementById("label-crm").innerHTML = "* Este campo deve ser preenchido";
            document.getElementById(p_crm).style.border = "2px solid red";

            this.crm = null

        } else if (isNaN(crm) === true) {

            document.getElementById("label-crm").style.color = "red";
            document.getElementById("label-crm").innerHTML = "* Este campo aceita apenas números";
            document.getElementById(p_crm).style.border = "2px solid red";

            this.crm = null

        } else if (crmLength !== 4) {

            document.getElementById("label-crm").style.color = "red";
            document.getElementById("label-crm").innerHTML = "* Este campo deve ter 11 dígitos";
            document.getElementById(p_crm).style.border = "2px solid red";

            this.crm = null

        } else if (isNaN(crm) === false && crmLength === 4) {

            document.getElementById("label-crm").style.color = "#00ceaf";
            document.getElementById("label-crm").innerHTML = "";
            document.getElementById(p_crm).style.border = "2px solid #00ceaf";

            this.crm = crm

        }
        console.log("CRM: " + this.crm)
    }
    getCrm() {
        return this.crm
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

    setEspecialidade(p_especialidade) {
        let especialidade = document.getElementById(p_especialidade).value

        if (especialidade === "null") {

            document.getElementById("label-especialidade").style.color = "red";
            document.getElementById("label-especialidade").innerHTML = "* Selecione uma opção válida";
            document.getElementById(p_especialidade).style.border = "2px solid red";

            this.especialidade = null

        } else {

            document.getElementById("label-especialidade").style.color = "#00ceaf";
            document.getElementById("label-especialidade").innerHTML = "";
            document.getElementById(p_especialidade).style.border = "2px solid #00ceaf";

            this.especialidade = especialidade
        }
        console.log("Especialidade: " + this.especialidade)
    }
    getEspecialidade() {
        return this.especialidade
    }

}

let formulario = new Medico()

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

    document.getElementById("dataNasc").setAttribute("max", dataHoje)
}

function validarNome() {
    formulario.setNome("nome")
}

function validarCrm() {
    formulario.setCrm("crm")
}

function validarSexo() {
    formulario.setSexo("sexo")
}

function validarDataNasc() {
    formulario.setDadosNasc("dataNasc")
}

function validarEspecialidade() {
    formulario.setEspecialidade("especialidade")
}

function enviarFormulario() {
    let form = {
        "nome": formulario.getNome(),
        "crm": formulario.getCrm(),
        "sexo": formulario.getSexo(),
        "dataNascimento": formulario.getDadosNasc(),
        "especialidade": formulario.getEspecialidade(),
    }

    switch (true) {
        case form.nome == null:
            alert("Por favor preencha todos os campos do formulário de forma adequada")
            break;
        case form.crm == null:
            alert("Por favor preencha todos os campos do formulário de forma adequada")
            break;
        case form.sexo == null:
            alert("Por favor preencha todos os campos do formulário de forma adequada")
            break;
        case form.dataNascimento == null:
            alert("Por favor preencha todos os campos do formulário de forma adequada")
            break;
        case form.especialidade == null:
            alert("Por favor preencha todos os campos do formulário de forma adequada")
            break;
        default:

            let numMedico = "Médico " + 0
            for (let i = 0; i < localStorage.length; i++) {

                if (localStorage.getItem("Médico " + i)) {
                    numMedico = String("Médico " + (i + 1))
                }
            }
            console.log(numMedico)
            let successForm = JSON.stringify(form)

            localStorage.setItem(numMedico, successForm)
            alert("Cadastro realizado com sucesso")
            break;
    }

    console.log(form)

}

window.addEventListener("load", dataHoje)
document.getElementById("nome").addEventListener("change", validarNome)
document.getElementById("crm").addEventListener("change", validarCrm)
document.getElementById("sexo").addEventListener("change", validarSexo)
document.getElementById("dataNasc").addEventListener("change", validarDataNasc)
document.getElementById("especialidade").addEventListener("change", validarEspecialidade)
document.getElementById("enviar").addEventListener("click", enviarFormulario)


