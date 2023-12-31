import { Box, Text, TextField } from "@radix-ui/themes";
import { useField } from "formik";
import { FormikTextInputProps } from "./FormTextInput.types";

export const FormTextInput = ({
  icon,
  name,
  placeholder,
  label,
  ...props
}: FormikTextInputProps) => {
  const [field, meta] = useField({ name });

  return (
    <Box my="2">
      <Box mb="3">
        <Text
          weight="bold"
          trim="both"
          style={{ textTransform: "capitalize" }}
          size={props.size || "2"}
          asChild
        >
          <label htmlFor={name}>{label}</label>
        </Text>
      </Box>
      <TextField.Root {...props}>
        <TextField.Slot>{icon}</TextField.Slot>
        <TextField.Input id={name} placeholder={placeholder} {...field} />
      </TextField.Root>
      {meta.error && meta.touched && (
        <Text size="1" color="red">
          {meta.error}
        </Text>
      )}
    </Box>
  );
};
