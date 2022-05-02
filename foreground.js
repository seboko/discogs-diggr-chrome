console.log('injected Discogs Diggr')

// call the release page for every item
const n = document.querySelector("#pjax_container > table").children[1].childElementCount

const tableEntries = []
for (let i = 1; i <= n; i++) {
	const tableEntryNode = document.querySelector(`#pjax_container > table > tbody > tr:nth-child(${i})`)
	const href = tableEntryNode.querySelector(`td.item_description > a`).getAttribute('href')
	tableEntries.push(
		{
			"href": href,
			"node": tableEntryNode
		}
	)
}

for (const release of tableEntries) {
	fetch(release.href).then(
		resp => resp.text()
	).then(
		page => {
			const matches = page.match(/"youtubeId":"[^"]+"/g)
			// console.log('release:', release)
			// console.log(matches)
			return matches ?? []
		}
	).then(
		matches => {
			const youtubeIds = matches.map(match => match.match(/[^"]+/g)[2])
			// console.log('ytIds', youtubeIds)
			const playlist = `<iframe width="360" height="202" src="https://www.youtube.com/embed/${youtubeIds[0]}?playlist=${youtubeIds.join(',')}"frameborder="0" allowfullscreen>`
			const placeholder = document.createElement('div')
			placeholder.innerHTML = playlist
			release.node.appendChild(placeholder)
		}
	)
}