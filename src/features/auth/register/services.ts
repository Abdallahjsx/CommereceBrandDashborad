import { apiCall } from "@/API/apiClient";
export async function getCountriesOptions() {
    const res = await apiCall.get("/Lookup/countries");
    return res.data;
}
export async function getCitiesOptions(country: string) {
    const res = await apiCall.get(`/Lookup/cities?country=${country}`);
    return res.data;
}
export async function getInterests() {
    const res = await apiCall.get("/Interest/Interests");
    return res.data;
}
