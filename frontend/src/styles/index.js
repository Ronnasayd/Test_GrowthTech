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
}

#root{
  background:#fff;
  font-family:sans-serif;
  color:rgba(0,0,0,0.87);
  display:flex;
  flex-direction:column;
  align-items:center;
}

.ripple {
  overflow: hidden;
  position: relative;
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
