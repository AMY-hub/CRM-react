export const Error = ({ message }) => {
    return (
        <div
            className='error-message'
        >{`Ошибка!: ${message}`}</div>
    )
}
