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
}

export const EditableText = ({ id }: EditableTextProps) => {
  const { activity, setActivity, updateActivity } = useActivityContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  const handleSubmit = () => {
    updateActivity({ ...activity, title: activity?.title, id })
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (inputRef.current) {
        setActivity(inputRef.current.value)
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
      value={activity?.title}
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
