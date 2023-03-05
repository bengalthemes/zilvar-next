import { Brand, Service, Testimonial } from "@/types";
import { API_ENDPOINTS } from "./client/api-endpoint";
import http from "./client/http-client";

export const fetchServices = async () => {
  const { data } = await http.get(API_ENDPOINTS.SERVICES);
  return data as Service[];
};

export const fetchTestimonials = async () => {
  const { data } = await http.get(API_ENDPOINTS.TESTIMONIALS);
  return data as Testimonial[];
};

export const fetchBrands = async () => {
  const { data } = await http.get(API_ENDPOINTS.BRANDS);
  return data as Brand[];
};
