import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <Form.Select aria-label="Default select example" onChange={props.Change}>
    <option  defaultValue hidden  value="">{props.select}</option>
      {props.country.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.value}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default Select;
