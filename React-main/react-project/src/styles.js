import styled from 'styled-components'
import Background1 from './assets/background_1.svg'

export const Container = styled.div`
background: url('${Background1}');
background-size:cover;
display: flex;
align-items: center;
gap: 40px;
flex-direction: column;

`
export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
color: #FFFFFF;
margin-bottom: 80px;
text-align: center;
`;

export const Image = styled.img`
margin-top: 30px;

`
export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;

`
export const Label = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left: 25px;

`
export const LabelInput = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
margin-bottom: 34px;

`
export const Liste = styled.ul`

`
export const ListeLi = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
margin-top: 20px;


button{
    background: none;
    border: none;
    cursor: pointer;
    :active{
        opacity: 0.8;
    }
}

`
export const Button = styled.button`
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
width: 342px;
height: 74px;
border: none;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
cursor: pointer;

&:hover{
    opacity: 0.9;
    transition: 0.2s;
}
&:active{
    opacity:0.8;
}
`
export const Alert = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f44336;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  z-index: 999;
`;