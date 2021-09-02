export const styles = () => ({
    root: {
        background: "#21252C",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      color: "#ffffff",
    },
    appBar: {
      background: "#21252C",
      color: "#ffffff",
    },
    icon: {
      padding: "10px",
    },
    title: {
      margin: "auto",
    },
    container: {
      display: "flex",
      flex: 1,
    },
    drawer: {
      marginTop:"50px",
      background: "#21252C",
      color: "#ffffff",
      position: "static",
      transition: "width .7s",
    },
    closed: {
      width: "0px",
    },
    opened: {
      width: "240px",
    },
    main: {
      flex: 1,
      background: "#21252C",
      color: "ffffff",
    },
    footer: {
      background: "#21252C",
      height: "50px",
      color: "#ffffff",
    },
  });