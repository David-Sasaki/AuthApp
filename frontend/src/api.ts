const API_BASE_URL: string = "http://localhost:5000/api";

export const loginUser = async (email: string, password: string): Promise<any> => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        return response.json();
    } catch (error) {
        console.error("Login Error:", error);
    }
};
