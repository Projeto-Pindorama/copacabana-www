/* Derived from heirloom-ng.pindorama.dob.jp's script of same name.
 * Copyright (C) 2023 Pindorama
 * 		Gabriel Souza (deablofk)
 * 		Luiz Antônio Rangel (takusuman)
 * All rights reserved.
 */

const repoEndPointURL = "https://api.github.com/repos/Projeto-Pindorama/copacabana"

async function getNewestRelease() {
    /* This will, in fact, get all the tags released until today. */
    const repoTags = `${repoEndPointURL}/tags`;
    
    try {
	const response = await fetch(repoTags);
	const releases = await response.json();
	
	const releaseCommit = await fetch(releases[0].commit.url);
	const commitInfo = await releaseCommit.json();
	
	const newestRelease = document.getElementById('newest-release');
	const newestDate = document.getElementById('newest-release-date');
	const releaseName = document.createElement('tt');
	const releaseDate = document.createElement('tt');

	releaseName.textContent = releases[0].name;
	releaseDate.textContent = commitInfo.commit.author.date;

        newestRelease.appendChild(releaseName);
        newestDate.appendChild(releaseDate);
  } catch (error) {
        console.log(`Request to ${repoTags} failed with error: ${error}`);
  }
}
