const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/entries?_sort=date&_order=desc&_expand=mood/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/entries?_sort=date&_order=desc&_expand=mood`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/entries/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}