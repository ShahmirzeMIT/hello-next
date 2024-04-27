import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { loginStyle } from '../../public/sign/style/loginStyle';
import FormLayout from '../layout/formLayout';
import InputText from '../../public/reasuable/input/inputText';
import signChanges from '../../public/sign/signChanges';
import ReausableButton from '../../public/reasuable/button/reausableButton';
import NavigateLink from '../../public/reasuable/link/navigateLink';
import authentication from '../../public/authentication.json';
import { AuthContext } from '../../public/utils/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function Login() {
  const { formData } = signChanges();
  const router=useRouter()
  const { userToken,setUserToken } = useContext(AuthContext);

  const handleClick = () => {
    const authenticatedUser = authentication.find(
      (user) => user.email === formData.email.value && user.password === formData.password.value
    );

    if (authenticatedUser !== undefined && authenticatedUser) {
      setUserToken(authenticatedUser);
      toast.success('Login Successful');
      router.push('/home/home')
      localStorage.setItem('userToken', JSON.stringify(authenticatedUser));
    } else {
      toast.error('Invalid Email or Password');
    }
  };

  return (
    <Box sx={{ ...loginStyle.signBody }}>
      <Box sx={{ ...loginStyle.boxWidth }}>
        <Typography variant='h1' sx={{ ...loginStyle.typgraphy }}>Login First Get Ride</Typography>
      </Box>
      <Box sx={{ ...loginStyle.boxWidth }}>
        <Box sx={{ ...loginStyle.formContainer }}>
          <FormLayout>
            <InputText data={formData.email} />
            <InputText data={formData.password} />
            <NavigateLink data={formData.dontHaveAccount} />
            <Box sx={{ ...loginStyle.btnBox }} onClick={handleClick}><ReausableButton data={formData.login} /></Box>
          </FormLayout>
        </Box>
      </Box>
    </Box>
  );
}
