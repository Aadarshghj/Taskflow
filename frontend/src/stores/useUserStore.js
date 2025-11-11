import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import axios from '../lib/axios'



export const useUserStore = create((set, get) => ({

    user: null,
    loading: false,
    isCheckingAuth: true,

   signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });
console.log(password,confirmPassword)
    if (password !== confirmPassword) {
        set({ loading: false });
        toast.error("Password doesn't match");
        return;
    }

    try {
        const res = await axios.post('/auth/signup', { name, email, password });
        set({ user: res.data });
        set({ loading: false });
        toast.success("Account created successfully!");
    } catch (error) {
        set({ loading: false });
        toast.error(error.response?.data?.message || "An error occurred");
    }
}
,
    login: async ({ email, password }) => {
        set({ loading: true });
        console.log(" loading");
        

        try {
            const res = await axios.post('auth/login', { email, password });
            set({ user: res.data.user });
            set({ loading: false });
            toast.success("Logged in successfully!");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.message || "An error occurred");
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const response = await axios.get("/auth/profile");
            console.log("CheckAuth successful, user data:", response.data); // Debug log
            set({ user: response.data, isCheckingAuth: false });
        } catch (error) {
            console.log("CheckAuth failed:", error.message);
            set({ isCheckingAuth: false, user: null });
        }
    },


	logout: async () => {
				try {
					await axios.post("/auth/logout");
					set({ user: null });
					toast.success("Logged out successfully!");
				} catch (error) {
					// Even if logout fails on server, clear user locally
					set({ user: null });
					toast.error("Logout failed, but you've been logged out locally");
				}
			},








}))