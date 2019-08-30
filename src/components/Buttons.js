import React from "react"
import PropTypes from "prop-types"

//import "./Buttons.scss"

const Buttons = ({ onCreate, onRemove }) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        제거
      </div>
    </div>
  )
}

Buttons.porpTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
}

Buttons.defaultProps = {
  onCreate: () => console.warn("onCreate not definded"),
  onRemove: () => console.warn("onRemove not definded")
}

export default Buttons
