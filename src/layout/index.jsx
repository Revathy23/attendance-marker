import Header from "./Header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    width: "100%",
  },
  content: {
    flex: "1",
    width: "calc(100% - 40px)",
    backgroundColor: "white",
    marginLeft: "40px", 
    overflow: "auto",
     "&::-webkit-scrollbar": {
      width: "1px",
      height: "1px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "1px",
    },
    scrollbarWidth: "thin",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
