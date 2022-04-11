import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Formik, FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import {
  ContainerLogin,
  DivForm,
  TitleLogin,
  Input,
  ContainerForm,
  Botao,
  DivLogo,
  DivInfo,
  Subtitulo,
  Paragrafo,
  DivCadastrar,
  SubCadastrar,
  SignUp,
  TrocarSenha,
  Error,
} from "./Login.styles";
import { loginDTO } from "../../model/LoginDTO";
import logoForm from "../../images/logo.png";
const Login = () => {
  const { handleLogin } = useContext<any>(AuthContext);
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      navigate("/");
    }
  }, []);

  const formikProps = useFormik({
    initialValues: {
      usuario: "",
      senha: "",
    },
    validationSchema: Yup.object().shape({
      usuario: Yup.string().required("Preencha o campo de usuário!"),
      senha: Yup.string().required("Preencha o campo de senha!"),
    }),
    onSubmit: async (
      values: loginDTO,
      { setSubmitting }: FormikHelpers<loginDTO>
    ) => {
      handleLogin(formikProps.values);
      setSubmitting(false);
    },
  });

  return (
    <div>
      <ContainerLogin>
        <ContainerForm onSubmit={formikProps.handleSubmit}>
          <DivLogo>
            <img src={logoForm} width="84px" height="84px"></img>
            <TitleLogin>Login Vemser</TitleLogin>
          </DivLogo>
          <DivInfo>
            <Subtitulo>Log In to Dashboard Kit</Subtitulo>
            <Paragrafo>Enter your email and password below</Paragrafo>
          </DivInfo>
          <DivForm>
            <label htmlFor="usuario">Usuário</label>
            <Input
              name="usuario"
              id="usuario"
              placeholder="Digite o nome do usuário"
              value={formikProps.values.usuario}
              onChange={formikProps.handleChange}
            />
            {formikProps.errors.usuario && formikProps.touched.usuario ? (
              <Error>{formikProps.errors.usuario}</Error>
            ) : null}
          </DivForm>
          <DivForm>
            <label htmlFor="senha">Senha</label>
            <Input
              type={pass ? "password" : "text"}
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
              value={formikProps.values.senha}
              onChange={formikProps.handleChange}
            />
            <TrocarSenha onClick={() => setPass(!pass)}>
              {pass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </TrocarSenha>
            {formikProps.errors.senha && formikProps.touched.senha ? (
              <Error>{formikProps.errors.senha}</Error>
            ) : null}
          </DivForm>
          <Botao type="submit">Login</Botao>
          <DivCadastrar>
            <SubCadastrar>Don't have an account? </SubCadastrar>
            <SignUp>Sign up</SignUp>
          </DivCadastrar>
        </ContainerForm>
      </ContainerLogin>
    </div>
  );
};

export default Login;
