import React from "react";
import { Conversion } from "../types";
import { Table } from "@radix-ui/themes";

type Props = {
  data: Conversion[];
};

export const ConversionsTable = ({ data }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>From</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>To</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Rate</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Fees</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.length > 0 &&
          data.map((item) => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>{item.from}</Table.RowHeaderCell>
              <Table.Cell>{item.to}</Table.Cell>
              <Table.Cell>{item.rate}</Table.Cell>
              <Table.Cell>{item.fee}</Table.Cell>
            </Table.Row>
          ))}
        {data.length === 0 && (
          <Table.Row>
            <Table.Cell>No Data Found</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
};
