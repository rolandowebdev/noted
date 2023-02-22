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
  onChange: (value: string) => void
}

export const EditableText = ({ id, onChange }: EditableTextProps) => {
  const { activity, setActivities, updateActivity } = useActivityContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    updateActivity({ ...activity, title: activity?.title, id }).then(
      (response: any) =>
        setActivities((prevActivity: any) =>
          prevActivity.map((activity: any) =>
            activity.id === response.id ? activity : activity
          )
        )
    )
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
      value={activity?.title}
      fontSize="3xl"
      selectAllOnFocus={false}
      onChange={onChange}
      onSubmit={handleSubmit}>
      <EditablePreview data-cy="todo-title" fontSize="4xl" />
      <Input as={EditableInput} ref={inputRef} onKeyDown={handleEnterKey} />
      <EditableControls />
    </Editable>
  )
}
