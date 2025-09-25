// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other" | "Unity";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "Unity Excel Importer",
		title: "Unity Excel Importer",
		description:
			"一个用于Unity的表格资源读取工具",
		image: "",
		category: "Unity",
		techStack: ["Unity", "Excel"],
		status: "in-progress",
		liveDemo: "https://gitee.com/NuoYanRuoShui/ExcelImporter",
		sourceCode: "https://gitee.com/NuoYanRuoShui/ExcelImporter",
		startDate: "2024-08-01",
		endDate: "2025-10-01",
		featured: true,
		tags: ["Blog", "Unity", "Excel"],
	},
	{
		id: "GF Unity Excel Importer",
		title: "GF Unity Excel Importer",
		description:
			"将读取表格的工具适配GF框架",
		image: "",
		category: "Unity",
		techStack: ["Unity", "Excel"],
		status: "planned",
		liveDemo: "https://gitee.com/NuoYanRuoShui/ExcelImporter",
		sourceCode: "https://gitee.com/NuoYanRuoShui/ExcelImporter",
		startDate: "2024-08-01",
		endDate: "2025-10-01",
		featured: true,
		tags: ["Blog", "Unity", "Excel"],
	},
	{
		id: "Unity UI Manager",
		title: "Unity UI Manager",
		description:
			"一个简单好用的UI管理框架",
		image: "",
		category: "Unity",
		techStack: ["Unity", "UI"],
		status: "completed",
		liveDemo: "https://www.bilibili.com/video/BV11bRrYiE3V?vd_source=cbcb01112bcf2b5e16c5a97933138e45&spm_id_from=333.788.videopod.sections",
		sourceCode: "https://gitee.com/NuoYanRuoShui/simple-uimanager.git",
		startDate: "2025-05-01",
		endDate: "2025-09-01",
		featured: true,
		tags: ["Blog", "Unity", "UI"],
	},
	{
		id: "Layout",
		title: "Unity GameObject LayoutGroup",
		description:
			"由于Unity自身的LayoutGroup只适用于UI，且只能是矩形布局，所以实现的自定义的布局管理器，实现了Unity自带组件的功能的同时，且适配了SpriteRenderer",
		image: "",
		category: "Unity",
		techStack: ["Unity", "Layout"],
		status: "completed",
		liveDemo: "https://www.bilibili.com/video/BV11bRrYiE3V?vd_source=cbcb01112bcf2b5e16c5a97933138e45&spm_id_from=333.788.videopod.sections",
		sourceCode: "https://gitee.com/NuoYanRuoShui/simple-uimanager.git",
		startDate: "2025-05-01",
		endDate: "2025-09-01",
		featured: true,
		tags: ["Blog", "Unity", "UI"],
	},
	{
		id: "RecyclerView",
		title: "Unity RecyclerView",
		description:
			"一个简单好用的Unity无限滚动列表",
		image: "",
		category: "Unity",
		techStack: ["Unity", "RecyclerView"],
		status: "completed",
		liveDemo: "https://www.bilibili.com/video/BV11bRrYiE3V?vd_source=cbcb01112bcf2b5e16c5a97933138e45&spm_id_from=333.788.videopod.sections",
		sourceCode: "https://gitee.com/NuoYanRuoShui/simple-uimanager.git",
		startDate: "2025-05-01",
		endDate: "2025-07-01",
		featured: true,
		tags: ["Blog", "Unity", "UI"],
	},
	{
		id: "easy-save",
		title: "Unity EasySave",
		description:
			"一个简单好用的Unity存储系统",
		image: "",
		category: "Unity",
		techStack: ["Unity", "RecyclerView"],
		status: "completed",
		startDate: "2025-03-01",
		featured: true,
		tags: ["Blog", "Unity", "Data"],
	},
	{
		id: "grid-bag",
		title: "Unity Grid Bag",
		description:
			"Unity网格背包",
		image: "",
		category: "Unity",
		techStack: ["Unity", "Bag"],
		status: "completed",
		startDate: "2025-08-04",
		featured: true,
		tags: ["Blog", "Unity", "Bag"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
