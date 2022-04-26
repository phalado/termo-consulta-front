const HowToModalStyles = {
  normalSize: {
    outsideContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "#000000b0",
      zIndex: 1,
    },
    container: {
      marginLeft: "30%",
      marginTop: "5%",
      height: "80%",
      width: "40%",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "1%",
      overflow: "overlay",
      position: "relative",
    },
    title: {
      textAlign: "center",
      marginTop: 0,
    },
    text: {
      fontSize: "1em",
    },
    instructionOne: {
      display: "flex",
    },
    imageOne: {
      marginLeft: "20px",
      width: "50%",
    },
    instructionTwo: {
      display: "flex",
      flexDirection: "row-reverse",
      marginTop: "20px",
    },
    imageTwo: {
      marginRight: "20px",
      width: "30%",
    },
    instructionThree: {
      display: "flex",
      marginTop: "20px",
    },
    imageThree: {
      marginLeft: "20px",
      width: "50%",
    },
  },
  smallSize: {
    outsideContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "#000000b0",
      zIndex: 1,
    },
    container: {
      marginLeft: "10%",
      marginTop: "5%",
      height: "80%",
      width: "80%",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "1%",
      overflow: "overlay",
      position: "relative",
    },
    title: {
      textAlign: "center",
      marginTop: 0,
      fontSize: "1.5em",
      marginBottom: "8px",
    },
    text: {
      fontSize: "0.65em",
    },
    instructionOne: {},
    imageOne: {
      marginLeft: "20%",
      width: "60%",
    },
    instructionTwo: {
      display: "flex",
      flexDirection: "row-reverse",
      marginTop: "10px",
    },
    imageTwo: {
      marginRight: "20px",
      width: "30%",
      height: "15%",
      alignSelf: "center",
    },
    instructionThree: {
      display: "flex",
      marginTop: "20px",
    },
    imageThree: {
      marginLeft: "20px",
      width: "50%",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "5px",
    right: "15px",
    width: "30px",
  },
  closeIconImage: {
    width: "30px",
    cursor: "pointer",
  },
  modalClosed: {
    display: "none",
  },
};

export default HowToModalStyles;
