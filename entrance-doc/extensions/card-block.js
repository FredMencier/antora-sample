module.exports = function (registry) {
  registry.blockMacro('card', function () {
    const self = this
    self.process((parent, target, attrs) => {
      const role = attrs.role || 'default'
      const title = attrs.title || target
      const content = attrs.content || ''
      const version = attrs.version || ''
      const lts = attrs.lts || ''
      let url = attrs.url || ''
      
      // Si un xref est fourni, le convertir en URL
      if (attrs.xref) {
        // Créer un inline xref et le convertir pour obtenir l'URL résolue
        const xrefText = `xref:${attrs.xref}[]`
        const xrefInline = self.parseContent(self.createBlock(parent, 'open'), xrefText);
        const convertedXref = xrefInline.getContent()
        
        // Extraire l'href du lien généré
        const hrefMatch = convertedXref.match(/href="([^"]+)"/)
        if (hrefMatch) {
          url = hrefMatch[1]
        }
      }
      console.log(`card ${title} use url : ${url}`)
      
      const html = `
          <div class="doc-card ${role}"${url ? ` onClick="window.location.href='${url}';" style="cursor: pointer;"` : ''}>
            ${title ? `<h2>${title}</h2>` : ''}
            ${lts ? '<div class="bandeau">LTS</div>': ''}
            <div class="paragraph">
              <p>${content}</p>
              <br>
              <div class="doc-card-tag is-primary">${version}</div>
            </div>
          </div>`
      return self.createBlock(parent, 'pass', html)
    })
  })
}