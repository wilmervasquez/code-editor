import { writable } from 'svelte/store';

const count = writable(0, () => {	console.log('got a subscriber');	return () => console.log('no more subscribers');});
count.set(1); // does nothing

const unsubscribe = count.subscribe((value) => {	}); // logs 'got a subscriber', then '1'
unsubscribe(); // logs 'no more subscribers'

const editorValue = (value: string) => {
  const { subscribe, set, update } = writable(value)
    
  return {
    subscribe,
    update,
    set,
    setValue: (value: string) => {
      set(value)
    },
    valueTemp: ''
  }
}

export const editorHTMLValue = editorValue('')
export const editorCSSValue = editorValue('')
export const editorJSValue = editorValue('')

export const codeTitle = writable('')

export const historyIdSelect = writable(0);