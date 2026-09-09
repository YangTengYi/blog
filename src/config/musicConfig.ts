import type { MusicPlayerConfig, MusicVisualizerConfig } from "../types/musicConfig";

// 音乐可视化配置
export const musicVisualizerConfig: MusicVisualizerConfig = {
	// 振幅倍数
	amplitude: 1.5,
	// 频谱平滑系数 (0-1)
	smoothing: 0.8,
	// FFT 大小 (32-32768, 必须是 2 的幂)
	fftSize: 256,
	// 地形网格密度
	gridSize: 64,
	// 自动旋转速度 (弧度/秒)
	rotationSpeed: 0.2,
	// 页面背景色（按明暗主题）
	background: {
		dark: "#0a0a15",
		light: "#ffffff",
	},
};

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否显示迷你播放器
	showMiniPlayer: true,
	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// 是否同步全局播放器（当进入 /music 页面时）
	// 设置为 true：侧边栏播放器完全同步 /music 页面的播放列表
	// 设置为 false：侧边栏使用独立的本地/Meting 配置（默认）
	syncWithGlobalPlayer: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "9917182010",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "春泥",
				artist: "余超颖",
				url: "/assets/music/春泥（余超颖）.mp3",
				cover: "/assets/music/cover/春泥.jpg",
				lrc: "/assets/music/lrc/春泥 - 余超颖.lrc",
			},
			{
				name: "当你",
				artist: "心凌",
				url: "/assets/music/当你（王心凌）.mp3",
				cover: "/assets/music/cover/当你.jpg",
				lrc: "/assets/music/lrc/当你 - 王心凌.lrc",
			},
			{
				name: "第57次取消发送",
				artist: "菲菲公主",
				url: "/assets/music/第57次取消发送（菲菲公主）.mp3",
				cover: "/assets/music/cover/第57次取消发送.jpg",
				lrc: "/assets/music/lrc/第57次取消发送 - 菲菲公主（陆绮菲）.lrc",
			},
			{
				name: "冬眠",
				artist: "司南",
				url: "/assets/music/冬眠（司南）.mp3",
				cover: "/assets/music/cover/冬眠.jpg",
				lrc: "/assets/music/lrc/冬眠 - 司南.lrc",
			},
			{
				name: "堕",
				artist: "旺仔小乔",
				url: "/assets/music/堕（旺仔小乔）.mp3",
				cover: "/assets/music/cover/堕.jpg",
				lrc: "/assets/music/lrc/堕 (小乔版) - 旺仔小乔.lrc",
			},
			{
				name: "凤凰花开的路口",
				artist: "藤柒吖",
				url: "/assets/music/凤凰花开的路口（藤柒吖）.mp3",
				cover: "/assets/music/cover/凤凰花开的路口.jpg",
				lrc: "/assets/music/lrc/凤凰花开的路口（毕业版） - 藤柒吖.lrc",
			},
			{
				name: "故事终章",
				artist: "程响",
				url: "/assets/music/故事终章（程响）.mp3",
				cover: "/assets/music/cover/故事终章.jpg",
				lrc: "/assets/music/lrc/故事终章 - 程响.lrc",
			},
			{
				name: "寂寞烟火",
				artist: "蓝心羽",
				url: "/assets/music/寂寞烟火 - 蓝心羽.mp3",
				cover: "/assets/music/cover/寂寞烟火.jpg",
				lrc: "/assets/music/lrc/寂寞烟火 - 蓝心羽.lrc",
			},
			{
				name: "镜中渊",
				artist: "周林枫",
				url: "/assets/music/镜中渊 - 周林枫.mp3",
				cover: "/assets/music/cover/镜中渊.jpg",
				lrc: "/assets/music/lrc/镜中渊 - 周林枫.lrc",
			},
			{
				name: "笼",
				artist: "张碧晨",
				url: "/assets/music/笼 - 张碧晨.mp3",
				cover: "/assets/music/cover/笼.jpg",
				lrc: "/assets/music/lrc/笼 - 张碧晨.lrc",
			},
			{
				name: "沦陷",
				artist: "王靖雯",
				url: "/assets/music/沦陷 - 王靖雯.mp3",
				cover: "/assets/music/cover/沦陷.jpg",
				lrc: "/assets/music/lrc/沦陷 - 王靖雯.lrc",
			},
			{
				name: "落空",
				artist: "印子月",
				url: "/assets/music/落空 - 印子月.mp3",
				cover: "/assets/music/cover/落空.jpg",
				lrc: "/assets/music/lrc/落空 - 印子月.lrc",
			},
			{
				name: "落在生命里的光",
				artist: "尹昔眠",
				url: "/assets/music/落在生命里的光 - 尹昔眠.mp3",
				cover: "/assets/music/cover/落在生命里的光.jpg",
				lrc: "/assets/music/lrc/落在生命里的光 - 尹昔眠.lrc",
			},
			{
				name: "迷失在梦中",
				artist: "韩可可",
				url: "/assets/music/迷失在梦中 - 韩可可.mp3",
				cover: "/assets/music/cover/迷失在梦中.jpg",
				lrc: "/assets/music/lrc/迷失在梦中 - 韩可可.lrc",
			},
			{
				name: "青春请回答",
				artist: "梵胜",
				url: "/assets/music/青春请回答 深外戏剧团合唱版 - 梵胜.mp3",
				cover: "/assets/music/cover/青春请回答.jpg",
				lrc: "/assets/music/lrc/青春请回答 深外戏剧团合唱版 - 梵胜.lrc",
			},
			{
				name: "情意结",
				artist: "陈慧娴",
				url: "/assets/music/情意结 - 陈慧娴.mp3",
				cover: "/assets/music/cover/情意结.jpg",
				lrc: "/assets/music/lrc/情意结 - 陈慧娴.lrc",
			},
			{
				name: "如果的事",
				artist: "范玮琪、张韶涵",
				url: "/assets/music/如果的事 - 范玮琪、张韶涵.mp3",
				cover: "/assets/music/cover/如果的事.jpg",
				lrc: "/assets/music/lrc/如果的事 - 范玮琪、张韶涵.lrc",
			},
			{
				name: "如愿",
				artist: "王菲",
				url: "/assets/music/如愿.mp3",
				cover: "/assets/music/cover/如愿.jpg",
				lrc: "/assets/music/lrc/如愿.lrc",
			},
			{
				name: "少一点天份",
				artist: "孙盛希",
				url: "/assets/music/少一点天份 - 孙盛希.mp3",
				cover: "/assets/music/cover/少一点天分.jpg",
				lrc: "/assets/music/lrc/少一点天份 - 孙盛希.lrc",
			},
			{
				name: "时光背面的我",
				artist: "刘至佳、韩瞳",
				url: "/assets/music/时光背面的我 - 刘至佳、韩瞳.mp3",
				cover: "/assets/music/cover/时光背面着我.jpg",
				lrc: "/assets/music/lrc/时光背面的我 - 刘至佳、韩瞳.lrc",
			},
			{
				name: "叹云兮",
				artist: "鞠婧祎",
				url: "/assets/music/叹云兮 - 鞠婧祎.mp3",
				cover: "/assets/music/cover/叹云兮.jpg",
				lrc: "/assets/music/lrc/叹云兮 - 鞠婧祎.lrc",
			},
			{
				name: "唯一",
				artist: "G.E.M. 邓紫棋",
				url: "/assets/music/唯一 - G.E.M. 邓紫棋.mp3",
				cover: "/assets/music/cover/唯一.jpg",
				lrc: "/assets/music/lrc/唯一 - G.E.M. 邓紫棋.lrc",
			},
			{
				name: "我怀念的",
				artist: "孙燕姿",
				url: "https://ph.0824.uk/file/music/我怀念的孙燕姿.m4a",
				cover: "https://ph.0824.uk/file/music/我怀念的孙燕姿.jpg",
				lrc: "https://ph.0824.uk/file/music/我怀念的孙燕姿.lrc",
			},
			{
				name: "我看过",
				artist: "白允y",
				url: "/assets/music/我看过 (cover холли ветролов) - 白允y.mp3",
				cover: "/assets/music/cover/我看过.jpg",
				lrc: "/assets/music/lrc/我看过 (cover холли ветролов) - 白允y.lrc",
			},
			{
				name: "我是真的爱上你",
				artist: "王杰",
				url: "/assets/music/我是真的爱上你 - 王杰.mp3",
				cover: "/assets/music/cover/我是真的爱上你.jpg",
				lrc: "/assets/music/lrc/我是真的爱上你 - 王杰.lrc",
			},
			{
				name: "下一个天亮",
				artist: "郭静",
				url: "/assets/music/下一个天亮 - 郭静.mp3",
				cover: "/assets/music/cover/下一个天亮.jpg",
				lrc: "/assets/music/lrc/下一个天亮 - 郭静.lrc",
			},
			{
				name: "小半",
				artist: "陈粒",
				url: "/assets/music/小半 - 陈粒.mp3",
				cover: "/assets/music/cover/小半.jpg",
				lrc: "/assets/music/lrc/小半 - 陈粒.lrc",
			},
			{
				name: "演员",
				artist: "薛之谦",
				url: "/assets/music/演员 - 薛之谦.mp3",
				cover: "/assets/music/cover/演员.jpg",
				lrc: "/assets/music/lrc/演员 - 薛之谦.lrc",
			},
			{
				name: "一样的月光",
				artist: "徐佳莹",
				url: "/assets/music/一样的月光 - 徐佳莹.mp3",
				cover: "/assets/music/cover/一样的光.jpg",
				lrc: "/assets/music/lrc/一样的月光 - 徐佳莹.lrc",
			},
			{
				name: "雨爱",
				artist: "杨丞琳",
				url: "/assets/music/雨爱 - 杨丞琳.mp3",
				cover: "/assets/music/cover/雨爱.jpg",
				lrc: "/assets/music/lrc/雨爱 - 杨丞琳.lrc",
			},
			{
				name: "雨过后的风景",
				artist: "Dizzy Dizzo (蔡诗芸)",
				url: "/assets/music/雨过后的风景 - Dizzy Dizzo (蔡诗芸).mp3",
				cover: "/assets/music/cover/雨过后的风景.jpg",
				lrc: "/assets/music/lrc/雨过后的风景 - Dizzy Dizzo (蔡诗芸).lrc",
			},
			{
				name: "越长大越孤单",
				artist: "牛奶咖啡",
				url: "/assets/music/越长大越孤单 - 牛奶咖啡.mp3",
				cover: "/assets/music/cover/越长大越孤单.jpg",
				lrc: "/assets/music/lrc/越长大越孤单 - 牛奶咖啡.lrc",
			},
			{
				name: "陨落",
				artist: "Fanfan",
				url: "/assets/music/陨落 - Fanfan.mp3",
				cover: "/assets/music/cover/陨落.jpg",
				lrc: "/assets/music/lrc/陨落 - Fanfan.lrc",
			},
			{
				name: "再见",
				artist: "G.E.M. 邓紫棋",
				url: "/assets/music/再见 - G.E.M. 邓紫棋.mp3",
				cover: "/assets/music/cover/再见.jpg",
				lrc: "/assets/music/lrc/再见 - G.E.M. 邓紫棋.lrc",
			},
			{
				name: "知我",
				artist: "国风堂 / 哦漏",
				url: "https://ph.0824.uk/file/music/知我-国风堂哦漏.m4a",
				cover: "https://ph.0824.uk/file/music/知我-国风堂哦漏.jpg",
				lrc: "https://ph.0824.uk/file/music/知我-国风堂哦漏.lrc",
			},
			{
				name: "至少还有你",
				artist: "林忆莲",
				url: "/assets/music/至少还有你 - 林忆莲.mp3",
				cover: "/assets/music/cover/至少还有你.jpg",
				lrc: "/assets/music/lrc/至少还有你 - 林忆莲.lrc",
			},
		],
	},
};
