'use client';
import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';
const SignOutLinks = () => {
  const handleLohout = () => {
    toast('Logout Successfully');
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLohout}>
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
