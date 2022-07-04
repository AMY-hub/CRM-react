import { useContext } from 'react';
import { AppContext } from '../App';

export const StatusFilter = () => {

    const { filter, setFilter } = useContext(AppContext);

    return (
        <div className="btn-group" role="group" aria-label="...">
            <button
                onClick={() => setFilter({ ...filter, status: 'all' })}
                data-role="top-status"
                className={filter.status === 'all' ?
                    'active top_filter__btn' : 'top_filter__btn'}>
                Все</button>
            <button
                onClick={() => setFilter({ ...filter, status: 'new' })}
                data-role="top-status"
                className={filter.status === 'new' ?
                    'active top_filter__btn' : 'top_filter__btn'}>
                Новые</button>
            <button
                onClick={() => setFilter({ ...filter, status: 'inwork' })}
                data-role="top-status"
                className={filter.status === 'inwork' ?
                    'active top_filter__btn' : 'top_filter__btn'}>
                В работе</button>
            <button
                onClick={() => setFilter({ ...filter, status: 'complete' })}
                data-role="top-status"
                className={filter.status === 'complete' ?
                    'active top_filter__btn' : 'top_filter__btn'}>
                Завершенные</button>
        </div>
    )
}
