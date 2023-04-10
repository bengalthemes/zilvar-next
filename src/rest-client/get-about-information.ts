import { About, Information } from "@/types";
import { API_ENDPOINTS } from "@/rest-client/client/api-endpoint";
import http from "@/rest-client/client/http-client";
import { useQuery } from "react-query";

const fetchAboutInformation = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.ABOUT);
  return { about: { data } };
};

export const useAboutInformationQuery = () => {
  return useQuery<{ about: { data: About } }, Error>({
    queryKey: ["about-info"],
    queryFn: fetchAboutInformation,
  });
};
