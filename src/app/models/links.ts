interface Link {
  href: string;
}

export interface Links {
  self: Link
}

export interface LinksExtend {
  self: Link;
  first: Link;
  last: Link;
  next: Link;
  previous: Link;
}

