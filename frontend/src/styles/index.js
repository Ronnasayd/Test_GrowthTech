import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,body,html{
  margin:0;
  padding:0;
  border:0;
  box-sizing:border-box; 
  outline:none;
  list-style:none;
}

html,body,#root{
  height:100%;
}

html{
  font-size:10px;
  scroll-behavior:smooth;
}
body{
  background-image: url("/texture.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* background-color: #02202b; */
    
  
}
.texture-cover{
  position:fixed;
      height:100%;
      width:100%;
      background:#02202bdb;
      z-index:-1;
}
a{
  text-decoration:none;
}

#root{
  font-family:sans-serif;
  color:rgba(0,0,0,0.87);
  display:flex;
  flex-direction:column;
  align-items:center;
}

.ripple {
  overflow: hidden;
  /* position: absolute; */
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .ripple-child {
    background: rgb(0,174,239);
    position: absolute;
    border-radius: 100%;
    animation: rippleDrop 0.5s linear;
    opacity: 0;
  }
}

@keyframes rippleDrop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
  0% {
    transform: scale(0);
    opacity: 1;
  }
}

`;
