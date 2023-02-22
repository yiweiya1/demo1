export interface ShowAddSwitch {
	noInfect: boolean;
	localinfeciton: boolean;
	confirm: boolean;
	dead: boolean;
	heal: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	all: boolean;
	suspect: boolean;
	nowConfirm: boolean;
	localConfirm: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	dead: number;
	continueDayZeroLocalConfirm: number;
	nowConfirm: number;
	confirm: number;
	highRiskAreaNum: number;
	showRate: boolean;
	wzz: number;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	adcode: string;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
}

export interface Today {
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Total {
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	confirm: number;
	dead: number;
	wzz: number;
	heal: number;
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	nowConfirm: number;
	mediumRiskAreaNum: number;
	continueDayZeroConfirm: number;
	showRate: boolean;
	provinceLocalConfirm: number;
	mtime: string;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	dead: number;
	showRate: boolean;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	nowConfirm: number;
	confirm: number;
	heal: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	wzz: number;
	highRiskAreaNum: number;
	showHeal: boolean;
	mtime: string;
}

export interface Children {
	today: Today;
	total: Total;
	name: string;
	adcode: string;
	date: string;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	heal: number;
	dead: number;
	mtime: string;
	local_acc_confirm: number;
	localWzzAdd: number;
	confirmAdd: number;
	nowLocalWzz: number;
	suspect: number;
	nowSevere: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	nowConfirm: number;
	localConfirm: number;
	noInfect: number;
	deadAdd: number;
	highRiskAreaNum: number;
	localConfirmAdd: number;
	mediumRiskAreaNum: number;
	mRiskTime: string;
	confirm: number;
	importedCase: number;
	noInfectH5: number;
	localConfirmH5: number;
}

export interface ChinaAdd {
	nowSevere: number;
	localConfirm: number;
	confirm: number;
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	importedCase: number;
	noInfect: number;
	noInfectH5: number;
	localConfirmH5: number;
}

export interface Diseaseh5Shelf {
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
}

export interface LocalCityNCOVDataList {
	province: string;
	adcode: string;
	date: string;
	mtime: string;
	local_confirm_add: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	isSpecialCity: boolean;
	city: string;
	isUpdated: boolean;
	local_wzz_add: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}