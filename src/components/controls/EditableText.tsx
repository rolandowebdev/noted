import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react'
import { KeyboardEvent, useRef } from 'react'
import { useActivityContext } from '../../context'
import { EditableControls } from './EditableControls'

interface EditableTextProps {
  id: any
  title: string
  onChange: (value: string) => void
}

export const EditableText = ({ id, title, onChange }: EditableTextProps) => {
  const { activity, updateActivity } = useActivityContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (newValue: string) => {
    onChange(newValue)
  }

  const handleSubmit = () => {
    updateActivity({ ...activity, title, id })
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (inputRef.current) {
        onChange(inputRef.current.value)
        inputRef.current.blur()
      }
    }
  }

  return (
    <Editable
      display="flex"
      alignItems="center"
      gap={3}
      fontWeight="semibold"
      textAlign="center"
      value={title}
      fontSize="3xl"
      selectAllOnFocus={false}
      onChange={handleChange}
      onSubmit={handleSubmit}>
      <EditablePreview />
      <Input as={EditableInput} ref={inputRef} onKeyDown={handleEnterKey} />
      <EditableControls />
    </Editable>
  )
}
