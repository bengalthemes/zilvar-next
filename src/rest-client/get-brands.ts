import { Brand } from "@/types";
import { API_ENDPOINTS } from "@/rest-client/client/api-endpoint";
import http from "@/rest-client/client/http-client";
import { useQuery } from "react-query";

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.BRANDS);
  return { brands: { data } };
};

export const useBrandsQuery = () => {
  return useQuery<{ brands: { data: Brand[] } }, Error>({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });
};
