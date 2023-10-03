export const startViewTransition = () => {
  if(window.document.startViewTransition){
    window.addEventListener('navigate', (event) => {
      const toUrl = new URL(event.destination.url)
  
      if(location.origin !== toUrl.origin) return
  
      event.intercept({
        async handler () {
          const respone = await fetch(toUrl.pathname)
          const text = await respone.text()
  
          const [,data] = text.match(/<body>([\s\S]*)<\/body>/i)
  
          window.document.startViewTransition( () => {
            document.body.innerHTML = data
            document.documentElement.scrollTop = 0
          })
        }
      })
    })
  }
}