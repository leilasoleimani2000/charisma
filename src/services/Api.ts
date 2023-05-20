const BASE_URL = "https://fakestoreapi.com";
const Api = {
    async fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status}`);
        }
        return (await response.json()) as T;
    }
};

export default Api;