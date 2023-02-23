import { As } from '@chakra-ui/react'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcGenericSortingAsc,
  FcGenericSortingDesc,
  FcNumericalSorting12,
} from 'react-icons/fc'

interface SortOption {
  value: string
  text: string
  icon: As
}

export const sortOptions: SortOption[] = [
  {
    value: 'latest',
    text: 'Terbaru',
    icon: FcGenericSortingAsc,
  },
  {
    value: 'longest',
    text: 'Terlama',
    icon: FcGenericSortingDesc,
  },
  {
    value: 'a-z',
    text: 'A-Z',
    icon: FcAlphabeticalSortingAz,
  },
  {
    value: 'z-a',
    text: 'Z-A',
    icon: FcAlphabeticalSortingZa,
  },
  {
    value: 'unfinished',
    text: 'Belum Selesai',
    icon: FcNumericalSorting12,
  },
]
