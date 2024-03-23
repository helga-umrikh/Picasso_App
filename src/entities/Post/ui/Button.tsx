import React from 'react';
import { Link } from 'react-router-dom'

const Button = (link: string, title: string) => {
  return (
    <Link to={link}>
    <button className="button">{title}</button>
</Link>
  )
}

export default Button