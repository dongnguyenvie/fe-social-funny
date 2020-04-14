export interface INav {
  icon: string;
  content: string;
  url?: string;
}

export interface IRenderIcons extends INav {}

export interface IWrapperNavs {
  content: string;
  navs: INav[];
}

export interface InavMapper {
  navMapper: IWrapperNavs;
}

export interface INavigationUI {
  navigations: IWrapperNavs[];
}

export interface INavStyles {
  linkActive?: boolean;
}
