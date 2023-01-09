import styled from "styled-components"
export default function Links(props){
  const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2vw;
  cursor: pointer;
  margin-left: 1vw;
  transition: 0.5s;
  &:hover{
    color: #ff3c00;
  }
  `
    return(<>
       <Link href={"#"+props.link}>{props.nome}</Link>
    </>)
}