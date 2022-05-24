import React from 'react';
import { ItemListi } from '../ItemListi/index';
import { 
  YoutubeLogo, 
  TwitchLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  Money } from 'phosphor-react'; 

import { Container } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <ul>
          <ItemListi
            img={<YoutubeLogo size={30}/>}
            link={'https://www.youtube.com/channel/UCE8_VHiZPTxcuYIwhwZv55w'}
            mediaName={'youtube'}
          />
            <ItemListi
            img={<InstagramLogo size={30}/>}
            link={'https://www.instagram.com/programadorautodidata/'}
            mediaName={'insta'}
          />
          <ItemListi
            img={<LinkedinLogo size={30}/>}
            link={'https://www.linkedin.com/in/matheus-souza-b0a8731b8/'}
            mediaName={'linkedin'}
          />
          <ItemListi
            img={<TwitchLogo size={30}/>}
            link={'https://www.twitch.tv/1devpro'}
            mediaName={'twich'}
          />
          <ItemListi
            img={<Money size={30}/>}
            link={'https://doacoes-programador-autodidata.vercel.app/'}
            mediaName={'doação'}
          />
        </ul>
      </div>
    </Container>
  )
}
