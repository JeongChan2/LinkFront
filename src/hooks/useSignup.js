import { useMutation } from "@tanstack/react-query";
import api from '../utils/api';

// 회원가입 API 호출 함수
const signUp = async ({ username, password }) => {
  // const response = await api.post('/sign-up', { name, email, password });
  // return response.data;
  return api.post('/sign-up', {
    username,
    password
  });
};

// useMutation 훅
export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (newUser) => signUp(newUser),
    // onSuccess: (data) => {
    //   console.log(data);
    //   // accessToken 처리
    //   const { accessToken } = data;
    //   if (accessToken) {
    //     // accessToken을 로컬 스토리지 또는 상태로 저장
    //     // localStorage.setItem('accessToken', accessToken);
    //     console.log('Access Token:', accessToken);
    //   }
    // },
  });
};