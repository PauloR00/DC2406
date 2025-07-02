


const consultarCep = () => {
  const cep = document.getElementById('cep').value


  let uri = `https://cep.awesomeapi.com.br/json/${cep}`

  console.log(`URI: ${uri}`)
  fetch(uri)
    .then(response => response.json())
    .then(json => {
      console.log(json)




      document.getElementById('log').value = json.address
      document.getElementById('')
    })

}

const fetchEstados = () => {
  let uriEstados = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

  console.log(`URI: ${uriEstados}`)

  fetch(uriEstados)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let options = '<option>Selecione...</option>'

      data.forEach(estado => {
        options = options + `<option value = "${estado.sigla}">${estado.nome}</option>`

      });

      document.getElementById('uf').innerHTML = options

    })
}

fetchEstados()

const fetchMunicipios = () => {
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`)
    .then(responde => responde.json())
    .then(json =>{
      console.log(json)


      let options = '<options>Selecione...</options>'

      json.forEach(municipio =>{
        options = options = `<options value ="${municipio.sigla}">${municipio.nome}`
      })

    })
}