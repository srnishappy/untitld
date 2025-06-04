'use client';
import { useActionState } from 'react';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { actionFunction } from '@/utils/types';

const intialState = {
  message: '',
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, intialState);
  console.log('state', state);
  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
