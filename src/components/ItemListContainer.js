import "bulma/css/bulma.css";
import './itemListContainer.css'
import Item from "./Item";
import lagoNess from '../assets/img/lagoness.jpg'
import tortugas from '../assets/img/tortugas.webp'
import homer from '../assets/img/homer.jpg'

function ItemListContainer(props){
    return(
        <div className="card-section">
        <Item img = {lagoNess} nombre ='Ultimate Creature from the Black Lagoon (B&W)' definicion='7” Scale Action Figure' coleccion= 'Universal Monsters'></Item>
        <Item img={tortugas} nombre='TEENAGE MUTANT NINJA TURTLES (MIRAGE COMICS)' definicion='LEONARDO, RAPHAEL, MICHELANGELO, AND DONATELLO 7" SCALE ACTION FIGURE 4-' coleccion='PACK (PRE-ORDER)' />
        <Item img={homer} nombre='DEEP SPACE HOMER' definicion= 'THE SIMPSON ULTIMATES' coleccion=''/>
        </div>
    );
};

export default ItemListContainer;