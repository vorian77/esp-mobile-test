import { localStorageStore } from '@skeletonlabs/skeleton'
import type { Writable } from 'svelte/store'
import type { Form } from '$lib'

export const formStore: Writable<Form[]> = localStorageStore('forms', [])
