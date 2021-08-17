export default function Estio(props) {
   return (
      <div>
         <h1 style={
            {
               backgroundColor: props.numero <= 10 ? "gr een" : "blue",
               color: "white"
            }
         } >Estilo condicional</h1>
      </div>
   )
}