export type TPageInfo = {
  page: number;
};

export const sortInfo = {
  sort: null,
} as const;

export type TSortInfo = typeof sortInfo;

export type TPokemonDataList = {
  count: number,
  results: Array<TPokemonData>
}

export type TPokemonData = {
  name: String,
  url: String,
}