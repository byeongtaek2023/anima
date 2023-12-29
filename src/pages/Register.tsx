import React, { useState } from 'react';
import * as St from '../style/LoginStyle';
import { useNavigate } from 'react-router-dom';
import { supabase } from 'api/supabase/supabase';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerClickHandler = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) console.error(error);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.Container>
      <St.Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <St.LoginTitleWrapper>
          <St.LoginTitle>회원가입 또는</St.LoginTitle>
          <St.RegisterTitle
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </St.RegisterTitle>
        </St.LoginTitleWrapper>

        <St.IdInputBox>
          <St.IdLabel htmlFor="email">이메일</St.IdLabel>
          <St.IdInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
            id="email"
            value={email}
            placeholder="이메일을 입력해주세요."
            type="text"
          />
        </St.IdInputBox>

        <St.PasswordInputBox>
          <St.PasswordLabel htmlFor="password">비밀번호</St.PasswordLabel>
          <St.PasswordInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
        </St.PasswordInputBox>

        <>
          <St.RegisterButton
            onClick={() => {
              registerClickHandler();
            }}
          >
            회원가입
          </St.RegisterButton>
        </>

        <div>
          <p>소셜 로그인</p>
          <ul>
            <li>페이스북</li>
            <li>트위터</li>
            <li>카카오톡</li>
            <li>구글</li>
          </ul>

          <div>
            <St.RegisterButton
              onClick={() => {
                navigate('/login');
              }}
            >
              🤔 이미 회원이신가요?
            </St.RegisterButton>
          </div>
        </div>
      </St.Form>
    </St.Container>
  );
};

export default Register;
