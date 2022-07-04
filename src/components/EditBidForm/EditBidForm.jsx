import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

import { mainPath } from '../../consts/consts';
import { formatDateTime } from '../../utils/formatDateTime';
import { validateFormData } from '../../utils/validateFormData';

import { Error } from '../Error';

export const EditBidForm = ({ bidData }) => {

    const [formData, setFormData] = useState(bidData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { setLastEditedBid } = useContext(AppContext);
    const navigate = useNavigate();

    const dateString = formatDateTime(bidData.createdAt, 'ru');

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
            axios.put(`${mainPath}/bids/${formData.id}`, formData)
                .then(res => {
                    setError(null);
                    setLastEditedBid(formData.id);
                    navigate('/table');
                })
                .catch(err => setError(err.message))
                .finally(() => setLoading(false))
        }
    }

    const handleDelete = (id) => {
        setLoading(true);
        axios.delete(`${mainPath}/bids/${id}`)
            .then(res => {
                setError(null);
                setLastEditedBid('');
                navigate('/table');
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>ID:</strong>
                        </div>
                        <div className="col">{`Заявка № ${formData.id}`}</div>
                        <input name="id" type="hidden" id="id" />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Дата создания:</strong>
                        </div>
                        <div className="col">{dateString}</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Продукт:</strong>
                        </div>
                        <div className="col">
                            <select
                                onChange={handleChange}
                                defaultValue={formData.pruduct}
                                name="product"
                                className="custom-select" >
                                <option value="course-html">Курс по верстке</option>
                                <option value="course-js">
                                    Курс по JavaScript
                                </option>
                                <option value="course-vue">Курс по VUE JS</option>
                                <option value="course-php">Курс по PHP</option>
                                <option value="course-wordpress">
                                    Курс по WordPress
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Имя:</strong>
                        </div>
                        <div className="col">
                            <input
                                onChange={handleChange}
                                value={formData.name}
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Email:</strong>
                        </div>
                        <div className="col">
                            <input
                                onChange={handleChange}
                                value={formData.email}
                                type="text"
                                className="form-control"
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Телефон:</strong>
                        </div>
                        <div className="col">
                            <input
                                onChange={handleChange}
                                value={formData.phone}
                                type="text"
                                className="form-control"
                                name="phone"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-2">
                            <strong>Статус заявки:</strong>
                        </div>
                        <div className="col">
                            <select
                                onChange={handleChange}
                                value={formData.status}
                                className="custom-select"
                                name="status">
                                <option value="new">Новая</option>
                                <option value="inwork">В работе</option>
                                <option value="complete">Завершена</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {error &&
                <Error message={error} />}
            <div className="row justify-content-between">
                <div className="col text-left">
                    <button
                        onClick={() => handleDelete(formData.id)}
                        disabled={loading}
                        className="btn btn-danger"
                    >Удалить заявку</button>
                </div>
                <div className="col text-right">
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                    >Сохранить изменения</button>
                </div>

            </div>
        </form>
    )
}
