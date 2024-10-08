import { useMutation } from "@tanstack/react-query";
import api from '../utils/api';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from './../redux/reducers/authenticateSlice';

let id = null;

// 회원가입 API 호출 함수
const signUp = async ({ username, password }) => {
  id = username;
  const response = await api.post('/sign-up', { username, password });
  return response;
};

// useMutation 훅
export const useSignUpMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toHome = () => {
    navigate(`/`);

  }

  return useMutation({
    mutationFn: (newUser) => signUp(newUser),
    onSuccess: (response) => {
      // console.log(response)
      const { accessToken } = response.data;  // 서버 응답에서 accessToken 추출

      if (accessToken) {
        // accessToken을 axios 헤더에 추가 (로컬 스토리지에 저장하지 않음)
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        
        console.log('Access Token:', accessToken);
        dispatch(authActions.LoginSuccess({ id }));
        toHome();
      }
    },
    onError: (error) => {
      console.error("에러 발생", error);
    },
  });
};