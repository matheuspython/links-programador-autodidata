import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ItemListProps{
  mediaName:string
  link?: string
  img: ReactNode
}

export const ItemListi: React.FC<ItemListProps> = ( {
  img,
  link,  
  mediaName}) => {
  return (
    <Container>
      {link &&   <a href={ link } target="_blanck" title={`link para ${mediaName}`}>{ mediaName }</a>}
      {!link && <span style={{'cursor': 'pointer'}}>{ mediaName }</span>}
      {img}
    </Container>
  )
}
