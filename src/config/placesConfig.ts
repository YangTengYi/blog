/**
 * 足迹地图配置（高德地图 JS API）
 *
 * 高德开放平台：https://lbs.amap.com/
 * 申请 Key 时选择「Web端(JS API)」
 */
export const placesConfig = {
	// 高德地图 Web 端 JS API Key
	// 申请地址：https://lbs.amap.com/dev/key/app
	amapKey: "9393761b9afe9b0e1a425b1d31cb504f",

	// 高德地图安全密钥（JS API 安全密钥）
	amapSecurityCode: "09bce7224b2f4e55db80a7962824f308",

	// 地图初始中心点（经纬度），默认中国中心
	center: [104.0, 35.0],

	// 地图初始缩放级别（1-20），4 适合展示全国
	zoom: 4,

	// 地图样式：标准 / 暗色
	// 暗色样式 ID: 'amap://styles/dark'
	// 标准样式: 'amap://styles/normal'
	mapStyle: "amap://styles/normal",
	darkMapStyle: "amap://styles/dark",

	// 标记点配置
	marker: {
		// 标记点颜色
		color: "#e74c3c",
		// 标记点大小
		size: 8,
	},

	// 足迹数据
	places: [
		{
			province: "河北",
			city: "保定",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "河北",
			city: "石家庄",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "河北",
			city: "唐山",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "河北",
			city: "秦皇岛",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "北京",
			city: "北京",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "宁夏",
			city: "银川",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
		{
			province: "宁夏",
			city: "石嘴山",
			district: "",
			experience: "",
			visitCount: 1,
			date: "",
		},
	],
};
