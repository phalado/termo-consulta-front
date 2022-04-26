import React from "react";
import styles from "../styles/HowToModal";
import PropTypes from "prop-types";

const HowToModal = (props) => {
  const { styleSize, modalOpen, setModalOpen } = props;
  const style = styles[styleSize];

  const closeIcon = () => {
    return (
      <div style={styles.closeIcon}>
        <img
          style={styles.closeIconImage}
          src={"./contents/images/xIcon.png"}
          alt="Close icon"
          onClick={() => setModalOpen(false)}
          title="Fechar ajuda"
        />
      </div>
    );
  };

  const outsideContainerStyle = modalOpen
    ? style.outsideContainer
    : styles.modalClosed;

  return (
    <div style={outsideContainerStyle}>
      <div style={style.container}>
        <h1 style={style.title}>Como usar:</h1>
        <div style={style.instructionOne}>
          <p style={style.text}>
            Adicione uma letra em um dos cinco espaços superiores quando tiver
            certeza da posição da mesma. Ela ficará verde no teclado virtual e o
            espaço de respostas mostrará todas as palavras que possuem esta
            letra na determinada posição.
          </p>
          <img
            style={style.imageOne}
            src={"./contents/images/green_letter.gif"}
            alt="Green letter"
          />
        </div>
        <div style={style.instructionTwo}>
          <div>
            <p style={style.text}>
              Quando souber que uma letra pertence à resposta desejada, basta
              clicar na letra no teclado virtual. Ela ficará amarela.
            </p>
            <p style={style.text}>
              Um segundo clique fará a letra ficar vermelha e a adicionará à
              lista de letras excluídas. O resultado mostrará palavras sem essas
              letras
            </p>
          </div>
          <img
            style={style.imageTwo}
            src={"./contents/images/keyboard.gif"}
            alt="Keyboard example"
          />
        </div>
        <div style={style.instructionThree}>
          <div>
            <p style={style.text}>
              Não economize. Quantos mais dicas você marcar maior a precisão das
              repostas.
            </p>
            <p style={style.text}>
              Mas lembre-se que as palavras tem apenas 5 letras. Mais de 5
              letras marcadas em amarelo não retornará nenhum resultado.
            </p>
            <p style={style.text}>
              Sugestões, comentários, dúvidas ou para me pagar uma coxinha você
              pode me mandar um email (phalado@gmail.com) ou me procurar no{" "}
              <a
                href="https://www.linkedin.com/in/raphael-cordeiro/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              .
            </p>
          </div>
          <img
            style={style.imageThree}
            src={"./contents/images/correctAnswer.gif"}
            alt="Correct answer example"
          />
        </div>
        {closeIcon()}
      </div>
    </div>
  );
};

HowToModal.propTypes = {
  styleSize: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default HowToModal;
