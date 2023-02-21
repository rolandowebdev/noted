export const sortData = (data: any, criteria: string): any => {
  switch (criteria) {
    case 'a-z':
      data.sort((a: any, b: any) => a.title.localeCompare(b.title))
      break
    case 'z-a':
      data.sort((a: any, b: any) => b.title.localeCompare(a.title))
      break
    case 'latest':
      data.sort((a: any, b: any) => b.id - a.id)
      break
    case 'longest':
      data.sort((a: any, b: any) => a.id - b.id)
      break
    case 'is_active':
      data.sort((a: any, b: any) => a.is_active - b.is_active)
      break
    default:
      return data
  }
  return data
}
