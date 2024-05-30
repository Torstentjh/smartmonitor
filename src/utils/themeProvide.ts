import theme from "../store/setting";
function ThemeSetting() {
    const { initTheme } = theme();
    return initTheme === 'light' ? 'light-content' : 'dark-content';
}

function tabbarSetting() {
    const { initTheme } = theme();
    return initTheme === 'light' ? '#FFFAFA' : '#20232a';
}
export { ThemeSetting, tabbarSetting };