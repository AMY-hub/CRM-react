export const countNewBids = ( bids ) => {
    let count = 0;
    bids.forEach(bid => {
       if( bid.status === 'new') ++count;
    });
    return count;
}