import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectToIntroduction = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/guide/introduction');
  }, [router]);

  return null;
};

export default RedirectToIntroduction;
