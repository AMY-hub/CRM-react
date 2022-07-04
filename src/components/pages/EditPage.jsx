import { useParams, Link } from 'react-router-dom';

import { mainPath } from '../../consts/consts';
import { useFetch } from '../../hooks/useFetch';

import { EditBidForm } from '../EditBidForm/EditBidForm';
import { Preloader } from '../Preloader/Preloader';
import { Error } from '../Error';

export const EditPage = () => {

    const { id } = useParams();

    const { error, data } = useFetch(mainPath + '/bids/' + id);

    return (
        <div className="form-wrapper">
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <div className="admin-heading-1">Работа с заявкой</div>
                    </div>
                    <div className="col text-right">
                        <Link to='/table' className="btn btn-link">Вернуться назад</Link>
                    </div>
                </div>
                {error && <Error message={error} />}
                {data ?
                    <div className="row">
                        <div className="col">
                            <EditBidForm bidData={data} />
                        </div>
                    </div>
                    :
                    <Preloader />
                }
            </div>
        </div>
    )
}
