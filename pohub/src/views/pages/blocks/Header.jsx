import styled from 'styled-components';

function Header(props) {
  return (
    <HeaderContainer>
      <Search/>
      <UserIcon />
    </HeaderContainer>
  )
}

function UserIcon(props) {
  return (
    <StyledIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </StyledIcon>
  )
}

export default Header;

const HeaderContainer = styled.header`
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  height: 1rem;
  width: 33.33%;
  background-color: white;
`;

const StyledIcon = styled.svg`
  height: 1rem;
  width: 1rem;
  background-color: #F2F4CB;
  border-radius: 50%;
`;