import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: true,
	showMiniPlayer: true,
	mode: "meting",
	volume: 0.7,
	playMode: "list",
	showLyrics: true,
	syncWithGlobalPlayer: true,

	meting: {
		api: "https://mu.tsh520.cn/api?server=:server&type=:type&id=:id",
		server: "netease",
		type: "song",
		id: "30254265974",
		auth: "",
		fallbackApis: ["https://mu.tsh520.cn/api?server=:server&type=:type&id=:id"],
	},

	local: {
		playlist: [
			{
				name: "迷途羔羊",
				artist: "张震岳/大渊(顽童MJ116)",
				url: "/assets/music/迷途羔羊.mp3",
				cover:
					"http://p1.music.126.net/b1eSBbx2Yia0k89ocfOnjQ==/18677404023325159.jpg?param=130y130",
				lrc: "/assets/music/lrc/迷途羔羊.lrc",
			},
		],
	},

	// 3D 可视化器配置
	visualizer: {
		background: {
			dark: "#0a0a15",
			light: "#2D2D2D",
		},
		camera: {
			position: {
				x: 0,
				y: 32,
				z: 52,
			},
		},
		autoRotate: true,
		autoRotateSpeed: 0.3,
		height: {
			idle: 0.6,
			subBass: 4.0,
			bass: 3.0,
			lowMid: 2.0,
			mid: 2.5,
			highMid: 2.0,
			energy: 4.0,
			ripple: 3.0,
			rippleAccent: 1.0,
		},
		theme: {
			base1: "#050810",
			base2: "#0a0f1a",
			coolCore: "#2255ff",
			coolEdge: "#8844ff",
			warmCore: "#ff4422",
			warmEdge: "#ffaa00",
			rippleColor: "#44ddff",
			fogColor: "#050810",
			glowIntensity: 1.2,
		},
	},
};
