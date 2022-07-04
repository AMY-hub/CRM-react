import { Link } from 'react-router-dom';

import { formatDateTime } from '../../utils/formatDateTime';
import { formatProductName } from '../../utils/formatProductName';

export const Bid = ({ data }) => {

    const { id, createdAt, name, phone, email, product, status } = data;

    const dateString = formatDateTime(createdAt, 'ru', 'date');
    const productName = formatProductName(product);

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{dateString}</td>
            <td>{productName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <div className={`badge badge-pill badge--${status}`}>{status}</div>
            </td>
            <td>
                <Link to={`/edit/${id}`} className="edit-btn">Редактировать</Link>
            </td>
        </tr>
    )
}
