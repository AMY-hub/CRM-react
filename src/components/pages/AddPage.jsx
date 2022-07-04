import { AddBidForm } from '../AddBid/AddBidForm';
import { AddBidHeader } from '../AddBid/AddBidHeader';

export const AddPage = () => {
  return (
    <section className="radial-bg flex-center">
      <div className="white-plate white-plate--payment">
        <div className="container-fluid">
          <AddBidHeader />
          <div className="white-plate__line-between white-plate__line-between--main"></div>
          <AddBidForm />
        </div>
      </div>
    </section>

  )
}
