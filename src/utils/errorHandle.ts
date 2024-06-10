const errorHandle = (status: number) => {
    let message;
    switch (status) {
        case 400:
            status = 400;
            message = "用户名或密码不能为空";
            break;
        case 401:
            status = 401;
            message = "用户名不存在";
            break;
        case 402:
            status = 402;
            message = "密码错误";
            break;
        case 415:
            status = 415;
            message = "用户已经存在";
            break;
        case 423:
            status = 423;
            message = '注册用户数量超过限制'
            break;
        case 424:
            status = 424;
            message = '请使用不同的密码'
            break;
        default:
            status = 404;
            message = 'not found---'
    }
    return { message, status };
}

export default errorHandle