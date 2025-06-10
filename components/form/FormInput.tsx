import { Input } from '../ui/input';
import { Label } from '../ui/label';

type FormInputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, label, placeholder, defaultValue } = props;

  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;
