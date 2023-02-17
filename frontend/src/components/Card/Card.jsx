import './Card.css'

export function Card(props) {
    const item = props.item
    return (
        <div className="card">
            <h1>{item.nome}</h1>
            <img src={item.imagemUrl} />
        </div>
    )
}