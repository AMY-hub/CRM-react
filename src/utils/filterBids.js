export const filterBids = (data, filter) => {
    let filteredBids = data;
    if( filter.product !== 'all' ) {
        filteredBids = filteredBids.filter( bid => bid.product === filter.product );
    }

    if ( filter.status !== 'all' ) {
        filteredBids = filteredBids.filter( bid => bid.status === filter.status );
    }
    return filteredBids;
}