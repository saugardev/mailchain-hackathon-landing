import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectToIntroduction = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/introduction');
  }, [router]);

  return null;
};

export default RedirectToIntroduction;
