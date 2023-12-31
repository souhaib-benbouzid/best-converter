import { FormikHandlers } from "formik";

interface Option {
  name: string;
  value: string;
}

export interface FormSelectProps {
  name: string;
  options: Option[];
  onChange?: FormikHandlers["handleChange"];
  label: string;
  placeholder?: string;
  size?: "1" | "2" | "3";
}
