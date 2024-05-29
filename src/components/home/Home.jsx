import Perfume from '../perfume/Perfume';
import './home.scss';
import data from '../data';

const Home = () => {
    return(
        <div className="home">
            <div className="homeBackground"></div>
            <div className="perfumes">
                {
                    data.map((item)=>{
                        return <Perfume item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Home;