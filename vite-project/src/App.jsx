import styled from "styled-components"
import Album from "./components/Album"
import Links from "./components/Links"
import Menu from "./components/Menus"

export default function App(){

return(
<>

<Menu>
    <Links link="home" nome="Localização"/>
    <Links link="esta" nome="Estacionamento"/>
    <Links link="conv" nome="Convivência"/>
    <Links link="adm" nome="Administrativo"/>
    <Links link="gua" nome="Guarita"/>
    <Links link="gp1" nome="Galpão-1"/>
    <Links link="gp2" nome="Galpão-2"/>
    <Links link="gp3" nome="Galpão-3"/>
    <Links link="gp4" nome="Galpão-4"/>
    <Links link="gp5" nome="Galpão-5"/>
</Menu>

<Album 
nome="LOCALIZAÇÃO"
id="home"
pasta="mapa"
fotos="ft-"
quantidade={4}
content="
Construtora Premoaço
Somos apaixonados por construção! Nosso 
objetivo é eliminar todo o trabalho que 
divide seu projeto entre as áreas de arquitetura 
e construção, oferecendo os serviços de construção e 
design desde os primeiros esboços até a entrega do projeto.
"
/>
<Album
nome="ESTACIONAMENTO"
id="esta"
pasta="estacionamento"
fotos="ft-"
quantidade={5}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />
 <Album
nome="CONVIVÊNCIA"
id="conv"
pasta="convivencia"
fotos="ft-"
quantidade={5}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />
 <Album
nome="ADMINISTRATIVO"
id="adm"
pasta="adm"
fotos="ft-"
quantidade={5}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GUARITA"
id="gua"
pasta="guarita"
fotos="ft-"
quantidade={9}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GALPÃO-1"
id="gp1"
pasta="galpao1"
fotos="ft-"
quantidade={4}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GALPÃO-2"
id="gp2"
pasta="galpao2"
fotos="ft-"
quantidade={4}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GALPÃO-3"
id="gp3"
pasta="galpao3"
fotos="ft-"
quantidade={4}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GALPÃO-4"
id="gp4"
pasta="galpao4"
fotos="ft-"
quantidade={4}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />

<Album
nome="GALPÃO-5"
id="gp5"
pasta="galpao5"
fotos="ft-"
quantidade={4}
content="
A Premoaço tem mais de 40 anos de atuação no mercado 
imobiliário e se encontra hoje em fase de expansão nos 
segmentos de incorporação residencial, incorporação 
comercial e locação de imóveis corporativos, logísticos,  
entre outros.
"
 />
</>
)
}

