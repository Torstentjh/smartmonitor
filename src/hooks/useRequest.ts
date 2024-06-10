import errorHandle from '../utils/errorHandle';
// import {REACT_APP_DevApi} from '@env';
type prop = {
    method: string,
    body: { name: string, pwd: string }
}
async function Login({ body, method }: prop) {
    const formData = new URLSearchParams();
    formData.append('name', body.name);
    formData.append('pwd', body.pwd);

    try {

        const res = await fetch(`${process.env.REACT_APP_DevApi}/login`, {
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString()
        });

        const ll = await res.json()
        console.log('登陆', res.status);
        console.log('登陆', ll);
        if (res.status != 200) {
            return errorHandle(res.status)
        } else {
            return ll
        }

    } catch (error) {
        console.log('登陆', error);

    }
}

export default Login;