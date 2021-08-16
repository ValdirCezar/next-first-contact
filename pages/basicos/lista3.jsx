function gerarLista(final = 10) {
   let array = []
   for (let i = 1; i <= final; i++) {
      array.push(<span>{i}, </span>)
   }
   return array
}

export default function lista() {
   return (
      <div>{gerarLista(10)}</div>
   )
}