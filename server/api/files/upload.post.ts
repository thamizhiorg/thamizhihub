
export default eventHandler(async (event) => {
  const form = await readFormData(event)
  const file = form.get('file') as File
  const filename = form.get('filename') as string
  const author = form.get('author') as string
  const mail = form.get('mail') as string
  const prefix = form.get('mail') as string

  // Allow all file types
  const allowedTypes = ['*/*']

  // Ensure file size limit
  ensureBlob(file, { maxSize: '100MB' })

  // Upload file to blob storage using the custom file name
  return hubBlob().put(filename, file, { authorname: author, email: mail  }, { addPrefix: prefix })
})
