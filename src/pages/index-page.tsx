import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/controls/input";
import { FormItem, Form } from "@/shared/ui/flat-form";

function IndexPage() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <FormItem label="user" name="user" >
        {props => <Input {...props}/>}
      </FormItem>
      <FormItem label="password" name="password" Component={Input} />
      <Button>Submit</Button>
    </Form>
  );
}

export { IndexPage };
