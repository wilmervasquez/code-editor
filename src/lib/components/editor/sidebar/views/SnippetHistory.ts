interface Snippet {
  name:string,
  css:string,
  js:string,
  xml:string,
  createdAt: string
  updatedAt: string
}

const HistorySnippet = {
  name: 'code.editor.history',
  data: new Map<string, Snippet>(),
  subscriptions: new Map(),
  selectKey: '',
  load: function() {
    try {
      let json = localStorage.getItem(this.name) ?? "{}"
      let map = JSON.parse(json);
      
      for (const key in map)  {
        this.data.set(key, map[key])
      };
      
    } catch {
      this.save()
    };

    if (localStorage.getItem(`${this.name}.selectKey`)) {
      this.selectKey = localStorage.getItem(`${this.name}.selectKey`)!
    } else {
      this.selectKey = this.add('','','')
      this.saveSelectkey(this.selectKey)
    }
  },
  save: function() {
    localStorage.setItem(this.name, JSON.stringify(Object.fromEntries(this.data)))
  },
  saveSelectkey: function(key: string) {
    this.selectKey = key
    localStorage.setItem(`${this.name}.selectKey`, this.selectKey)
  },
  selectSnippet: function(key: string) {
    const snp = this.data.get(key)
    this.saveSelectkey(key)

    for (const id of this.subscriptions.keys()) {
      const call = this.subscriptions.get(id);
      call(key);
    }
  },
  subscribe: function(callback: () => void) {
    const id = crypto.randomUUID()
    this.subscriptions.set(id, callback)
    return id
  },
  add: function(xml: string,css: string,js: string) {
    const key = crypto.randomUUID()
    this.data.set(key, {
      name:"Untitle 1",
      xml,
      css,
      js,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    this.save()
    return key
  },
  renameName: function(key: string, name: string) {
    const snp = this.data.get(key) as Snippet;
    snp.name = name
    snp.updatedAt = new Date().toISOString()

    this.data.set(key, snp)
    this.save()
  },
  updateCode: function(key:string, xml:string, css:string, js:string) {
    const snp = this.data.get(key);
    if (snp == null) return
    
    snp.xml = xml ?? snp.xml
    snp.css = css ?? snp.css
    snp.js = js ?? snp.js
    
    if ([snp.xml,snp.css,snp.js].join('') != [xml,css,js].join('')) {
      snp.updatedAt = new Date().toISOString()
    }

    this.data.set(key, snp)
    this.save()
  },
  remove: function(id: string) {
    this.data.delete(id)
  }
}

export { HistorySnippet, type Snippet}