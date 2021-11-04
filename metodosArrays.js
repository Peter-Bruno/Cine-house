const sites = [
    'www.google.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.twitter.com',
  ]

  const numeros=[2, 6, 4, 3, 7, 1]

  function adicionarHttp(url) {
      console.log('rodando callback para '  + url )
      return 'http://' + url
  }

  function filtraUrlCurta(url) {
      const temMenosDeQuinzeCaracteres = url.length <= 15
      console.log('filtro', url, temMenosDeQuinzeCaracteres)
      return temMenosDeQuinzeCaracteres
}
  function somaArray(acumulador, item){
      return acumulador + item
      
  }

  console.log('antes', sites)

  //const novoArray = sites.filter(filtraUrlCurta)
  //const novoArray = sites.map(adicionarHttp)
  //console.log('depois', novoArray)
  const resultado = numeros.reduce(somaArray)
  console.log('resultado', resultado)