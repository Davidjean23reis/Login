import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 90vh;
  animation: flipTitle 2s;
}
@keyframes flipTitle {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  max-width: 400px;
  padding: 20px;
  border-radius: 5px;  
  background: #6a7dfe;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
`;

export const Label = styled.label`
  font-size: 30px;
  font-weight: 600;
  color: #676767;
  height: 60px;
  color: #fff;
  font-family: Nunito, sans-serif;  
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #fff;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }
`;