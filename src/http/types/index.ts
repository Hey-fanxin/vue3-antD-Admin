export interface toListItemDataType {
  name: string
}
export interface toListDataType {
  total: string,
  current: number,
  pageSize: number,
  list: Array<toListItemDataType>
}