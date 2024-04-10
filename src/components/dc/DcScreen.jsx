import { HeroList } from '../hero/HeroList';


export const DcScreen = () => {
    return (
        <div className='dc'>
            <h1>DCScreen</h1>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}