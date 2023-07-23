import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import { Outlet } from 'react-router-dom';

function Auth() {
	return <Outlet />;
}

export default Auth;
