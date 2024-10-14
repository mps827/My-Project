import BaseRepository from "../BaseRepository";
const resource = "api/v1/Users";
interface UserInfo {
  access_token: string;
  hourly_rate: any;
  name: string;
  role: string[];
  username: string;
}
interface SignUpBody {
  firstName: string;
  lastName: string;
  nationalId: string;
  mobilePhoneNumber: string;
  password: string;
  email: string;
}
interface login {
  mobilePhoneNumber: string;
  password: string;
}
const authRepository = {
  register(body: SignUpBody) {
    return BaseRepository.post(`${resource}/register`, body);
  },
  login(body: { loginIdentifier: string; password: string }) {
    return BaseRepository.post(`${resource}/login`, body);
  },
};
export default authRepository;
