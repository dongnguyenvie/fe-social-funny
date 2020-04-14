export interface IItemsCarousel {
  url: string;
  nameArtist: string;
  kindOfMusic: string;
}

export interface IListCarousel {
  items: IItemsCarousel[];
}

export interface ICarousel {
  title: string;
  listCarousel: IListCarousel[];
}
