export const formatDate = (dateString?: string): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return formattedDate
}
