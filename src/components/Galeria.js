import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/galeria.css";
import { useContext } from "react"; 
import Heart from "./Heart";
import Context from "../../src/Context"


export default function Galeria() {
  const { galeria, setGaleria } = useContext(Context);



  

  return (
    <div className="galeria grid-columns-5 p-3">
     {galeria.map((data) => {
         return(
          <div>
          
          <div className="foto" key={data.id} style={{background: `url(${data.src.tiny})` }}  >
             
            <div >
              <div onClick={()=>{
        
                            const index = galeria.findIndex((e) => e.id === data.id)
                          
                            galeria[index].liked = !galeria[index].liked
                            console.log(galeria[index].liked )
                            setGaleria([...galeria])

                          }}  >  
                        <Heart filled={data.liked}/>

              </div>
            </div>
            <p>{data.alt}</p>
          </div>
          </div>
         )
           
          
     })}
    </div>
  );
}
