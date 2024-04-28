import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const withAuth = (Component: React.ComponentType<any>) => {
  const WrappedComponent: React.FC<any> = (props) => {
    const router = useRouter();
    const { userToken } = useContext(AuthContext);

    useEffect(() => {
      if (!userToken) {
        router.push('/sign/login'); 
      }
    }, [userToken, router]);

    if (!userToken) {
      return null; 
    }
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuth;
