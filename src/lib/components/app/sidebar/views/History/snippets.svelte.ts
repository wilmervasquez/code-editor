import { createObjectURLBlobStructHTML } from "$lib/utils";
import { getContext, setContext } from "svelte";

class Snippet {
  constructor(
    public id: string,
    public label: string,
    public xml: string,
    public css: string,
    public js: string,
    public createdAt: Date,
    public updatedAt: Date
  ) { }
}

class SnippetContext {
  localStorageName = 'code.editor.history.z'
  localStorageSelectId = 'code.editor.history.selectKey'
  snippets: Snippet[] = $state([])
  selectedSnippet?: Snippet = $state()
  selectedSnippetId?: string = $state() 
  windowPreview?: WindowProxy | null;
  doc: string = $state('')
  constructor() {
    try {
      let json = localStorage.getItem(this.localStorageName) ?? "[]"
      let snippets = JSON.parse(json) as Snippet[];

      for (const { id, label, xml, css, js, createdAt, updatedAt } of snippets)  {
        console.log(id);
        this.snippets.push(new Snippet( id, label, xml, css, js, new Date(createdAt), new Date(updatedAt)))
      };

      if (this.snippets.length > 0) {
        this.selectedSnippet = this.snippets[0]
      }

    } catch {
      
    };

    if (localStorage.getItem(this.localStorageSelectId)) {
      this.selectedSnippetId = localStorage.getItem(this.localStorageSelectId)!
    } else {
      this.selectedSnippetId
    }
  }

  createNew() {
    const key = crypto.randomUUID()
    this.snippets.unshift(new Snippet(crypto.randomUUID(), 'Untitle', '', '', '', new Date(), new Date()))
    this.saveSnippets()
  }

  saveSnippets() {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.sortSnippets()))
  }

  sortSnippets() {
    return this.snippets.toSorted((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  }

  setXml(xml: string) {
    if (!this.selectedSnippet) return
    this.selectedSnippet.xml = xml
    this.prerenderDoc()
    this.selectedSnippet.updatedAt = new Date()
    this.saveSnippets()

  }

  setCss(xml: string) {
    if (!this.selectedSnippet) return
    this.selectedSnippet.css = xml
    this.prerenderDoc()
    this.selectedSnippet.updatedAt = new Date()
    this.saveSnippets()

  }

  setJS(xml: string) {
    if (!this.selectedSnippet) return
    this.selectedSnippet.js = xml
    this.prerenderDoc()
    this.selectedSnippet.updatedAt = new Date()
    this.saveSnippets()
  }

  prerenderDoc() {
    if (!this.selectedSnippet) return
    this.doc = createObjectURLBlobStructHTML(this.selectedSnippet.xml, this.selectedSnippet.css, this.selectedSnippet.js);
  }

  saveSelectkey(key: string) {
    if (this.selectedSnippetId) {  
      localStorage.setItem(this.localStorageSelectId, this.selectedSnippetId)
    }
  }

  selectSnippet(id: string) {
    const snippet = this.snippets.find(s => s.id == id)
   
    if (!snippet) return
    this.selectedSnippet = snippet
    this.selectedSnippetId = snippet.id

    this.snippets = this.sortSnippets()
    this.updatePreview();
  }

  renameName(id: string, label: string) {
    const snippet = this.snippets.find(s => s.id == id)

    if (!snippet) return
    snippet.label = label
    snippet.updatedAt = new Date()

    this.saveSnippets()
  }

  remove(id: string) {
    this.snippets = this.snippets.filter(s => s.id != id)
  }

  openPreview() {
    if (!this.selectedSnippet) return
    var url = createObjectURLBlobStructHTML(this.selectedSnippet.xml, this.selectedSnippet.css, this.selectedSnippet.js)
    this.windowPreview = window.open(url, '_blank') as Window;
  }

  updatePreview() {
    if (!this.selectedSnippet) return
    if (this.windowPreview == undefined || this.windowPreview == null) return;
    this.windowPreview.location = createObjectURLBlobStructHTML(this.selectedSnippet.xml, this.selectedSnippet.css, this.selectedSnippet.js);
  }
}

const key = Symbol()

export function setSnnipetContext() {
  return setContext(key, new SnippetContext())
}

export function getSnnipetContext(): SnippetContext {
  return getContext(key)
}
