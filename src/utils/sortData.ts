import { Todo } from '@/models'

export const sortData = (data: Todo[], criteria: string): any => {
  switch (criteria) {
    case 'latest':
      data.sort((a: any, b: any) => b.id - a.id)
      break
    case 'longest':
      data.sort((a: any, b: any) => a.id - b.id)
      break
    case 'a-z':
      data.sort((a: any, b: any) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
      break
    case 'z-a':
      data.sort((a: any, b: any) => {
        if (b.title < a.title) return -1
        if (b.title > a.title) return 1
        return 0
      })
      break
    case 'unfinished':
      data.sort((a: any, b: any) => +b.is_active - +a.is_active)
      break
    default:
      return data
  }
  return data
}
