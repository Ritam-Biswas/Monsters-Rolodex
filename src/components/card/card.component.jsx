import './card.css';

const Card = ({monster,className}) => {
    const {name,id,email} = monster;

    return(
        <div className={className}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    ) 
}

export default Card;