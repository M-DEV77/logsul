import styled from "styled-components"
export default function Menu({children}){
    
const ContMenu = styled.div`
position: fixed;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
z-index: 3;
//padding: 1vw;
width: 100vw;
border-bottom: solid 1px #ff3c00;
`
const ContLinks = styled.div`


`
const DetL1 = styled.div`

width: 4vw;
height: 0.3vw;
background-color: black;
`
const DetL2 = styled.div`
margin-top: 0.4vw;
width: 4vw;
height: 0.3vw;
background-color: black;
`
const DetL3 = styled.div`
margin-top: 0.4vw;
width: 4vw;
height: 0.3vw;
background-color: black;
`
const BtnCell = styled.div`
position: relative;
display:none;
flex-direction: column;
justify-content: center;
align-items: center;
right: 2vw;
height: 3vw;
width: 5vw;
cursor: pointer;
background-color: white;

 &:hover{
    
    ${DetL1}{
        background-color: #202020;
        transition: 2s;
        width: 2.7vw;
        transform: rotate(-45deg);
        transform-origin: center center;
    }
    ${DetL2}{
        display: none;
    }
    ${DetL3}{
        background-color: #424242;
        transition: 2.8s;
        width: 2.7vw;
        transform: rotate(45deg);
        transform-origin: center center;
    }
}
@media only screen and (max-width: 600px) {
    display:flex;
  
}
`




return(
    <ContMenu>
        <ContLinks>
           {children} 
        </ContLinks>
     <BtnCell>
    <DetL1></DetL1>
    <DetL2></DetL2>
    <DetL3></DetL3>
     </BtnCell>
    </ContMenu>
    )
}