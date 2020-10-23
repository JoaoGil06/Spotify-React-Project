import React from "react";

import { loginUrl } from "../../api/spotify";
import { Container, Logo, Button } from "./styles";

const Login = () => {
  return (
    <Container>
      <Logo src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />

      <Button href={loginUrl}>Login com spotify</Button>
    </Container>
  );
};

export default Login;
