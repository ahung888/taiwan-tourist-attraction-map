import React from 'react'
import { useRouter } from 'next/router'

const Image = (props) => {
  const router = useRouter()
  return <img
    {...props}
    src={`${router.basePath}${props?.src}`}
  />
}

export default Image