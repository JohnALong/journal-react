const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/entries/${id}?&_expand=mood`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/entries?_sort=date&_order=desc&_expand=mood`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/entries/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newEntry) {
    return fetch(`${remoteURL}/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    }).then(data => data.json())
  },
  getWithMoods(id) {
    return fetch(`${remoteURL}/entries/${id}?_expand=mood`)
  },
  getMoods() {
    return fetch(`${remoteURL}/moods`)
    .then(result => result.json())
  }
}