import { Box, Button, Card, Flex, Heading } from "@radix-ui/themes";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { BadgeIcon, CodeIcon } from "@radix-ui/react-icons";
import FormTextInput from "./From/FormTextInput";

interface InitialValues {
  name: string;
  code: string;
}

const schema = Yup.object({
  code: Yup.string().required("required"),
  name: Yup.string().required("required"),
});

const FormControl = ({ children }: { children: React.ReactNode }) => (
  <Box my="4">{children}</Box>
);

export const CoinForm = () => {
  const initialValues: InitialValues = {
    code: "",
    name: "",
  };

  return (
    <Flex direction="column" gap="6" width="100%" style={{ maxWidth: "420px" }}>
      <Card size="3">
        <Heading size="6" align="center">
          Create a new Coins
        </Heading>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={schema}
        >
          <Form>
            <FormControl>
              <FormTextInput
                icon={<BadgeIcon height="16" width="16" />}
                name="name"
                type="name"
                label="name"
              />
            </FormControl>
            <FormControl>
              <FormTextInput
                icon={<CodeIcon height="16" width="16" />}
                name="code"
                type="code"
                label="code"
              />
            </FormControl>
            <FormControl>
              <Button variant="solid" type="submit" style={{ width: "100%" }}>
                Submit
              </Button>
            </FormControl>
          </Form>
        </Formik>
      </Card>
    </Flex>
  );
};
