// ============================================================================
// 朋友圈（说说）外部数据源配置
// External Moments Configuration
// ============================================================================
// 从 GitHub Gist 读取公开的朋友圈数据
// 数据结构参考 src/data/moments.ts

export interface ExternalMomentsConfig {
	enable: boolean; // 是否启用远程数据源
	gistId: string; // GitHub Gist ID（公开 Gist，无需认证）
	fileName: string; // Gist 中的文件名
	defaultAuthor: string; // 默认作者名称
	defaultAvatar: string; // 默认作者头像
}

export const externalMomentsConfig: ExternalMomentsConfig = {
	enable: false,
	gistId: "",
	fileName: "moments.json",
	defaultAuthor: "匿名",
	defaultAvatar: "/avatar.png",
};
