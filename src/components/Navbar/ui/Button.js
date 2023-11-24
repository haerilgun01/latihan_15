import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  background-color: ${({ variant }) => {
    if (variant === "primary") {
      return "#b81d24";
    } else if (variant === "secondary") {
      return "#b81d24";
    } else {
      return "#525252";
    }
  }};
`;

export const PrimaryButton = styled(Button)`
  /* Tambahan atau perubahan gaya khusus untuk varian primary */
  /* Contoh: */
  /* font-size: 1.2rem; */
  align-items: center;
  justify-content: center;
`;

export const SecondaryButton = styled(Button)`
  /* Tambahan atau perubahan gaya khusus untuk varian secondary */
  /* Contoh: */
  /* font-style: italic; */
`;

export default Button;

