import React from "react";
import { Table, Select } from "semantic-ui-react";
import "./styles.css";

function List() {
  const countryOptions = [
    { key: "Menor Preço", value: "Menor Preço", text: "Menor Preço" },
    { key: "Categoria", value: "Categoria", text: "Categoria" },
    { key: "Quantidade", value: "Quantidade", text: "Quantidade" },
  ];
  return (
    <div className="window">
      <div>
        <Select
          placeholder="Selecione"
          className="selectInput"
          options={countryOptions}
        />
      </div>
      <div>
        <Table>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Código</Table.HeaderCell>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Categoria</Table.HeaderCell>
              <Table.HeaderCell>Quantidade</Table.HeaderCell>
              <Table.HeaderCell>Valor</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1" textAlign="center">
              <Table.HeaderCell>1</Table.HeaderCell>
              <Table.HeaderCell>Sanduíche</Table.HeaderCell>
              <Table.HeaderCell>Lanche</Table.HeaderCell>
              <Table.HeaderCell>2</Table.HeaderCell>
              <Table.HeaderCell>R$ 5,00</Table.HeaderCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default List;
