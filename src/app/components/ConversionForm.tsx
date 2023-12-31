import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  TextField,
} from "@radix-ui/themes";
import { Coin, CoinCodes, Conversion } from "../types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Component1Icon } from "@radix-ui/react-icons";
import FormTextInput from "./From/FormTextInput";
import FormSelect from "./From/FormSelect";

interface Props {
  coins: Coin[];
}

interface InitialValues {
  rate: number;
  fee: number;
  from: string;
  to: string;
}

const schema = Yup.object({
  rate: Yup.number().min(0, "must be positive").required("required"),
  fee: Yup.number().min(0, "must be positive").required("required"),
  from: Yup.string()
    .oneOf([CoinCodes.DZD, CoinCodes.PAYSERA, CoinCodes.USDT])
    .required("required"),
  to: Yup.string()
    .oneOf([CoinCodes.DZD, CoinCodes.PAYSERA, CoinCodes.USDT])
    .required("required"),
});

const FormControl = ({ children }: { children: React.ReactNode }) => (
  <Box my="4">{children}</Box>
);

export const ConversionForm = ({ coins }: Props) => {
  const options = coins.map((coin) => ({
    value: coin.code,
    name: coin.name,
  }));

  const initialValues: InitialValues = {
    rate: 1,
    fee: 0,
    from: options[0].value,
    to: options[1].value,
  };

  return (
    <Flex direction="column" gap="6" width="100%" style={{ maxWidth: "420px" }}>
      <Card size="3">
        <Heading size="6" align="center">
          Create a new Conversion
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
              <FormSelect name="from" label="from" options={options} />
            </FormControl>
            <FormControl>
              <FormSelect name="to" label="to" options={options} />
            </FormControl>

            <FormControl>
              <FormTextInput
                icon={<Component1Icon height="16" width="16" />}
                name="rate"
                type="number"
                label="rate"
              />
            </FormControl>
            <FormControl>
              <FormTextInput
                icon={<Component1Icon height="16" width="16" />}
                name="fee"
                type="number"
                label="fee"
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
