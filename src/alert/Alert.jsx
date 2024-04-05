const Alert = ({message,color}) => {
    return (
        <div id="box-alert" className={`alert alert-${color}`} role="alert">
            {message}
        </div>
    )
}

export default Alert;