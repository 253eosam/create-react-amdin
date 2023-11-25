import { create } from 'zustand'

interface ApplicationState {
  auth: boolean
}


const useApplicationStore = create<ApplicationState>()(() => ({
  auth: true,
}))

export default useApplicationStore