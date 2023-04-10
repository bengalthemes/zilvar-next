import { Testimonial } from "@/types";
import { API_ENDPOINTS } from "@/rest-client/client/api-endpoint";
import http from "@/rest-client/client/http-client";
import { useQuery } from "react-query";

export const fetchTestimonials = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.TESTIMONIALS);
  return { testimonials: { data } };
};

export const useTestimonialsQuery = () => {
  return useQuery<{ testimonials: { data: Testimonial[] } }, Error>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};
