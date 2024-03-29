import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const NavLink = styled(Link)(({ theme }) => ({
  fontSize: "20px",
  color: "black",
  fontWeight: 500,
  fontFamily: "Pretendard",
  cursor: "pointer",
  textDecoration: "none",
  transition: "0.3s",
  "&:hover": {
    color: "#0992E3",
  },
}));

export const NavbarLinksBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  [theme.breakpoints.down("1250")]: {
    display: "none",
  },
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: "pointer",
  color: "#0992E3",
  fontSize: "2.3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

export const NavbarContainer = styled("div")(
  ({ theme, backgroundColor, visible }) => ({
    position: "fixed",
    zIndex: "100",
    top: visible ? "0" : "-110px",
    left: "0",
    right: "0",
    display: "flex",
    transition: "all 0.3s linear",
    height: "90px",
    padding: "0 13vw",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottom: backgroundColor === "none" ? "none" : "1px solid #eee",
    [theme.breakpoints.down("1250")]: {
      padding: " 0 2vw",
    },
  })
);

export const NavbarLeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const NavbarRightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gaps: "1rem",
});
export const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  height: "85px",
  width: "85px",
  marginRight: theme.spacing(5),
}));

export const ButtonLink = styled(Link)(({ theme }) => ({
  fontSize: "20px",
  color: "#0992E3",
  fontWeight: 600,
  fontFamily: "Pretendard",
  cursor: "pointer",
  textDecoration: "none",
  marginRight: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
  border: "2px solid #0992E3",
  borderRadius: "3px",
  padding: "11px 15px",
  transition: "0.2s",

  "&:hover": {
    color: "white",
    backgroundColor: "#0992E3",
  },
  [theme.breakpoints.down("410")]: {
    display: "none",
  },
}));
