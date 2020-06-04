import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Roboto;
  src: url("/fonts/Roboto-Regular.ttf");
}



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
  color:#00adee;
}

#root{
  font-family:Roboto,"sans-serif";
  color:rgba(0,0,0,0.87);
  display:flex;
  flex-direction:column;
  align-items:center;
 
}

.ripple {
  cursor: pointer;
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --top: 0px;
  --left: 0px;
  --height: 0px;
  --width: 0px;
}
.ripple.wave::after {
  content: "";
  position: absolute;
  border-radius: 100%;
  background: #00adee;
  width: var(--width);
  height: var(--height);
  top: var(--top);
  left: var(--left);
  animation: rippleDrop 0.6s linear;
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

.pulse:hover {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(0,173,238, 0.7);
    }

    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }

  .arise{
    animation: arise 0.5s linear;
    @keyframes arise{
      0%{
        opacity:0;
        transform:scale(0)
      }
      100%{
        opacity:1;
        transform:scale(1)
      }
    }
  }
`;
