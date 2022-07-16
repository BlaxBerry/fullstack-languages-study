import { useLayoutEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useLayoutEffect(() => {
    navigate("/home", { replace: true })
  })

  return null
}

export default IndexPage
