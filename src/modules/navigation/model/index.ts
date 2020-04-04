export interface IRenderIcons {
  icon: string;
  content: string;
}

export interface INav {
  icons: string;
  content: string;
}

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
