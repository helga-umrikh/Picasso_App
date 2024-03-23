import React from 'react';
import { Link } from 'react-router-dom'
import { Button as ButtonComponent } from 'antd';
import { ButtonProps } from '../interfaces/ButtonProps';

const Button: React.FC<ButtonProps> = ({ route, title }) => {
  return (
    <Link to={route}>
    <ButtonComponent className="button">{title}</ButtonComponent>
</Link>
  )
}

export default Button