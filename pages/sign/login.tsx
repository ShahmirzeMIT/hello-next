import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { loginStyle } from '../../components/sign/style/loginStyle';
import FormLayout from '../layout/formLayout';
import InputText from '../../components/reasuable/input/inputText';
import signChanges from '../../components/sign/signChanges';
import ReausableButton from '../../components/reasuable/button/reausableButton';
import NavigateLink from '../../components/reasuable/link/navigateLink';
import authentication from '../../public/authentication.json';
import { AuthContext } from '../../components/utils/AuthContext';
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

    if (authenticatedUser !== undefined && authenticatedUser && authenticatedUser.email!=="") {
      setUserToken(authenticatedUser);
      toast.success('Login Successful');
      router.push('/home/home')
      localStorage.setItem('userToken', JSON.stringify(authenticatedUser));
    } else {
      toast.error('Invalid Email or Password');
      router.push('/sign/login');
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
