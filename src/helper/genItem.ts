
export const createTextNode = function(item: DataItem, rect: DOMRect): HTMLElement {
  const el = document.createElement('div')
  el.textContent = item.name
  el.className = 'word-cloud-item'
  return el
}