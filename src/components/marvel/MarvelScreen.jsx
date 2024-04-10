import { HeroList } from '../hero/HeroList'
import "../../style.css"


export const MarvelScreen = () => {
    return (
        <div className='marvel'>
            <h1>MarvelScreen</h1>
            <hr />

            <HeroList publisher="Marvel Comics" />

        </div>
    )
}
