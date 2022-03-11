const loadTags = () => {
    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');
    const span = document.createElement('span');
    const nav = document.createElement('nav');
    for (let i = 0; i < 4; i++) {
        const newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', '#');
        nav.append(newAnchor);
    };
    header.append(span);
    header.append(nav);

    // Banner
    const banner = document.createElement('div');
    const bannerImg = document.createElement('img');
    banner.classList.add('banner');
    bannerImg.setAttribute('img', '../images/restaurant-main.jpg');
    bannerImg.setAttribute('alt', 'restaurant-main');
    banner.append(bannerImg);

    // Main
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    main.append(h2);
    for (let i = 0; i < 4; i++) {
        const p = document.createElement('p');
        main.append(p);
    };

    // Footer
    const footer = document.createElement('footer');
    for (let i = 1; i < 4; i++) {
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div' + i);
        footerDiv.append(document.createElement('p'));
        if (i == 3) {
            const ul = document.createElement('ul');
            footerDiv.append(ul);
            for (let j = 0; j < 4; j++) {
                const newLi = document.createElement('li');
                ul.append(newLi);
            }
        } else {
            footerDiv.append(document.createElement('p'));
        }
        footer.append(footerDiv);
    };

    content.append(header);
    content.append(banner);
    content.append(main);
    content.append(footer);
};

export { loadTags };
