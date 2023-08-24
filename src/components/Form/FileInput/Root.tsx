'use client'

import React, {
    HTMLAttributes,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean
}

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
  multiple: boolean
}
const FileInputContext = createContext({} as FileInputContextType)

export function Root({multiple=false, id, ...props}: RootProps) {
  const customId= useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id: id ?? customId, files, multiple, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
