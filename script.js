const projects = [
	{
		name: 'portfolio1',
		url: 'https://poerfolio-example1.herokuapp.com/',
	},
	{
		name: 'portfolio2',
		url: 'https://poerfolio-example2.herokuapp.com/',
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, url }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${url}">
			<img src="/images/${name}/portfolio.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="${url}" class="red">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
