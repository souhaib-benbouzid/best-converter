import { Box, Select, Text, TextField } from "@radix-ui/themes";
import { useField } from "formik";
import { FormSelectProps } from "./FormSelect.types";

export const FormSelect = ({
  name,
  label,
  placeholder,
  options,
  ...props
}: FormSelectProps) => {
  const [field, meta, helpers] = useField({ name });

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
      <Select.Root
        value={field.value}
        onValueChange={(value) => helpers.setValue(value)}
      >
        <Select.Trigger placeholder={placeholder} />
        <Select.Content position="popper">
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      {meta.error && meta.touched && (
        <Text size="1" color="red">
          {meta.error}
        </Text>
      )}
    </Box>
  );
};
