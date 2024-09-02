import axios from '@services/axios';

class AuthService {
    async signUp(body) {
        return await axios.post('/signup', body);
    }

    async signIn(body) {
        return await axios.post('/signin', body);
    }

    async forgotPassword(email) {
        return await axios.post('/forgot-password', {email});
    }

    async resetPassword(token, body) {
        return await axios.post(`/reset-password/${token}`, body);
    }
}

export const authService = new AuthService();