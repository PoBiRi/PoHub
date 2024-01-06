import styled from 'styled-components';

function Header(props) {
  const {setSidebarToggle, sidebarToggle} = props;

  const openSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  }

  const Menu = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        onClick={openSidebar}
        className="feather feather-menu">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    )
  }

  const Home = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="feather feather-home">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  }

  return (
    <HeaderContainer>
      <Menu/>
      <Home />
      <Search>Nothing Here</Search>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  background-color: #FFF0F5;
  height: 1rem;
  display: flex;
  align-items: center;

  & > * {
    margin: 0 4px;
  }
`;

const Search = styled.div`
  font-size: 12px;
  height: 18px;
  width: 33.33%;
  background-color: white;
`;