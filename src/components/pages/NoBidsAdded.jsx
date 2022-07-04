import { Link } from 'react-router-dom';

export const NoBidsAdded = () => {
    return (
        <div className='info'>
            <h4
                className='info__header'
            >Ни одной заявки не было добавлено или выбрано для редактирования.</h4>
            <Link to='/'
                className='btn btn-lg btn-primary'
            >Добавить заявку</Link>
        </div>
    )
}
