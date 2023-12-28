import Button from './blocks/Button';
import styled from 'styled-components';
/*import Logo from '../../logo.png';*/
import Logo from '../../testLogo.png';

function Login(props) {
  return (
    <Container>
      <Box>
        <LogoBox>
          <Img alt="Logo" src={Logo} />
        </LogoBox>
        <LoginBox>
          <LoginForm>
            <Lable htmlFor='id'>
              ID
            </Lable>
            <Input id="id" placeholder="Enter your ID" type="text"/>
            <Lable htmlFor="password">
              PASSWORD
            </Lable>
            <Input id="password" placeholder="Enter your password" type="password"/>
          </LoginForm>
          <div>
            <ButtonBox>
              <Button $color='#f59e0b' $hovercolor='#d97706'>
                SIGN IN
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button $color='#4CAF50' $hovercolor='#45a049'>
                Sign up
              </Button>
              <Button $color='#f44336' $hovercolor='#d32f2f'>
                Forgot password?
              </Button>
            </ButtonBox>
          </div>
        </LoginBox>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f3f4f6; 
`;

const Box = styled.div`
  height: 50vh;
  min-height: 300px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LogoBox = styled.div`
  border-radius: 0.375rem; 
  overflow: hidden;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background-color: #ffffff;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const LoginBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Lable = styled.label`
  font-size: 0.5rem;
  font-weight: 500;
  color: #4b5563;
`;

const Input = styled.input`
  margin: 0.25rem 0;
  padding: 4px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  placeholder: #9ca3af;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.25);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  hegith:100%;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
`;

export default Login;
