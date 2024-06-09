module.exports = {
    theme: {
        extend: {
            backgroundColor: {
                //主题背景颜色
                'dark-bg': '#161c24',
                'light-bg': '#ffffff',
                // 'content-l': '#FFFAFA',
                'content-l': '#f2f2f2',
                'content-d': '#212b36',
                //上面是小部分一块内容的背景颜色，与主体屏幕不同
                'darwer-dark': '#475569',
                'darwer-light': '#c6cbef',
                'themedarwer-d': '#212b36',
                'themedarwer-l': '#637381'
                // 可以继续添加更多的背景颜色
            },
            // 如果您需要为标签栏定义样式，可以在这里添加
            // 例如，为标签栏的每个标签定义一个类
            tabBar: {
                'tab-item': {
                    // 自定义样式
                },
            },
            textColor: {
                'darktext': '#f2f2f2',
                'lighttext': '#20232a',
            },
            common: {
                'primary': '#161c24',
                'content': '#212b36'
            },

        },
    },
};
