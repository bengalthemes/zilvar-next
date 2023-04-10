import { Service } from "@/types";
import { API_ENDPOINTS } from "@/rest-client/client/api-endpoint";
import http from "@/rest-client/client/http-client";
import { useQuery } from "react-query";

const fetchServices = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.SERVICES);
  return { services: { data } };
};

export const useServicesQuery = () => {
  return useQuery<{ services: { data: Service[] } }, Error>({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
};
