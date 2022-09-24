import Card from "../card/card.component";
import './card-list.css';

const CardList = ({monsters,className}) => {
    return(
        <div className={className}>
            {
                monsters.map((monster)=>{
                    return <Card key={monster.id} monster={monster} className='card'/>
                    // return <div key={monster.id}>
                    //             <h1>{monster.name}</h1>
                    //         </div>
                    
                })
            }
        </div>
    )
}

export default CardList;