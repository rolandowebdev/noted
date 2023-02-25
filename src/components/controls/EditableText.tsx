import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react'
import { KeyboardEvent, useRef } from 'react'
import { useActivityContext } from '../../context'
import { EditableControls } from './EditableControls'

export const EditableText = ({ activityId }: any) => {
  const { activity, setActivity, updateActivity } = useActivityContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    updateActivity({ ...activity, id: activityId, title: activity?.title })
  }

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (inputRef.current) {
        handleInputChange(inputRef.current.value)
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
      onChange={handleInputChange}
      onSubmit={handleSubmit}>
      <EditablePreview data-cy="todo-title" fontSize="4xl" />
      <Input as={EditableInput} ref={inputRef} onKeyDown={handleEnterKey} />
      <EditableControls />
    </Editable>
  )
}
