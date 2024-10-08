import api from '../utils/api';

// 새로운 accessToken 요청 함수
const refreshAccessToken = async () => {
  try {
    const response = await api.post('/auth/token');
    return response.data.accessToken;
  } catch (error) {
    console.error("토큰 갱신 중 오류 발생:", error);
    throw error;
  }
};

// Axios 인스턴스에 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    return response;  // 요청이 성공하면 응답 그대로 반환
  },
  async (error) => {
    const originalRequest = error.config;

    // 토큰 만료로 인한 401 에러인지 확인
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;  // 재요청 방지 플래그

      try {
        const newAccessToken = await refreshAccessToken();  // 새로운 토큰 요청
        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;  // 새로운 토큰 설정
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;  // 재요청에 새로운 토큰 추가

        return api(originalRequest);  // 원래 요청 재전송
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
        return Promise.reject(refreshError);  // 재전송 실패 시 에러 처리
      }
    }

    return Promise.reject(error);  // 다른 에러는 그대로 반환
  }
);
