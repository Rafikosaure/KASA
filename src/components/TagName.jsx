import '../styles/TagName.scss'

function TagName({ tagText }) {
    return (
        <div className="tagname">
            <p className="tagname__text">{tagText}</p>
        </div>
    )
}

export default TagName
