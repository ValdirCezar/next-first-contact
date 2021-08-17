import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
   return (
      <div>

         <Titulo 
            principal="Titulo principal"
            secundario="Subtitulo"
         />

         <Titulo
            principal="Titulo principal"
            secundario="Subtitulo"
            pequeno={true}
         />

      </div>
   )
}
