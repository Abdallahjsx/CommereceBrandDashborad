import { useQuery } from "@tanstack/react-query";
import { getInterests } from "../services";
export default function useGetInterests() {
    return useQuery({
        queryKey: ["interests"],
        queryFn: getInterests,
    });
}