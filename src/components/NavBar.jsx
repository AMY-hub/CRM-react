import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from './App';

export const NavBar = () => {

    const { lastEditedBid } = useContext(AppContext);

    return (
        <nav className='project-nav'>
            <div className="project-nav__links-wrapper">
                <Link to='/'>Форма добавления заявок</Link>
                <Link to='/table'>Таблица с заявками</Link>
                <Link to={
                    lastEditedBid ?
                        `/edit/${lastEditedBid}`
                        :
                        '/nobidsadded'
                }>Редактирование заявки</Link>
            </div>
        </nav>
    )
}
