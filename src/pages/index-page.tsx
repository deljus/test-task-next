import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/controls/input";
import { FormItem, Form } from "@/shared/ui/flat-form";

function IndexPage() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <FormItem label="user" name="user">
        <Input />
      </FormItem>
      <FormItem label="password" name="password">
        <Input type="password" />
      </FormItem>
      <Button>Submit</Button>
    </Form>
  );
}

export { IndexPage };
