<script>
    export let links = [
      { text: 'Inicio', url: '/' },
      { text: 'Energía Solar', url: '/resources/energia-solar' },
      { text: 'Fotovoltaica', url: '/resources/fotovoltaica' },
      { text: 'Térmica', url: '/resources/termica' },
      // Añadir más enlaces según sea necesario
    ];
</script>

<nav>
        <ul>
            {#each links as link}
                <li><a href={link.url}>{link.text}</a></li>
            {/each}
        </ul>
</nav>

<style>

nav {
margin-top: 1em;
}

ul {
list-style-type: none;
padding: 0;
}

li {
margin-bottom: 0.5em;
}

a {
text-decoration: none;
color: #333;
}

a:hover {
text-decoration: underline;
color: #1e90ff;
}

</style>
