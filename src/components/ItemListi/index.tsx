import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface ItemListProps{
  mediaName:string
  link?: string
  img: ReactNode
  func?: any
}

export const ItemListi: React.FC<ItemListProps> = ( {
  img,
  link,  
  mediaName}) => {
    let navigate = useNavigate();
  return (
    <Container>
      {link &&   <a href={ link } target="_blanck" title={`link para ${mediaName}`}>{ mediaName }</a>}
      {!link && <span style={{'cursor': 'pointer'}} onClick={()=> {navigate(`/login`)}}>{ mediaName }</span>}
      {img}
    </Container>
  )
}
