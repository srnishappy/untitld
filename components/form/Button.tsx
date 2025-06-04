'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { RotateCcw } from 'lucide-react';
type btnSize = 'default' | 'sm' | 'lg';

type SubmitButtonProps = {
  classname?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ classname, size, text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${classname} capitalize`}
    >
      {pending ? <RotateCcw className="animate-spin" /> : text}
    </Button>
  );
};
