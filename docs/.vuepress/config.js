module.exports = {
    host: '127.0.0.1',
    port: 8088,
    base: '/', // 设置站点根路径
    title: 'Hengguao Blog',
    description: 'Hengguao Blog',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    // dest: './dist', // 设置build输出目录
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        repo: 'hengguao', // /具体repo名
    	// docsRepo: 'hengguao', // git文档仓库
        // docsBranch: 'master', // git仓库分支
        // docsDir: 'docs', // 仓库下的文件夹
        // editLinks: true, // 是否开启编辑链接
        // editLinkText: '在 GitHub 上编辑此页', // 链接字段
        serviceWorker: {
            updatePopup: {
                // 刷新内容的弹窗
                message: '就在刚刚，Hengguao更新了内容',
                buttonText: '点这里'
            }
        },
        nav: [
            { text: '首页', link: '/' },
            { text: 'JAVA', 
            	items: [
                	{ text: 'JAVA基础', link: '/java/' },
               		{ text: 'JDK之JVM', link: '/java/jvm/' },
               		{ text: 'JDK之核心类', link: '/java/class/' }
                ]
        	},
            { text: 'SPRING',
				items: [
                	{ text: '设计模式', link: '/spring/' },
               		{ text: 'Spring核心', link: '/spring/core/' },
               		{ text: 'Spring组件', link: '/spring/module/' },
               		{ text: 'SpringBoot', link: '/spring/springboot/' },
               		{ text: 'SpringCloud', link: '/spring/springcloud/' }
                ]
            },
            { text: '联系我', link: '/contact/' }
            // {
            //     text: '下拉列表',
            //     items: [
            //         { text: '指南', link: '/guide/' },
            //         { text: '博客', link: 'https://blog.hengguao.top' }
            //     ]
            // }
        ],
        sidebar: {
            '/guide/': [{
                title: '指南',
                collapsable: false, // 可选的, 默认值是true
                // sidebarDepth: 2,	// 可选的, 默认值是1
                children: [
                    '',
                    'structure'
                ]
            }]
        },
        sidebarDepth: 2, // 提取markdown中h2和h3标题，显示在侧边栏
        // lastUpdated: '上次更新', // 文档更新时间，文件git最后提交的时间
    	// nextLinks: true, // 设置为false可禁用所有页面的下一篇链接
    	// prevLinks: true, // 设置为false可禁用所有页面的上一篇链接
    	// displayAllHeaders: true, // 显示所有页面的标题链接，默认false
    }
}