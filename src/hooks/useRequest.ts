import errorHandle from '../utils/errorHandle';
async function Login(name: string, pwd: string) {
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('pwd', pwd);

    try {
        // const res = await fetch('http://localhost:5200/user/querymember', {
        // const res = await fetch('http://192.168.0.115:5200/login', {
        const res = await fetch('http://43.138.109.120:5200/login', {
            method: 'POST',
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