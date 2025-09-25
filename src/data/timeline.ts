// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "work",
		title: "武汉初心",
		description:
			"目前就职于武汉",
		type: "work",
		startDate: "2024-07-01",
		location: "WuHan",
		organization: "武汉初心创造",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"负责内置小游戏的开发",
			"游戏存档的管理",
			"UI场景的搭建，以及交互的实现",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "unity-excel",
		title: "Unity Excel Importer",
		description:
			"一个用于Unity的表格资源读取工具",
		type: "project",
		startDate: "2024-08-01",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"实现Unity表格数据的读取",
			"实现了Unity资源数据的配置与读取",
			"持续优化排除BUG中"
		],
		links: [
			{
				name: "Unity Excel Importer",
				url: "https://gitee.com/NuoYanRuoShui/ExcelImporter",
				type: "project",
			},
			{
				name: "使用演示",
				url: "https://www.bilibili.com/video/BV1rhUaYQENy?vd_source=cbcb01112bcf2b5e16c5a97933138e45&spm_id_from=333.788.videopod.sections",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "unity-ui",
		title: "Unity UI Manager",
		description:
			"一个简单好用的UI管理框架",
		type: "project",
		startDate: "2025-05-01",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"实现UI的全局管理",
			"实现性能的优化",
			"实现各种动画效果",
			"持续优化排除BUG中"
		],
		links: [
			{
				name: "Unity UI Manager",
				url: "https://gitee.com/NuoYanRuoShui/simple-uimanager.git",
				type: "project",
			},
			{
				name: "实现原理及使用",
				url: "https://www.bilibili.com/video/BV11bRrYiE3V?vd_source=cbcb01112bcf2b5e16c5a97933138e45&spm_id_from=333.788.videopod.sections",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "RecyclerView",
		title: "Unity RecyclerView",
		description:
			"一个简单好用的Unity无限滚动列表",
		type: "project",
		startDate: "2025-05-01",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"替代Unity原生的列表组件",
			"实现性能的优化",
			"持续优化排除BUG中"
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "Layout",
		title: "Unity GameObject LayoutGroup",
		description:
			"由于Unity自身的LayoutGroup只适用于UI，且只能是矩形布局，所以实现的自定义的布局管理器，实现了Unity自带组件的功能的同时，且适配了SpriteRenderer",
		type: "project",
		startDate: "2025-04-01",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"替代Unity原生的Layout组件",
			"实现SpriteRenderer的布局。扇形布局等",
			"持续优化排除BUG中"
		],
		icon: "material-symbols:code",
		color: "#f3dd13ff",
		featured: true,
	}
	,
	{
		id: "easy-save",
		title: "Unity EasySave",
		description:
			"一个简单好用的Unity存储系统",
		type: "project",
		startDate: "2025-03-01",
		skills: ["Assets", "C#", "Unity", "Git"],
		achievements: [
			"由于一些不可抗力暂不开源",
			"持续优化排除BUG中"
		],
		icon: "material-symbols:code",
		color: "#f12308ff",
		featured: true,
	},
	{
		id: "gm",
		title: "Game Jam",
		description:
			"一场持续半个月的游戏开发比赛",
		type: "project",
		startDate: "2023-11-01",
		endDate: "2023-12-15",
		skills: ["C#", "Unity"],
		achievements: [
			"了解了多人开发流程",
		],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	{
		id: "high-school-graduation",
		title: "高中",
		description:
			"以优异的成绩从高中毕业",
		type: "education",
		startDate: "2018-09-01",
		endDate: "2021-06-30",
		location: "河南，潢川",
		organization: "潢川一中",
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "english-certificate",
		title: "英语 CET-4",
		description:
			"通过了大学英语四级考试，掌握了基本的英语阅读和写作技能。",
		type: "achievement",
		startDate: "2023-06-15",
		organization: "全国大学英语考试委员会",
		achievements: [
			"CET-4 分数: 500",
			"提升英语技术文档阅读能力",
			"为未来研究外部技术材料奠定基础",
		],
		links: [
			{
				name: "CET-4 证书",
				url: "https://certificates.example.com/cet4",
				type: "certificate",
			},
		],
		icon: "material-symbols:translate",
		color: "#059669",
	},
	{
		id: "grid-bag",
		title: "Unity Grid Bag",
		description:
			"防三角洲游戏的网格背包",
		type: "project",
		startDate: "2025-08-04",
		icon: "material-symbols:database",
		color: "#059669",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
