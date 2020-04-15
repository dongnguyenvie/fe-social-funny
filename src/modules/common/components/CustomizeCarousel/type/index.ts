type Animation = "fade" | "slide";

export interface IItemsCarousel {
  url: string;
  nameArtist: string;
  kindOfMusic: string;
}
export interface IOptions {
  autoPlay?: boolean;
  interval?: number;
  indicators?: boolean;
  animation: Animation;
}

export interface IListCarousel {
  items: IItemsCarousel[];
}

export interface ICarousel {
  title: string;
  options?: IOptions;
  listCarousel: IListCarousel[];
}
