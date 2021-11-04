function adicionarHttp(url) {
   const retorno = 'http://' + url
   return retorno
}

function processar(sites, callback) {
const retorno=[] 
console.log(callback)
for( let contador = 0; contador < sites.length; contador = contador + 1) {
    const siteAtual = sites[contador]
    const retornoCallback = callback(siteAtual)
    retorno.push(retornoCallback)
    
}
return retorno
}

//console.log(adicionarHttp('www.google.com'))

const sites = [
    'www.google.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.twitter.com',

]
console.log(processar(sites, adicionarHttp))