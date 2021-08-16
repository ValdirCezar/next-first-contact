export default function jsx4() {

   const subtitulo = "Estou no JavaScript"

   return (
      <div>
         <h1>Integração JS e JSX</h1>
         <h2>{subtitulo}</h2>
         <h3>{3 * 3}</h3>
         <h4>{Math.max(9, 99)}</h4>
         <h5>{verificaValor(50, 1, 10)}</h5>
      </div>
   )
}

function verificaValor(valor, min, max) {
   return (valor >= min && valor <= max) ?
      "Está entre minimo e máximo" : "Não está entre minimo e máximo"
}