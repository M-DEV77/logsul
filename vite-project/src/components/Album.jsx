import { useEffect, useState } from "react"
import styled from "styled-components"
import { keyframes } from 'styled-components'

export default function Album(props){
    const fotos=  props.fotos;
    const qtt = props.quantidade
    const [qtd,setQtd]=useState(1)
    const [btnC,setBtnC]=useState("flex");
    const ids = props.id;
    const res ="1080"
    
    useEffect(()=>{
        function over(){

        }
        if(qtd>qtt){
            setQtd(1)
        } 
        if(qtd<1){
            setQtd(qtt)
        }     
     document.getElementById(props.id).style.backgroundImage="url('../"+props.pasta+"/"+res+"/"+fotos+qtd+".jpg')";
     return over
    },[qtd,qtt,res])

    
    



const ContainerCont =styled.div`
    right: 4vw;
    width: 50vw;
    top: 25vw;
    position: relative;
    color: white;
    z-index: 10;
    float: right;

`

const AnimDireita = keyframes`
 0% { left: -5000px;}
 100% { left: 0px;}
`
const AnimEsquerda = keyframes`
 0% { right: -5000px;}
 100% { right: 0px;}
`
const Content = styled.div`
top: 1vw;
position: relative;
font-size: 1.4vw;
transition: 2s;
animation-name: ${AnimEsquerda};
animation-duration: 4s;
animation-iteration-count: 1;
`
const Titulo = styled.div`
  font-size: 2vw;
  position: relative;
  transition: 2s;
  animation-name: ${AnimDireita};
  animation-duration: 4s;
  animation-iteration-count: 1; 
  
`
const Btn = styled.button`
    opacity: 0.4;
    height: 100vh;
    width: 4vw;
    cursor: pointer;
    border-style: none;
    position: relative;
    z-index: 10;
    &:hover{
        opacity: 0.7;
    }
`    
const ConContent = styled.div`
mask-image:linear-gradient(180deg, transparent 5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 50%, transparent 85%);
filter: blur(10px) saturate(2%) brightness(50%);
background-size: cover;
//background-repeat: no-repeat;
height: 100vh;
width: 99vw;
display: flex;
flex-direction:row ;
justify-content: space-between;
transition: 1s;
`

const Cont = styled.div`
cursor: pointer;
&:hover{
        ${ConContent}{
            filter: blur(0px);
            mask-image:linear-gradient(360deg, transparent 0%, #ffffff 0%, #ffffff 92%, transparent 100%);
            scale: 1.02;
        }
        ${Titulo}{
           
            color: transparent;
        }
        ${Content}{
            
            color: transparent;
            
            
        }

}

@media only screen and (max-width: 600px) {
  
}
`
return(
<Cont>
<ContainerCont>
    <Titulo>
        {props.nome}
    </Titulo>   
    <Content> 
        {props.content}
    </Content>
</ContainerCont>
<ConContent  id={ids}>
<Btn onClick={()=>{setQtd(qtd - 1)}}>Anterior</Btn>
<Btn onClick={()=>{setQtd(qtd + 1)}}>Proximo</Btn>
</ConContent>

</Cont>
)  
}