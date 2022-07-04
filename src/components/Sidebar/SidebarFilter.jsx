import { useContext } from 'react';
import { AppContext } from '../App';

export const SidebarFilter = ({ newBids }) => {

    const { filter, setFilter } = useContext(AppContext);

    return (
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">Заявки</div>
            <ul id="leftStatusBar">
                <li>
                    <button
                        onClick={() => setFilter({ ...filter, status: 'all' })}
                        data-role="left-status"
                        className={filter.status === 'all' ? 'active' : ''}>
                        Все вместе</button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter({ ...filter, status: 'new' })}
                        data-role="left-status"
                        className={filter.status === 'new' ? 'active' : ''}
                    >Новые
                        <span className="badge">{newBids}</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter({ ...filter, status: 'inwork' })}
                        data-role="left-status"
                        className={filter.status === 'inwork' ? 'active' : ''}
                    >В работе</button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter({ ...filter, status: 'complete' })}
                        data-role="left-status"
                        className={filter.status === 'complete' ? 'active' : ''}
                    >Завершенные</button>
                </li>
            </ul>
        </div >
    )
}
