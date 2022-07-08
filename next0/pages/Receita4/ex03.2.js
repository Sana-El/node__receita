export default function MoviesDetails3({data}) {

    return (

        <div>
            <style jsx>{`
                
                div {
                    display: flex;
                    justify-content: center;
                    
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                    max-width: 500px;
                    list-style: none;
                    padding: 10px;
                }
                ul li{
                    text-align: justify;
                    padding: 0 20px;
                }
    
            `}
            </style>

            <ul>
                <h2>{data.Title}</h2>
                <img width={200} src={data.Poster}></img>    
                <li>Ano: {data.Year}</li>        
                <li><strong>Classificado</strong>: {data.Rated}</li>        
                <li><strong>Liberado</strong>: {data.Released}</li>            
                <li><strong>Tempo de execução</strong>: {data.Runtime}</li>        
                <li><strong>Gênero</strong>: {data.Genre}</li>        
                <li><strong>Diretor</strong>: {data.Director}</li>            
                <li><strong>escritor</strong>: {data.Writer}</li>        
                <li><strong>Atores</strong>: {data.Actors}</li>        
                <li><strong>Enredo</strong>: {data.Plot}</li>        
                <li><strong>Língua</strong>: {data.Language}</li>            
                <li><strong>País</strong>: {data.Country}</li>        
                <li><strong>Prêmios</strong>: {data.Awards}</li>    
            </ul>
        </div>
    )    
}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=f4eaaa86&i=${context.params.movieID}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}
