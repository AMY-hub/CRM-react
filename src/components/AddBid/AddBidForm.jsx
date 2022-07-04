import { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../App';

import { mainPath } from '../../consts/consts';
import { getTestData } from '../../utils/getTestData';
import { validateFormData } from '../../utils/validateFormData';
import { Error } from '../Error';

export const AddBidForm = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //Only for Testing:
    const [formData, setFormData] = useState(getTestData);

    const { setLastEditedBid } = useContext(AppContext);

    // const [formData, setFormData] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     product: 'course-html',
    //     status: 'new'
    // });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateRes = validateFormData(formData);
        if (validateRes.invalid) {
            setError('Заполните все поля!');
        } else {
            setLoading(true);
            axios.post(mainPath + '/bids', formData)
                .then(res => {
                    setError(null);
                    setLastEditedBid(res.data.id);
                    //For testing:
                    setFormData(getTestData);

                    // setFormData({
                    //     name: '',
                    //     phone: '',
                    //     email: '',
                    //     product: 'course-html',
                    //     status: 'new'
                    // });
                })
                .catch(err => setError(err.message))
                .finally(() => setLoading(false))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Ваши данные:</label>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Имя и Фамилия" required />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    value={formData.phone}
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Телефон" required />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                <select
                    defaultValue={formData.product}
                    onChange={handleChange}
                    name="product"
                    className="form-control">
                    <option value="course-html">Курс по верстке</option>
                    <option value="course-js">Курс по JavaScript</option>
                    <option value="course-vue">Курс по VUE JS</option>
                    <option value="course-php">Курс по PHP</option>
                    <option value="course-wordpress">Курс по WordPress</option>
                </select>
            </div>
            <div className="form-group">
                <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                    disabled={loading}
                >Оформить заявку</button>
            </div>
            {error &&
                <Error message={error} />}
        </form>
    )
}
