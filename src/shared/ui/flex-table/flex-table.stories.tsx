import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react";
import { faker } from "@faker-js/faker";

import { Table, Column, SortableColumn, Header, Body, Row } from "./index";

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

const SimpleTable = () => (
  <Table>
    <Header>
      <Column>Name</Column>
      <Column>Email</Column>
      <Column>Birth Date</Column>
      <SortableColumn>Registered At</SortableColumn>
    </Header>
    <Body<ReturnType<typeof createRandomUser>> data={users}>
      {({ userId, username, email, birthdate, registeredAt }) => (
        <Fragment key={userId}>
          <Row>{username}</Row>
          <Row>{email}</Row>
          <Row>{birthdate.toDateString()}</Row>
          <Row>{registeredAt.toDateString()}</Row>
        </Fragment>
      )}
    </Body>
  </Table>
);

const meta = {
  title: "Components/Table",
  component: SimpleTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleTableStory: Story = {};
