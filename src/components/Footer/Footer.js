import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <footer className="Footer">
        <h2 className="footer__title">My Movie</h2>
        <p className="footer__author">Created by Hapis</p>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #b81d24;
  padding: 1rem;
  text-align: center;

.footer__title {
  margin-bottom: 1rem;
  color: #221f1f;
  font-size: x-large;
  font-style: "Lexend";
  
}

.footer__author {
  margin-bottom: 1rem;
  color: #f5f5f1;
}

/* Media Screen */
@media (min-width: 768px) {
}

/* Large Screen */
@media (min-width: 992px) {
}
`

export default Footer;
