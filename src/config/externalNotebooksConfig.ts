// ============================================================================
// 笔记本外部数据源配置
// External Notebooks Configuration
// ============================================================================
// 从 GitHub Gist 读取公开的笔记本数据
// 数据结构参考 src/data/notebooks.ts

export interface ExternalNotebookConfig {
	gistId: string; // GitHub Gist ID
	name: string; // 笔记本显示名称
}

export interface ExternalNotebooksConfig {
	notebookGists: Record<string, ExternalNotebookConfig>;
	templates: Record<string, string>;
}

export const externalNotebooksConfig: ExternalNotebooksConfig = {
	notebookGists: {},
	templates: {},
};
