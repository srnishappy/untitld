import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Button';
import FormContainer from '@/components/form/FormContainer';
import { createLandMarkAction } from '@/action/action';

const CreateProfile = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create</h1>
      <div>
        <FormContainer action={createLandMarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />
          </div>
          <SubmitButton text="Create" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
