import * as S from "./styles";

const Button = ({ background, color, width, children, onClick }) => (
  <S.Button background={background} color={color} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
