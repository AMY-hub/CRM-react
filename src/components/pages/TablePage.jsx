import { countNewBids } from '../../utils/countNewBids';
import { useFetch } from '../../hooks/useFetch';
import { mainPath } from '../../consts/consts';

import { Sidebar } from '../Sidebar/Sidebar';
import { TopFilterPanel } from '../TopFilterPanel/TopFilterPanel';
import { BidsTable } from '../BidsContent/BidsTable';
import { Preloader } from '../Preloader/Preloader';
import { Error } from '../Error';

export const TablePage = () => {

    const { loading, error, data } = useFetch(mainPath + '/bids');
    const newBids = data ? countNewBids(data) : 0;

    return (
        <section className='body--dashboard'>
            <Sidebar newBids={newBids} />
            {error ?
                <Error message={error} />
                :
                <div className="main-wrapper">
                    {data ?
                        <div className="container-fluid">
                            <div className="admin-heading-1">Все заявки</div>
                            <TopFilterPanel />
                            <BidsTable bidsData={data} />
                        </div>
                        :
                        <Preloader />
                    }
                </div>
            }
        </section>
    )
}
