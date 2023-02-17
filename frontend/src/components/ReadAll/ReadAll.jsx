import './ReadAll.css'
import {Card} from "../Card/Card"

const items = [
    {
        _id: '1234',
        nome: 'Rick Sanchez',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        _id: '5678',
        nome: 'Morty Smith',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
];



export function ReadAll() {
    return (
    <div className="ReadAll">
        {items.map( (item) => {
        return <Card key={'card' + item._id} item={item} />
        })}
    </div>
    )
}