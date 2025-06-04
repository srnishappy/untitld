import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Button';
import FormContainer from '@/components/form/FormContainer';
import { createProfileAction } from '@/action/action';

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div>
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="Fist Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
            <FormInput
              name="userName"
              label="User Name"
              type="text"
              placeholder="User"
            />
          </div>
          <SubmitButton text="Create" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
