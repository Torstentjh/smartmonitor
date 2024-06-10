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
        case 416:
            status = 416;
            message = "需要登录使用密码查看该文章，请尝试登录/token失效";
            break;
        case 420:
            status = 420;
            message = "发布失败/标题或内容不能为空";
            break;
        case 421:
            status = 421;
            message = '文章内容没有修改/重复';
            break;
        case 422:
            status = 422;
            message = '此用户没有权限查看该内容(请尝试使用密码)'
            break;
        case 250:
            status = 250;
            message = '该用户没有权限使用此功能'
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