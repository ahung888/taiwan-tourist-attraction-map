import React from 'react'
import { useRouter } from 'next/router'

const Image = ({ src, alt = '' }) => {
  const router = useRouter()
  return <img src={`${router.basePath}${src}`} alt={alt} />
}

export default Image