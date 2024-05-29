import './perfume.scss';

const Perfume = ({item}) => {
    return(
        <a href={item.link} target='_blank' rel="noreferrer">
            <div className="perfume">
                <div className="perfumePic" style={{backgroundImage: `url("${item.image}")`}}></div>
                <div className="perfumeTitle">{item.name}</div>
            </div>
        </a>
    )
}

export default Perfume;