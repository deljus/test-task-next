import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react";
import { faker } from "@faker-js/faker";

import { Table, Column, SortableColumn, Header, Body, BodyColumn } from "./index";

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
  <div className="p-4">
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
          <BodyColumn>{username}</BodyColumn>
          <BodyColumn>{email}</BodyColumn>
          <BodyColumn>{birthdate.toDateString()}</BodyColumn>
          <BodyColumn>{registeredAt.toDateString()}</BodyColumn>
        </Fragment>
      )}
    </Body>
  </Table>
  </div>
);

const meta = {
  title: "Components/Table",
  component: SimpleTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleTableStory: Story = {};
