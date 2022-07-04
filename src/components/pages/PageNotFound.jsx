import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className='notfound'>
            <h2>{`Извините, такой страницы не существует :(`}</h2>
            <Link to='/'
                className='btn btn-lg btn-primary'
            >На страницу добавления заявки</Link>
        </div>
    )
}
