// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "Unity",
		name: "Unity",
		description:
			"开发游戏的平台",
		icon: "material-symbols:database",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: ["mizuki-blog", "portfolio-website", "task-manager-app"],
		color: "#3178C6",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"流行且使用广泛的数据框架",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"分布式版本控制系统，是代码管理和团队协作的重要工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"一个轻量级但强大的代码编辑器，拥有丰富的插件生态系统。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "vs",
		name: "VS",
		description:
			"强大的代码编辑器",
		icon: "logos:visual-studio",
		category: "tools",
		level: "expert",
		experience: { years: 1, months: 6 },
		color: "#007ACC",
	},
	{
		id: "rider",
		name: "Rider",
		description:
			"JetBrains 提供的跨平台 .NET IDE，支持 C#、VB.NET、F# 和其他语言的开发。",
		icon: "logos:rider",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["dotnet-api", "desktop-app"],
		color: "#000000",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "专业的图像编辑和设计软件。",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		projects: ["ui-design", "image-processing"],
		color: "#31A8FF",
	},

	// Other Skills
	{
		id: "gf",
		name: "GF",
		description:
			"一个第三方开发游戏框架",
		icon: "material-symbols:database",
		category: "other",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["modern-api"],
		color: "#E10098",
	},
	{
		id: "gfx",
		name: "GFX",
		description:
			"最新的GF框架，适配了华佗、代码混淆、小程序等功能",
		icon: "material-symbols:database",
		category: "other",
		level: "advanced",
		experience: { years: 1, months: 4 },
		projects: ["search-system"],
		color: "#005571",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
