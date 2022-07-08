import Link from "next/link"

export default function Movies3({data}){

    return (
        <div>
            <style jsx>{`
                
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    a{
                        text-decoration:none
                    }
                `}</style>

            {data.Search.map( (m) => 
               <div>
                    <p>
                        <Link href={`/receita4/exe3/movieDetails/${m.imdbID}`}>
                            <a>{m.Title}</a>
                        </Link>
                    </p>
                    <div>
                        <img width={100} src={m.Poster}></img>
                    </div>
                    
               </div>
            )}

        </div>
    )

}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=f4eaaa86&s=${context.params.movies}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}
