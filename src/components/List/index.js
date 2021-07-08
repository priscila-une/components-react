

const List = ({ children, className }) => {
    return (
        <div className='list-group'>
            <a href="/" className={className}>{children}</a>
        </div>

    )
}

export default List;