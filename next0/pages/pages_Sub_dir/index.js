export default function principal(){
    return(
        <div>
            <h1>
                Nova pagina
            </h1>

            <Mariaprea texto = "Morreu Maria préa..."/>
        </div>
    )
}

export function Mariaprea({texto}){
    return(

        <h2>
        
           {texto}

        </h2>
    )
}
