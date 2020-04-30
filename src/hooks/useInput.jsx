import { useState } from "react"

export default (...fields) => {
  const initialState = fields.reduce((prev, curr) => {
    return { ...prev, [curr]: "" }
  }, {})

  const [state, setState] = useState(initialState)

  const changeHandler = (e) => {
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const clearState = () => setState(initialState)

  return { state, changeHandler, clearState }
}
