
const Button = (props) => {
  const classBtn = () => {
    let result = 'button';
    result += props.primary ? ' button-primary'
      : props.secondary ? ' button-secondary' : ''

    if (props.icon) {
      result += ` icon ${props.icon}`
    }

    if (props.disabled) {
      result += props.primary ? ' button-primary-disabled' : ' button-disabled'
    }
    return result
  } 

  return (
    <div className={classBtn()} onClick={props.handleClick}>
      <div>{props.title}</div>
    </div>
  )
}

export default Button
