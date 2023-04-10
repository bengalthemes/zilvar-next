import { Portfolio } from "@/types";
import { API_ENDPOINTS } from "@/rest-client/client/api-endpoint";
import http from "@/rest-client/client/http-client";
import { useQuery } from "react-query";

const fetchPortfolios = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.PORTFOLIOS);
  return { portfolios: { data } };
};

export const usePortfoliosQuery = () => {
  return useQuery<{ portfolios: { data: Portfolio[] } }, Error>({
    queryKey: ["portfolios"],
    queryFn: fetchPortfolios,
  });
};
