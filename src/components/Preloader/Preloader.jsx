import './index.css';

export const Preloader = () => {
    return (
        <h3 className='container-fluid flex-center'>
            <div className='wrapper'>
                <p className='wrapper__title'>Loading...</p>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </h3>
    )
}
