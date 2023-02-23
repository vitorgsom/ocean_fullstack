import './Card.css'

export function Card(props) {
    const item = props.item
    const tags = item.tags
    return (
        <div className="card">
            <h1>{item.nome}</h1>

            {tags && (<div className='tag-wrapper'>
                {
                    tags.map((tag, index) => {
                        return <div key={`tag-${index}`} className="tag">{tag}</div>
                    })
                }
                <div className="tag">Tag 1</div>
                <div className="tag">Tag 2</div>
            </div>)}

            <img src={item.imagemUrl} />
        </div>
    )
}