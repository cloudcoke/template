import { HeaderWrap, HeaderContainer, HeaderLogo, HeaderCategoryWrap, HeaderCategoryContainer, HeaderCategory } from "./styled";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HeaderWrap>
        <HeaderContainer>
          <HeaderLogo>Logo</HeaderLogo>
          <HeaderCategoryWrap>
            <HeaderCategoryContainer>
              <HeaderCategory>
                <NavLink to="/">Main</NavLink>
              </HeaderCategory>
              <HeaderCategory>
                <NavLink to="/board">Board</NavLink>
              </HeaderCategory>
              <HeaderCategory>
                <NavLink to="/login">Login</NavLink>
              </HeaderCategory>
            </HeaderCategoryContainer>
          </HeaderCategoryWrap>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
};
