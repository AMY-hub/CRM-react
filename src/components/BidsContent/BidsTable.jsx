import { useContext } from 'react';
import { AppContext } from '../App';

import { filterBids } from '../../utils/filterBids';
import { NoBidsAdded } from '../pages/NoBidsAdded';
import { Bid } from './Bid';

export const BidsTable = ({ bidsData }) => {

    const { filter } = useContext(AppContext);
    const filteredBids = filterBids(bidsData, filter);

    const bids = filteredBids.map(bid => <Bid data={bid} key={bid.id} />)

    return (
        <>
            {
                bids.length ?
                    <table className="table fs-14">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>дата</th>
                                <th>продукт</th>
                                <th>имя</th>
                                <th>email</th>
                                <th>телефон</th>
                                <th>статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids}
                        </tbody>
                    </table>
                    :
                    <NoBidsAdded />
            }
        </>
    )
}
